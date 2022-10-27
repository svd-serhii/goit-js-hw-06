const btnColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btnColor.addEventListener("click", changeColor);

function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
}
