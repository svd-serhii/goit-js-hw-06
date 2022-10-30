const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredientsContainerEl = document.querySelector("#ingredients");

const ingredientsList = ingredients.map((element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = element;

  ingredientsContainerEl.append(ingredientsItem);
});

// console.log(ingredientsList);
