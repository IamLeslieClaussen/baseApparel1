const form = document.querySelector(".container__left form");
const email = document.querySelector(".container__left input[type=email]");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let emailValue = email.value;
  if (validateEmail(emailValue)) {
    form.classList.remove("error");
  } else {
    form.classList.add("error");
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
