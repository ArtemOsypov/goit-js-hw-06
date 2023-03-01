const buttonAdd = document.querySelector('button[data-action="increment"]');
const buttonSub = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");
let counterValue = 0;

buttonAdd.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

buttonSub.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
