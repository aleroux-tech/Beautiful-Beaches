
// 1. button content
const factButton = document.querySelector("#factButton");
const beachFact = document.querySelector("#beachFact");

factButton.addEventListener("click", () => {
  beachFact.textContent =
    "Fun fact: Beaches can be made of coral, lava, shells, or even glass!";
});

// 2. Style changes on input
const colorInput = document.querySelector("#colorInput");
const colorPreview = document.querySelector("#colorPreview");

colorInput.addEventListener("input", () => {
  colorPreview.style.color = colorInput.value; // ✔ FIXED LINE
});

// 3. Dynamic list
const listInput = document.querySelector("#listInput");
const addItem = document.querySelector("#addItem");
const itemList = document.querySelector("#itemList");

addItem.addEventListener("click", () => {
  const newItemText = listInput.value.trim();
  if (newItemText === "") return;

  const li = document.createElement("li");
  li.textContent = newItemText;

  itemList.appendChild(li);
  listInput.value = "";
});
