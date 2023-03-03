const submitEl = document.querySelector(".login-form");

submitEl.addEventListener("submit", inputSubmit);

function inputSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
