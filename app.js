const CONFIG = {
  business: {
    name: "MUNCHIES",
    subtitle: "Elotes Creations · Fresh Fruit & Sweet + Spicy",
    historia: [
      "MUNCHIES is a vibrant snack concept focused on sweet and spicy flavors, combining traditional elote creations with fresh fruit and bold toppings.",
      "With a playful, colorful style, MUNCHIES offers corn snacks, fruit cups, frozen treats, and specialty mixes designed to satisfy every craving.",
    ],
    datos: [
      { label: "Address", value: "4021 Diego Ln" },
      { label: "City/State", value: "Brownsville, Tx" },
      { label: "Phone", value: "9564662491" },
    ],
  },
  menu: [
    {
      title: "Elotes & Corn Creations",
      items: [
        { es: "Elote entero", en: "Elote on the Cob", price: "$5" },
        { es: "Elote en vaso", en: "Elote in a Cup", price: "$6" },
        { es: "Hot Cheetos + Elote", en: "Hot Cheetos + Corn", price: "$7" },
        { es: "Takis + Elote", en: "Takis + Corn", price: "$7" },
        { es: "Doritos + Elote", en: "Doritos + Corn", price: "$7" },
        {
          es: "Elote cargado",
          en: "Loaded Elote",
          price: "$9",
          note: "Corn + chips + cheese + chili",
        },
      ],
    },
    {
      title: "Add-Ons ($1 each)",
      items: [
        { es: "Queso", en: "Cheese", price: "$1" },
        { es: "Chile", en: "Chili", price: "$1" },
        { es: "Limón", en: "Lime", price: "$1" },
        { es: "Chamoy", en: "Chamoy", price: "$1" },
        { es: "Tajín", en: "Tajin", price: "$1" },
        { es: "Chamoy + Tajín", en: "Chamoy + Tajin", price: "$1" },
      ],
    },
    {
      title: "Fresh Fruit & Sweet + Spicy",
      items: [
        { es: "Vaso chico de fruta", en: "Small Fruit Cup", price: "$5" },
        { es: "Vaso grande de fruta", en: "Large Fruit Cup", price: "$7" },
        { es: "Fruta con dulces", en: "Fruit + Candy Mix", price: "$8" },
        { es: "Paleta de sandía", en: "Watermelon Stick", price: "$4" },
        { es: "Mango con chamoy y tajín", en: "Mango w/ Chamoy & Tajin", price: "$6" },
      ],
    },
    {
      title: "Ice Cream & Frozen Treats",
      items: [
        { es: "Cono suave", en: "Soft Serve Cone", price: "$4" },
        { es: "Cono cubierto", en: "Dipped Cone", price: "$5" },
        { es: "Vaso de nieve (2 bolas)", en: "Ice Cream Cup (2 scoops)", price: "$5" },
        { es: "Nachos de nieve", en: "Ice Cream Nachos", price: "$7" },
        { es: "Paletas de fruta", en: "Fruit Pops", price: "$4" },
      ],
    },
    {
      title: "Drinks & Slushies",
      items: [
        { es: "Agua fresca", en: "Agua Fresca", price: "$4" },
        { es: "Mangonada", en: "Mangonada", price: "$7" },
        { es: "Chamoyada", en: "Chamoyada", price: "$6" },
        { es: "Limonada de sabor", en: "Flavored Lemonade", price: "$5" },
        { es: "Granizado", en: "Slushie", price: "$5" },
      ],
    },
    {
      title: "Munchies Specialty Cups",
      items: [
        {
          es: "Vaso MUNCHIES",
          en: "The MUNCHIES Cup",
          price: "$10",
          note: "Corn + chips + cheese + fruit + candy + chili (sweet & spicy combo)",
        },
      ],
    },
  ],
  acciones: [],
};

const businessName = document.querySelector("#businessName");
const businessSubtitle = document.querySelector("#businessSubtitle");
const historiaContent = document.querySelector("#historiaContent");
const datosContent = document.querySelector("#datosContent");
const menuContent = document.querySelector("#menuContent");
const accionesSection = document.querySelector("#acciones");
const accionesContent = document.querySelector("#accionesContent");

businessName.textContent = CONFIG.business.name;
businessSubtitle.textContent = CONFIG.business.subtitle;

CONFIG.business.historia.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph;
  historiaContent.appendChild(p);
});

CONFIG.business.datos.forEach((item) => {
  const card = document.createElement("div");
  card.className = "info-card";

  const label = document.createElement("span");
  label.className = "info-label";
  label.textContent = item.label;

  const value = document.createElement("strong");
  value.textContent = item.value;

  card.append(label, value);
  datosContent.appendChild(card);
});

CONFIG.menu.forEach((category) => {
  const categoryWrap = document.createElement("article");
  categoryWrap.className = "menu-category";

  const pill = document.createElement("div");
  pill.className = "category-pill";
  pill.textContent = category.title;

  const itemsWrap = document.createElement("div");
  itemsWrap.className = "menu-items";

  category.items.forEach((item) => {
    const itemWrap = document.createElement("div");
    itemWrap.className = "menu-item";

    const row = document.createElement("div");
    row.className = "menu-row";

    const nameWrap = document.createElement("div");
    const nameEs = document.createElement("span");
    nameEs.textContent = item.es;

    const nameEn = document.createElement("span");
    nameEn.className = "menu-en";
    nameEn.textContent = item.en;

    nameWrap.append(nameEs, nameEn);

    const price = document.createElement("span");
    price.textContent = item.price;

    row.append(nameWrap, price);

    itemWrap.appendChild(row);

    if (item.note) {
      const note = document.createElement("div");
      note.className = "menu-note";
      note.textContent = item.note;
      itemWrap.appendChild(note);
    }

    itemsWrap.appendChild(itemWrap);
  });

  categoryWrap.append(pill, itemsWrap);
  menuContent.appendChild(categoryWrap);
});

if (!CONFIG.acciones.length) {
  accionesSection.classList.add("hidden");
} else {
  CONFIG.acciones.forEach((accion) => {
    const card = document.createElement("div");
    card.className = "action-card";

    const title = document.createElement("h3");
    title.textContent = accion.label;

    const link = document.createElement("a");
    link.href = accion.href;
    link.textContent = accion.cta;

    card.append(title, link);
    accionesContent.appendChild(card);
  });
}
