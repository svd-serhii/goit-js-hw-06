// const actions = document.querySelectorAll("#counter button");
// // console.log(actions);
// const value = document.querySelector("#value");

// let counterValue = 0;
// // console.log(counterValue);

// actions[0].addEventListener("click", () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// });

// actions[1].addEventListener("click", () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// });

const setDecrement = document.querySelector('[data-action="decrement"]');

const setIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function makeDecrementClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function makeIncrementClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

setDecrement.addEventListener("click", makeDecrementClick);

setIncrement.addEventListener("click", makeIncrementClick);
