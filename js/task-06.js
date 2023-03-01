const inputEl = document.querySelector("#validation-input");
const dataLengthValue = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", changeBorderColor);
// inputEl.addEventListener("input", () => {
//   console.log(inputEl.value);
// });

function changeBorderColor() {
  if (inputEl.value.trim().length === Number(dataLengthValue)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
  console.log(inputEl.value);
  console.log(inputEl.value.length);
  console.log(dataLengthValue);
}

// dataset.length;
