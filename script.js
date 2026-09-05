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

const form = document.querySelector("#contactForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const phoneError = document.querySelector("#phoneError");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  // Empty field validation
  if (nameInput.value.trim() == "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required.";
    valid = false;
  }

  // Format validation (email must contain @)
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain an '@' symbol.";
    valid = false;
  }

  if (!valid) return;

  // If valid, show success message
  document.querySelector("#apiBox").textContent =
    "Form submitted successfully!";
});

// Auto-clear errors when typing
[nameInput, emailInput, phoneInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    const errorElement = document.querySelector(`#${input.id}Error`);
    errorElement.textContent = "";
  });
});
