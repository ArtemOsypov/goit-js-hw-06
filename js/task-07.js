const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

inputEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  //   textEl.classList(".text-item");
  textEl.style.fontSize = `${inputEl.value}px`;
  console.log(inputEl.value);
}
