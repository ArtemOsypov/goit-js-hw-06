const inputEl = document.querySelector("#validation-input");
const dataLengthValue = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", changeBorderColor);

function changeClass(a, b) {
  inputEl.classList.add(a);
  inputEl.classList.remove(b);
}

function changeBorderColor() {
  if (inputEl.value.trim().length === Number(dataLengthValue)) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid", "valid");
  }
}
