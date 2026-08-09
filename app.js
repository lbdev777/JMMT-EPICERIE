const menuItems = [
  {
    name: "Assiette poulet",
    category: "Assiettes",
    description: "3 brochettes de poulet, salade, tomate, oignons, riz, frites et sauce au choix. Sauces au choix : algérienne, andalouse, fromagère, ketchup, mayonnaise ou harissa.",
    price: "22,49 $",
    tags: ["Assiettes"],
    image: "ASSIETEPOULET0beeab8f-4bc5-423b-9022-bfb5db51135c.png",
  },
  {
    name: "Assiette viande hachée",
    category: "Assiettes",
    description: "3 brochettes de viande hachée, salade, tomate, oignons, riz, frites et sauce au choix.",
    price: "23,49 $",
    image: "ChatGPT Image 29 juill. 2026, 23 h 42 min 18 s.png",
    tags: ["Assiettes"],
  },
  {
    name: "Assiette mixte",
    category: "Assiettes",
    description: "Choisis jusqu’à 3 viandes parmi poulet, merguez, viande hachée ou veau. Servie avec salade, tomate, oignons, riz, frites et sauce au choix : algérienne, andalouse, fromagère, ketchup, mayonnaise ou harissa.",
    price: "23,49 $",
    tags: ["Assiettes"],
    image: "ASSIETTESMIXabb5b42b-1f09-4332-a192-b635ec23b5cd.png",
  },
  {
    name: "Assiette brochettes de veau",
    category: "Assiettes",
    description: "3 brochettes de veau, salade, tomate, oignons, riz, frites et sauce au choix.",
    price: "23,49 $",
    image: "ChatGPT Image 29 juill. 2026, 23 h 42 min 18 s.png",
    tags: ["Assiettes"],
  },
  {
    name: "Bol poulet",
    category: "Bols",
    description: "Base de riz, poulet, 1 sauce et 7 garnitures.",
    price: "23,49 $",
    image: "ChatGPT Image 30 juill. 2026, 00 h 22 min 04 s.png",
    tags: ["Bols"],
  },
  {
    name: "Bol viande hachée",
    category: "Bols",
    description: "Base de riz, viande hachée, 1 sauce et 7 garnitures.",
    price: "25,49 $",
    image: "ChatGPT Image 30 juill. 2026, 00 h 22 min 04 s.png",
    tags: ["Bols"],
  },
  {
    name: "Bol mixte",
    category: "Bols",
    description: "Base de riz, poulet, viande hachée, 1 sauce et 7 garnitures.",
    price: "25,49 $",
    image: "ChatGPT Image 30 juill. 2026, 00 h 22 min 04 s.png",
    tags: ["Bols"],
  },
  {
    name: "Tacos poulet",
    category: "Tacos",
    description: "Poulet, frites et sauce fromagère.",
    price: "16,99 $",
    image: "ecfc1035-5cd2-41c2-a33d-20be7cf8fd9f.png",
    tags: ["Tacos"],
  },
  {
    name: "Tacos viande hachée",
    category: "Tacos",
    description: "Viande hachée, frites et sauce fromagère.",
    price: "17,99 $",
    image: "1450df71-1e33-4c0b-8b32-45ab7f310b71.png",
    tags: ["Tacos"],
  },
  {
    name: "Tacos mixte",
    category: "Tacos",
    description: "Choix parmi viande hachée / ground meat, poulet / chicken ou merguez. Sélectionne seulement 2 viandes, avec frites et sauce fromagère.",
    price: "18,99 $",
    image: "TACOSMIXTE4689dff8-dc00-40f5-a71d-79e6e4bb1d8d.png",
    tags: ["Tacos"],
  },
  {
    name: "Pita poulet",
    category: "Pitas",
    description: "Poulet, laitue, tomates, oignons et sauce à l’ail. Tu peux aussi choisir poulet, merguez ou viande hachée selon la version souhaitée.",
    price: "15,49 $",
    tags: ["Pitas"],
    image: "PITAPOULET66a8dcce-a75b-44cb-b487-3bc737bca048.png",
  },
  {
    name: "Pita viande hachée",
    category: "Pitas",
    description: "Viande hachée, laitue, tomates, oignons et sauce à l’ail.",
    price: "16,49 $",
    image: "PITAMIXTEfd4a6128-e7cd-465a-a585-a63e9dc48338.png",
    tags: ["Pitas"],
  },
  {
    name: "Pita mixte",
    category: "Pitas",
    description: "Choix parmi viande hachée / ground meat, poulet / chicken ou merguez. Sélectionne seulement 2 garnitures, avec laitue, tomates, oignons et sauce à l’ail.",
    price: "17,49 $",
    image: "PITAMIXTEfd4a6128-e7cd-465a-a585-a63e9dc48338.png",
    tags: ["Pitas"],
  },
  {
    name: "Burger viande hachée",
    category: "Burger et frites",
    description: "Viande hachée, laitue, tomates, oignons et ketchup.",
    price: "12,49 $",
    tags: ["Burger et frites"],
  },
  {
    name: "Panier de frites",
    category: "Burger et frites",
    description: "Croustillant, doré et servi en portion généreuse.",
    price: "2,25 $",
    image: "d987470b-5054-4e80-a542-330a6da29989.png",
    tags: ["Burger et frites"],
  },
  {
    name: "Thé à la menthe",
    category: "Boissons",
    description: "Menthe fraîche infusée dans l’eau, boisson chaude et apaisante.",
    price: "4,49 $",
    image: "THÉEMENTHEWHITEBACKGROUNS2b24e031-cd94-472c-8f1b-e2c40613d7ee.png",
    tags: ["Boissons"],
  },
  {
    name: "Coca Cola",
    category: "Boissons",
    description: "Boisson gazeuse rafraîchissante.",
    price: "2,49 $",
    image: "JMMTCOLA).jpg",
    tags: ["Boissons"],
  },
  {
    name: "Fanta",
    category: "Boissons",
    description: "Boisson gazeuse orange rafraîchissante.",
    price: "2,49 $",
    image: "fanta2p0.png",
    tags: ["Boissons"],
  },
  {
    name: "Jus de baies Oasis",
    category: "Boissons",
    description: "Jus de baies sans sucre ajouté.",
    price: "1,50 $",
    image: "EN_067311074991_8415.png",
    tags: ["Boissons"],
  },
  {
    name: "Jus d’orange Oasis",
    category: "Boissons",
    description: "Jus d’orange rafraîchissant.",
    price: "1,50 $",
    image: "fd6874b7-95f7-4ed1-b6ac-4769843297f1.b2a7057a2bac6016c14cb601184a32f3.avif",
    tags: ["Boissons"],
  },
  {
    name: "Fromagère",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
  {
    name: "Harissa",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
  {
    name: "Mayonnaise",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
  {
    name: "Ketchup",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
  {
    name: "Algérienne",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
  {
    name: "Andalouse",
    category: "Sauces",
    description: "1,49 $ chacune.",
    price: "1,49 $",
    tags: ["Sauces"],
  },
];

const categories = ["Tout", ...new Set(menuItems.map((item) => item.category))];
const currentCategory = new URLSearchParams(window.location.search).get("category");
const pageCategory = categories.includes(currentCategory) && currentCategory !== "Tout" ? currentCategory : null;

const categoryList = document.getElementById("categoryList");
const menuGrid = document.getElementById("menuGrid");
const searchInput = document.getElementById("menuSearchInput");
const resultCount = document.getElementById("resultCount");
const hoursTrigger = document.getElementById("openHoursModal");
const storeHoursContent = document.getElementById("storeHoursContent");

const meatOptions = ["Poulet", "Viande hachée", "Merguez", "Veau"];
const assietteMixteMeatOptions = ["Poulet", "Viande hachée", "Merguez"];
const sauceOptions = ["Algérienne", "Andalouse", "Fromagère", "Harissa", "Ketchup", "Mayonnaise"];

let activeCategory = "Tout";
let searchTerm = "";
let activeItem = null;

function getItemOptions(item) {
  const options = [];
  const lowerName = item.name.toLowerCase();
  const isTacosMixte = item.category === "Tacos" && lowerName.includes("mixte");
  const isPitaMixte = item.category === "Pitas" && lowerName.includes("mixte");
  const isAssietteMixte = item.category === "Assiettes" && lowerName.includes("mixte");
  const isFixedAssiette = item.category === "Assiettes" && !isAssietteMixte;
  const isFixedTacos = item.category === "Tacos" && (lowerName.includes("poulet") || lowerName.includes("viande hachée"));
  const isFixedPita = item.category === "Pitas" && (lowerName.includes("poulet") || lowerName.includes("viande hachée"));
  const meatChoices =
    item.category === "Bols"
      ? ["Poulet", "Viande hachée", "Mixte"]
      : isAssietteMixte
        ? assietteMixteMeatOptions
        : item.category === "Assiettes"
        ? meatOptions
        : ["Poulet", "Viande hachée", "Merguez"];

  const allowMeatChoice =
    item.category === "Bols" ||
    isAssietteMixte ||
    isTacosMixte ||
    isPitaMixte;

  if (allowMeatChoice) {
    options.push({
      key: "meat",
      label: "Choisis ta viande",
      type: isTacosMixte || isPitaMixte || isAssietteMixte ? "checkbox" : "radio",
      max: isTacosMixte || isPitaMixte ? 2 : isAssietteMixte ? 3 : undefined,
      choices: meatChoices,
      helper:
        isTacosMixte || isPitaMixte
          ? "Version mixte: sélectionne jusqu'à 2 viandes maximum."
          : isAssietteMixte
            ? "Assiette mixte: 3 viandes incluses. Sélectionne jusqu'à 3 viandes."
            : "Choisis la base qui te convient.",
    });
  }

  const allowSauceChoice =
    isFixedAssiette ||
    item.category === "Bols" ||
    item.category === "Burger et frites" ||
    isTacosMixte ||
    isPitaMixte;

  if (allowSauceChoice && !isFixedTacos && !isFixedPita) {
    options.push({
      key: "sauce",
      label: "Choisis ta sauce",
      type: "radio",
      choices: sauceOptions,
      helper: "Une sauce est incluse selon le plat, mais tu peux voir les options disponibles ici.",
    });
  }

  if (item.category === "Boissons") {
    options.push({
      key: "size",
      label: "Format",
      type: "radio",
      choices: ["Standard"],
      helper: "Format unique pour cette boisson.",
    });
  }

  return options;
}

function ensureModal() {
  let modal = document.getElementById("itemModal");

  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "itemModal";
  modal.className = "item-modal";
  modal.innerHTML = `
    <div class="item-modal-backdrop" data-close="true"></div>
    <div class="item-modal-panel" role="dialog" aria-modal="true" aria-labelledby="itemModalTitle">
      <button class="item-modal-close" type="button" aria-label="Fermer" data-close="true">×</button>
      <div class="item-modal-media" id="itemModalMedia"></div>
      <div class="item-modal-body">
        <p class="section-label dark">Détails du produit</p>
        <h2 id="itemModalTitle"></h2>
        <p class="item-modal-description" id="itemModalDescription"></p>
        <div class="item-modal-price-row">
          <strong id="itemModalPrice"></strong>
          <span id="itemModalCategory"></span>
        </div>
        <div class="item-options" id="itemModalOptions"></div>
        <div class="item-choice-summary" id="itemChoiceSummary"></div>
        <div class="item-modal-actions">
          <button class="primary-button" type="button" id="itemModalConfirm">Choix sélectionné</button>
          <button class="chip-button" type="button" data-close="true">Fermer</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close='true']");
    if (closeTarget) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  return modal;
}

function closeModal() {
  const modal = document.getElementById("itemModal");
  if (!modal) {
    return;
  }

  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  activeItem = null;
}

function renderItemOptions(item) {
  const options = getItemOptions(item);

  if (!options.length) {
    return `<p class="item-options-empty">Aucune sélection supplémentaire pour ce produit.</p>`;
  }

  return options
    .map(
      (group) => `
        <section class="option-group">
          <div class="option-group-head">
            <strong>${group.label}</strong>
            <span>${group.helper}</span>
          </div>
          <div class="option-chip-list" data-option-key="${group.key}" data-option-type="${group.type}" data-option-max="${group.max ?? ""}">
            ${group.choices
              .map(
                (choice, index) => `
                  <label class="option-chip ${group.type === "radio" && index === 0 ? "active" : ""}">
                    <input type="${group.type}" name="${group.key}" value="${choice}" ${group.type === "radio" && index === 0 ? "checked" : ""} />
                    <span>${choice}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function updateChoiceSummary() {
  const modal = document.getElementById("itemModal");
  const summary = document.getElementById("itemChoiceSummary");
  if (!modal || !summary || !activeItem) {
    return;
  }

  const selectedValues = [...modal.querySelectorAll(".option-chip-list input:checked")].map((input) => input.value);
  summary.textContent = selectedValues.length ? `Sélection actuelle: ${selectedValues.join(" · ")}` : "Aucune sélection.";
}

function openItemModal(item) {
  const modal = ensureModal();
  activeItem = item;

  const media = document.getElementById("itemModalMedia");
  const title = document.getElementById("itemModalTitle");
  const description = document.getElementById("itemModalDescription");
  const price = document.getElementById("itemModalPrice");
  const category = document.getElementById("itemModalCategory");
  const options = document.getElementById("itemModalOptions");
  const confirm = document.getElementById("itemModalConfirm");

  title.textContent = item.name;
  description.textContent = item.description;
  price.textContent = item.price;
  category.textContent = item.category;
  media.innerHTML = item.image
    ? `<img src="${item.image}" alt="${item.name}" />`
    : `<div class="item-modal-placeholder">${item.category}</div>`;
  options.innerHTML = renderItemOptions(item);
  updateChoiceSummary();

  options.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      const optionGroup = input.closest(".option-chip-list");

      if (optionGroup && input.type === "checkbox" && input.checked) {
        const max = Number(optionGroup.dataset.optionMax || 0);
        const selectedInGroup = optionGroup.querySelectorAll("input:checked").length;
        if (max > 0 && selectedInGroup > max) {
          input.checked = false;
        }
      }

      options.querySelectorAll(".option-chip").forEach((chip) => {
        const chipInput = chip.querySelector("input");
        chip.classList.toggle("active", Boolean(chipInput?.checked));
      });

      updateChoiceSummary();
    });
  });

  confirm.onclick = () => {
    updateChoiceSummary();
  };

  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function renderCategories() {
  if (!categoryList) {
    return;
  }

  categoryList.innerHTML = categories
    .map(
      (category) => `
        <button class="${category === activeCategory ? "active" : ""}" data-category="${category}">
          <span>${category}</span>
          <strong>${category === "Tout" ? menuItems.length : menuItems.filter((item) => item.category === category).length}</strong>
        </button>
      `,
    )
    .join("");

  categoryList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;

      if (category === "Tout") {
        window.location.href = "index.html";
        return;
      }

      window.location.href = `index.html?category=${encodeURIComponent(category)}#menu`;
    });
  });
}

function normalizeForSearch(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getTokenAlternatives(token) {
  const synonyms = {
    chicken: ["poulet"],
    beef: ["viande", "hachee"],
    meat: ["viande"],
    mixed: ["mixte"],
    plate: ["assiette", "assiettes"],
    bowl: ["bol", "bols"],
    pita: ["pita", "pitas"],
    fries: ["frite", "frites"],
    drink: ["boisson", "boissons"],
    drinks: ["boisson", "boissons"],
    sauce: ["sauce", "sauces"],
  };

  return [token, ...(synonyms[token] || [])];
}

function tokenMatches(token, haystack, words) {
  if (haystack.includes(token)) {
    return true;
  }

  if (words.some((word) => word.startsWith(token))) {
    return true;
  }

  if (token.length >= 4) {
    const shortToken = token.slice(0, -1);
    return words.some((word) => word.includes(shortToken));
  }

  return false;
}

function getFilteredItems() {
  const term = normalizeForSearch(searchTerm);
  const selectedCategory = pageCategory || activeCategory;
  const rawTokens = term ? term.split(/\s+/).filter(Boolean) : [];

  return menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "Tout" || item.category === selectedCategory;
    const haystack = normalizeForSearch(`${item.name} ${item.category} ${item.description} ${item.tags.join(" ")}`);
    const words = haystack.split(/\s+/).filter(Boolean);
    const matchesSearch =
      !rawTokens.length ||
      rawTokens.every((token) => {
        const alternatives = getTokenAlternatives(token);
        return alternatives.some((altToken) => tokenMatches(altToken, haystack, words));
      });
    return matchesCategory && matchesSearch;
  });
}

function renderMenu() {
  const filtered = getFilteredItems();
  const hasActiveSearch = normalizeForSearch(searchTerm).length > 0;
  document.body.classList.toggle("menu-search-active", hasActiveSearch);

  if (resultCount) {
    resultCount.textContent = pageCategory
      ? `${filtered.length} article${filtered.length > 1 ? "s" : ""} dans ${pageCategory}`
      : `${filtered.length} article${filtered.length > 1 ? "s" : ""} affiché${filtered.length > 1 ? "s" : ""}`;
  }

  menuGrid.innerHTML = filtered.length
    ? filtered
        .map(
          (item, index) => `
            <article class="menu-card" data-item-name="${item.name}" data-category="${item.category}">
              <div class="menu-card-visual${
                item.image ? " menu-card-image" : item.category === "Sauces" ? " visual-sauce" : ` visual-${(index % 6) + 1}`
              }">
                ${item.image ? `<img class="${item.name === "Fanta" ? "drink-image drink-image-sm" : "drink-image"}" src="${item.image}" alt="${item.name}" />` : ""}
              </div>
              <div class="menu-card-header">
                <div>
                  <h4>${item.name}</h4>
                  <p>${item.description}</p>
                </div>
                <span class="price">${item.price}</span>
              </div>
              <div class="menu-card-footer">
                <div class="tag-row">
                  ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </div>
                <button class="add-button" type="button">Détails</button>
              </div>
            </article>
          `,
        )
        .join("")
    : `
      <article class="menu-card">
        <div class="menu-card-header">
          <div>
            <h4>Aucun produit trouvé</h4>
            <p>Essaie un autre rayon ou une autre recherche.</p>
          </div>
        </div>
      </article>
    `;

  menuGrid.querySelectorAll(".menu-card").forEach((card) => {
    const itemName = card.dataset.itemName;
    const item = menuItems.find((entry) => entry.name === itemName);
    if (!item) {
      return;
    }

    card.addEventListener("click", (event) => {
      event.preventDefault();
      openItemModal(item);
    });
  });
}

function ensureEpicerieLightbox() {
  let lightbox = document.getElementById("epicerieLightbox");
  if (lightbox) {
    return lightbox;
  }

  lightbox = document.createElement("div");
  lightbox.id = "epicerieLightbox";
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML = `
    <div class="gallery-lightbox-backdrop" data-action="close"></div>
    <div class="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-label="Photo épicerie en grand">
      <button class="gallery-lightbox-close" type="button" aria-label="Fermer" data-action="close">×</button>
      <button class="gallery-lightbox-nav prev" type="button" aria-label="Image précédente" data-action="prev">‹</button>
      <img id="epicerieLightboxImage" src="" alt="" />
      <button class="gallery-lightbox-nav next" type="button" aria-label="Image suivante" data-action="next">›</button>
      <p id="epicerieLightboxCaption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const action = actionTarget.dataset.action;
    if (action === "close") {
      closeEpicerieLightbox();
    } else if (action === "prev") {
      moveEpicerieLightbox(-1);
    } else if (action === "next") {
      moveEpicerieLightbox(1);
    }
  });

  return lightbox;
}

let epicerieGalleryLinks = [];
let epicerieLightboxIndex = 0;

function renderEpicerieLightboxImage(index) {
  const image = document.getElementById("epicerieLightboxImage");
  const caption = document.getElementById("epicerieLightboxCaption");
  if (!image || !caption || !epicerieGalleryLinks.length) {
    return;
  }

  const currentIndex = (index + epicerieGalleryLinks.length) % epicerieGalleryLinks.length;
  epicerieLightboxIndex = currentIndex;
  const link = epicerieGalleryLinks[currentIndex];
  const img = link.querySelector("img");

  image.classList.add("is-switching");
  image.src = link.getAttribute("href") || "";
  image.alt = img?.alt || "Photo du rayon épicerie";
  caption.textContent = `${currentIndex + 1} / ${epicerieGalleryLinks.length}`;

  requestAnimationFrame(() => {
    image.classList.remove("is-switching");
  });
}

function openEpicerieLightbox(index) {
  const lightbox = ensureEpicerieLightbox();
  lightbox.classList.add("open");
  document.body.classList.add("modal-open");
  renderEpicerieLightboxImage(index);
}

function moveEpicerieLightbox(step) {
  renderEpicerieLightboxImage(epicerieLightboxIndex + step);
}

function closeEpicerieLightbox() {
  const lightbox = document.getElementById("epicerieLightbox");
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function initEpicerieGalleryLightbox() {
  epicerieGalleryLinks = [...document.querySelectorAll(".epicerie-gallery-grid a")];
  if (!epicerieGalleryLinks.length) {
    return;
  }

  epicerieGalleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openEpicerieLightbox(index);
    });
  });

  document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("epicerieLightbox");
    if (!lightbox || !lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeEpicerieLightbox();
    } else if (event.key === "ArrowLeft") {
      moveEpicerieLightbox(-1);
    } else if (event.key === "ArrowRight") {
      moveEpicerieLightbox(1);
    }
  });
}

let reviewGalleryLinks = [];
let reviewLightboxIndex = 0;

function ensureReviewLightbox() {
  let lightbox = document.getElementById("reviewLightbox");
  if (lightbox) {
    return lightbox;
  }

  lightbox = document.createElement("div");
  lightbox.id = "reviewLightbox";
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML = `
    <div class="gallery-lightbox-backdrop" data-action="close"></div>
    <div class="gallery-lightbox-panel" role="dialog" aria-modal="true" aria-label="Photo d'avis en grand">
      <button class="gallery-lightbox-close" type="button" aria-label="Fermer" data-action="close">×</button>
      <button class="gallery-lightbox-nav prev" type="button" aria-label="Image précédente" data-action="prev">‹</button>
      <img id="reviewLightboxImage" src="" alt="" />
      <button class="gallery-lightbox-nav next" type="button" aria-label="Image suivante" data-action="next">›</button>
      <p id="reviewLightboxCaption"></p>
    </div>
  `;

  document.body.appendChild(lightbox);

  lightbox.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const action = actionTarget.dataset.action;
    if (action === "close") {
      closeReviewLightbox();
    } else if (action === "prev") {
      moveReviewLightbox(-1);
    } else if (action === "next") {
      moveReviewLightbox(1);
    }
  });

  return lightbox;
}

function renderReviewLightboxImage(index) {
  const image = document.getElementById("reviewLightboxImage");
  const caption = document.getElementById("reviewLightboxCaption");
  if (!image || !caption || !reviewGalleryLinks.length) {
    return;
  }

  const currentIndex = (index + reviewGalleryLinks.length) % reviewGalleryLinks.length;
  reviewLightboxIndex = currentIndex;
  const link = reviewGalleryLinks[currentIndex];
  const img = link.querySelector("img");

  image.classList.add("is-switching");
  image.src = link.getAttribute("href") || "";
  image.alt = img?.alt || "Photo d'avis";
  caption.textContent = `${currentIndex + 1} / ${reviewGalleryLinks.length}`;

  requestAnimationFrame(() => {
    image.classList.remove("is-switching");
  });
}

function openReviewLightbox(index) {
  const lightbox = ensureReviewLightbox();
  lightbox.classList.add("open");
  document.body.classList.add("modal-open");
  renderReviewLightboxImage(index);
}

function moveReviewLightbox(step) {
  renderReviewLightboxImage(reviewLightboxIndex + step);
}

function closeReviewLightbox() {
  const lightbox = document.getElementById("reviewLightbox");
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function ensureHoursModal() {
  let modal = document.getElementById("hoursModal");
  if (modal) {
    return modal;
  }

  modal = document.createElement("div");
  modal.id = "hoursModal";
  modal.className = "hours-modal";
  modal.innerHTML = `
    <div class="hours-modal-backdrop" data-close="true"></div>
    <div class="hours-modal-panel" role="dialog" aria-modal="true" aria-labelledby="hoursModalTitle">
      <p class="section-label dark">Infos magasin</p>
      <h3 id="hoursModalTitle">Horaires</h3>
      <p class="hours-modal-list" id="hoursModalList"></p>
      <div class="hours-modal-actions">
        <button class="hours-modal-close" type="button" data-close="true">Fermer</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener("click", (event) => {
    const closeTarget = event.target.closest("[data-close='true']");
    if (closeTarget) {
      closeHoursModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeHoursModal();
    }
  });

  return modal;
}

function openHoursModal() {
  const modal = ensureHoursModal();
  const hoursList = document.getElementById("hoursModalList");

  if (hoursList && storeHoursContent) {
    hoursList.innerHTML = storeHoursContent.innerHTML;
  }

  modal.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeHoursModal() {
  const modal = document.getElementById("hoursModal");
  if (!modal) {
    return;
  }

  modal.classList.remove("open");
  document.body.classList.remove("modal-open");
}

function initReviewGalleryLightbox() {
  reviewGalleryLinks = [...document.querySelectorAll(".review-gallery a")];
  if (!reviewGalleryLinks.length) {
    return;
  }

  reviewGalleryLinks.forEach((link, index) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openReviewLightbox(index);
    });
  });

  document.addEventListener("keydown", (event) => {
    const lightbox = document.getElementById("reviewLightbox");
    if (!lightbox || !lightbox.classList.contains("open")) {
      return;
    }

    if (event.key === "Escape") {
      closeReviewLightbox();
    } else if (event.key === "ArrowLeft") {
      moveReviewLightbox(-1);
    } else if (event.key === "ArrowRight") {
      moveReviewLightbox(1);
    }
  });
}

function ensurePreviewWarning() {
  let warning = document.getElementById("previewWarning");
  if (warning) {
    return warning;
  }

  warning = document.createElement("div");
  warning.id = "previewWarning";
  warning.className = "preview-warning";
  warning.innerHTML = `
    <div class="preview-warning-backdrop"></div>
    <div class="preview-warning-panel" role="dialog" aria-modal="true" aria-labelledby="previewWarningTitle">
      <span class="preview-warning-label">Aperçu privé</span>
      <h2 id="previewWarningTitle">APERÇU DU SITE</h2>
      <p>
        Cette version est fournie uniquement pour la validation visuelle du propriétaire.
        Le contenu, le design et le code ne sont pas autorisés pour une réutilisation,
        une copie ou une publication sans accord écrit et sans avoir été acheté.
      </p>
      <div class="preview-warning-actions">
        <button type="button" id="previewWarningConfirm">J'ai compris</button>
      </div>
    </div>
  `;

  document.body.appendChild(warning);

  const confirmButton = document.getElementById("previewWarningConfirm");
  if (confirmButton) {
    confirmButton.addEventListener("click", closePreviewWarning);
  }

  return warning;
}

function openPreviewWarning() {
  const warning = ensurePreviewWarning();
  warning.classList.add("open");
  document.body.classList.add("preview-warning-open");
}

function closePreviewWarning() {
  const warning = document.getElementById("previewWarning");
  if (!warning) {
    return;
  }

  warning.classList.remove("open");
  document.body.classList.remove("preview-warning-open");
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value;
    renderMenu();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchTerm = "";
      renderMenu();
    }
  });
}

if (categoryList) {
  renderCategories();
}

if (pageCategory && document.getElementById("categoryTitle")) {
  document.getElementById("categoryTitle").textContent = pageCategory;
}

if (pageCategory && document.getElementById("categoryIntro")) {
  document.getElementById("categoryIntro").textContent = `Seulement les articles du rayon ${pageCategory.toLowerCase()}.`;
}

if (menuGrid) {
  renderMenu();
}

initEpicerieGalleryLightbox();
initReviewGalleryLightbox();
openPreviewWarning();

if (hoursTrigger) {
  hoursTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    openHoursModal();
  });
}
