const fontSizeControl = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

console.log(fontSizeControl.value);

fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value * (16 / 56) + "px";
});
