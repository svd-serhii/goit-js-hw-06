const numberEl = document.querySelector("#controls > input");
const createBtnEL = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  boxesEl.innerHTML = ""; //reset of input
  for (let i = 1; i <= numberEl.value; i += 1) {
    const box = document.createElement("div");
    box.style.width = 20 + i * 10 + "px";
    box.style.height = 20 + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.append(box);
  }
};

const destroyBoxes = () => {
  boxesEl.innerHTML = "";
  numberEl.value = "";
};

createBtnEL.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
