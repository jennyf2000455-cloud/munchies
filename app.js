const CONFIG = {
  name: "MUNCHIES",
  subtitle: "Elotes & Corn Creations · Fresh Fruit & Sweet + Spicy",
  assets: {
    logo: "assets/logo-munch.jpeg"
  },
  historia: [
    "MUNCHIES is a vibrant food concept focused on sweet and spicy snacks, blending traditional elote flavors with fresh fruit and bold toppings.",
    "With a colorful and fun style, MUNCHIES offers everything from corn creations and chip snacks to fruit cups and frozen treats, delivering unique flavor combinations for every craving."
  ],
  datos: {
    direccion: "",
    ciudadEstado: "",
    telefono: "",
    whatsapp: ""
  },
  menu: [
    {
      categoria: "Elotes & Corn Creations",
      items: [
        { nombre: "Elote en elote / Elote on the Cob", precio: "$5" },
        { nombre: "Elote en vaso / Elote in a Cup", precio: "$6" },
        { nombre: "Hot Cheetos + Elote / Hot Cheetos + Corn", precio: "$7" },
        { nombre: "Takis + Elote / Takis + Corn", precio: "$7" },
        { nombre: "Doritos + Elote / Doritos + Corn", precio: "$7" },
        {
          nombre: "Elote cargado / Loaded Elote",
          precio: "$9",
          nota: "Corn + chips + cheese + chili"
        }
      ]
    },
    {
      categoria: "Add-Ons",
      nota: "$1 each",
      items: [
        { nombre: "Queso / Cheese", precio: "$1" },
        { nombre: "Chile / Chili", precio: "$1" },
        { nombre: "Limón / Lime", precio: "$1" },
        { nombre: "Chamoy / Chamoy", precio: "$1" },
        { nombre: "Tajín / Tajin", precio: "$1" },
        { nombre: "Chamoy + Tajín / Chamoy + Tajin", precio: "$1" }
      ]
    },
    {
      categoria: "Fresh Fruit & Sweet + Spicy",
      items: [
        { nombre: "Vaso chico de fruta / Small Fruit Cup", precio: "$5" },
        { nombre: "Vaso grande de fruta / Large Fruit Cup", precio: "$7" },
        { nombre: "Fruta con dulces / Fruit + Candy Mix", precio: "$8" },
        { nombre: "Paleta de sandía / Watermelon Stick", precio: "$4" },
        { nombre: "Mango con chamoy y tajín / Mango w/ Chamoy & Tajin", precio: "$6" }
      ]
    },
    {
      categoria: "Ice Cream & Frozen Treats",
      items: [
        { nombre: "Cono suave / Soft Serve Cone", precio: "$4" },
        { nombre: "Cono cubierto / Dipped Cone", precio: "$5" },
        { nombre: "Vaso de nieve (2 bolas) / Ice Cream Cup (2 scoops)", precio: "$5" },
        { nombre: "Nachos de nieve / Ice Cream Nachos", precio: "$7" },
        { nombre: "Paletas de fruta / Fruit Pops", precio: "$4" }
      ]
    },
    {
      categoria: "Drinks & Slushies",
      items: [
        { nombre: "Agua fresca / Agua Fresca", precio: "$4" },
        { nombre: "Mangonada / Mangonada", precio: "$7" },
        { nombre: "Chamoyada / Chamoyada", precio: "$6" },
        { nombre: "Limonada de sabor / Flavored Lemonade", precio: "$5" },
        { nombre: "Granizado / Slushie", precio: "$5" }
      ]
    },
    {
      categoria: "Munchies Specialty Cups",
      items: [
        {
          nombre: "Vaso MUNCHIES / The MUNCHIES Cup",
          precio: "$10",
          nota: "Corn + chips + cheese + fruit + candy + chili (sweet & spicy combo)"
        }
      ]
    }
  ]
};

const splitBilingual = (value) => {
  const parts = value.split("/").map((part) => part.trim());
  const primary = parts[0] || value;
  const secondary = parts.slice(1).join("/ ").trim();
  return { primary, secondary };
};

const renderHero = () => {
  document.getElementById("businessName").textContent = CONFIG.name;
  document.getElementById("businessSubtitle").textContent = CONFIG.subtitle;

  const logo = document.getElementById("logo");
  const logoWrap = document.getElementById("logoWrap");
  if (CONFIG.assets && CONFIG.assets.logo) {
    logo.src = CONFIG.assets.logo;
  } else {
    logo.classList.add("hidden");
    return;
  }
  logo.addEventListener("error", () => {
    logo.classList.add("hidden");
  });
};

const renderHistoria = () => {
  const historia = document.getElementById("historiaContent");
  historia.innerHTML = "";
  CONFIG.historia.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    historia.appendChild(p);
  });
};

const renderDatos = () => {
  const datosContent = document.getElementById("datosContent");
  const entries = [
    { label: "Dirección", value: CONFIG.datos.direccion },
    { label: "Ciudad/Estado", value: CONFIG.datos.ciudadEstado },
    { label: "Teléfono", value: CONFIG.datos.telefono }
  ];

  const validEntries = entries.filter((entry) => entry.value);

  if (validEntries.length === 0) {
    datosContent.innerHTML = "<p class=\"menu-note\">Información disponible próximamente.</p>";
    return;
  }

  validEntries.forEach((entry) => {
    const card = document.createElement("div");
    card.className = "info-card";

    const title = document.createElement("h3");
    title.textContent = entry.label;

    const value = document.createElement("p");
    value.textContent = entry.value;

    card.append(title, value);
    datosContent.appendChild(card);
  });
};

const renderMenu = () => {
  const menuContent = document.getElementById("menuContent");
  menuContent.innerHTML = "";

  CONFIG.menu.forEach((section) => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const heading = document.createElement("h3");
    heading.textContent = section.categoria;
    card.appendChild(heading);

    if (section.nota) {
      const note = document.createElement("p");
      note.className = "menu-note";
      note.textContent = section.nota;
      card.appendChild(note);
    }

    const list = document.createElement("div");
    list.className = "menu-list";

    section.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "menu-item";

      const name = document.createElement("div");
      name.className = "item-name";

      const { primary, secondary } = splitBilingual(item.nombre);
      if (secondary) {
        const primarySpan = document.createElement("span");
        primarySpan.textContent = primary;

        const secondarySpan = document.createElement("span");
        secondarySpan.textContent = secondary;
        secondarySpan.className = "secondary";

        name.textContent = "";
        name.append(primarySpan, secondarySpan);
      } else {
        name.textContent = primary;
      }

      const price = document.createElement("div");
      price.className = "item-price";
      price.textContent = item.precio;

      const left = document.createElement("div");
      left.appendChild(name);

      if (item.nota) {
        const note = document.createElement("div");
        note.className = "item-note";
        note.textContent = item.nota;
        left.appendChild(note);
      }

      row.append(left, price);
      list.appendChild(row);
    });

    card.appendChild(list);
    menuContent.appendChild(card);
  });
};

const renderAcciones = () => {
  const accionesSection = document.getElementById("acciones");
  const accionesContent = document.getElementById("accionesContent");
  accionesContent.innerHTML = "";

  const actions = [];

  if (CONFIG.datos.telefono) {
    actions.push({
      title: "Llamar",
      description: CONFIG.datos.telefono,
      href: `tel:${CONFIG.datos.telefono}`
    });
  }

  if (actions.length === 0) {
    accionesSection.classList.add("hidden");
    return;
  }

  accionesSection.classList.remove("hidden");

  actions.forEach((action) => {
    const card = document.createElement("a");
    card.className = "action-card";
    card.href = action.href;
    card.innerHTML = `<strong>${action.title}</strong><span>${action.description}</span>`;
    accionesContent.appendChild(card);
  });
};

const init = () => {
  renderHero();
  renderHistoria();
  renderDatos();
  renderMenu();
  renderAcciones();
};

init();
