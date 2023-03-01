const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const newListItemArr = ingredients.map((ingredient, index) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredients[index];
  listItemEl.classList.add("item");
  return listItemEl;
});

listEl.append(...newListItemArr);
