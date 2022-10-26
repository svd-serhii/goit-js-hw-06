const inputEl = document.querySelector("#validation-input");
const inputIndexEl = document.querySelector("#validation-input[data-length]");

console.log(inputEl.dataset.length);
console.log(inputEl.value.length);

function passCheck() {
  if (inputEl.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (inputEl.value.length > 0) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
}

inputEl.addEventListener("blur", passCheck);
