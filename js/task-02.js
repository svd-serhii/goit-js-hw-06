const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsContainerEl = document.querySelector("#ingredients");

let newList = [];

const ingredientsLst = ingredients.map((element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = element;

  newList.push(ingredientsItem);
});

ingredientsContainerEl.append(...newList);

// console.log(ingredientsLst);
