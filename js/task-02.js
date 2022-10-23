const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsContainerEl = document.querySelector("#ingredients");

const ingredientsLst = ingredients.map((element) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.classList.add("item");
  ingredientsItem.textContent = element;

  ingredientsContainerEl.append(ingredientsItem);

  return ingredientsItem;
});

// console.log(ingredientsLst);
