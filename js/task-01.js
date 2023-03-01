const mainMenuEl = document.querySelector("#categories");
const listCategoriesEl = mainMenuEl.querySelectorAll(".item");
// console.log(mainMenuEl);
// console.log(listCategoriesEl);

// ==== 1.1 ===
console.log(`Number of categories: ${listCategoriesEl.length}`);

// === 1.2 ===
listCategoriesEl.forEach((elem) => {
  const headerEl = elem.firstElementChild;
  const subMenuEl = elem.lastElementChild.children;
  console.log(`Category: ${headerEl.textContent}`);
  console.log(`Elements: ${subMenuEl.length}`);
});
