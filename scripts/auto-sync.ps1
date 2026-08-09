param(
  [string]$Branch = "main",
  [int]$DebounceMs = 1500
)

$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
Set-Location $root

Write-Host "Auto-sync watcher started in $root"
Write-Host "Watching: *.html, *.css, *.js, images"
Write-Host "Target branch: $Branch"
Write-Host "Press Ctrl+C to stop."

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $root
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $false
$watcher.NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite, Size'
$watcher.EnableRaisingEvents = $true

$timer = New-Object System.Timers.Timer
$timer.Interval = $DebounceMs
$timer.AutoReset = $false

$script:allowedExtensions = @(
  ".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".webp", ".avif", ".svg"
)

$syncAction = {
  try {
    Set-Location $root
    $status = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($status)) {
      return
    }

    git add -A
    $stamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Auto sync $stamp" | Out-Null

    if ($LASTEXITCODE -eq 0) {
      git push origin $Branch
      Write-Host "[$(Get-Date -Format HH:mm:ss)] Pushed updates to origin/$Branch"
    }
  } catch {
    Write-Host "[$(Get-Date -Format HH:mm:ss)] Auto-sync error: $($_.Exception.Message)"
  }
}

$timerEvent = Register-ObjectEvent -InputObject $timer -EventName Elapsed -Action $syncAction

$watchHandler = {
  $extension = [System.IO.Path]::GetExtension($Event.SourceEventArgs.FullPath).ToLowerInvariant()
  if ($script:allowedExtensions -notcontains $extension) {
    return
  }

  if ($Event.SourceEventArgs.Name -like "backup-images-*") {
    return
  }

  $timer.Stop()
  $timer.Start()
}

$createdEvent = Register-ObjectEvent -InputObject $watcher -EventName Created -Action $watchHandler
$changedEvent = Register-ObjectEvent -InputObject $watcher -EventName Changed -Action $watchHandler
$deletedEvent = Register-ObjectEvent -InputObject $watcher -EventName Deleted -Action $watchHandler
$renamedEvent = Register-ObjectEvent -InputObject $watcher -EventName Renamed -Action $watchHandler

try {
  while ($true) {
    Wait-Event -Timeout 2 | Out-Null
  }
} finally {
  Unregister-Event -SourceIdentifier $createdEvent.Name -ErrorAction SilentlyContinue
  Unregister-Event -SourceIdentifier $changedEvent.Name -ErrorAction SilentlyContinue
  Unregister-Event -SourceIdentifier $deletedEvent.Name -ErrorAction SilentlyContinue
  Unregister-Event -SourceIdentifier $renamedEvent.Name -ErrorAction SilentlyContinue
  Unregister-Event -SourceIdentifier $timerEvent.Name -ErrorAction SilentlyContinue
  $watcher.Dispose()
  $timer.Dispose()
}
