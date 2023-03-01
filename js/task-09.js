function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyChangeColor = document.querySelector("body");

btnChangeColor.addEventListener("click", handleChangeColor);

function handleChangeColor() {
  bodyChangeColor.style.backgroundColor = getRandomHexColor();
  textEl.innerHTML = `${getRandomHexColor()}`;

  console.log(getRandomHexColor());
}
