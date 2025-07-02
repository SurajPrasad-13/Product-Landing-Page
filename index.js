const addButton = document.querySelector(".addProduct");
const editButton = document.querySelectorAll(".editProductBtn");
// console.log(editButton);

const FormToAdd = document.querySelector("#FormToAdd");
const FormToEdit = document.querySelector("#FormToEdit");

const crossBtn = document.querySelectorAll(".cross");
const cancelBtn = document.querySelectorAll(".cancel");

const productList = document.querySelector("#productList");

const product = document.querySelectorAll(".product");

const deleteButton = document.querySelectorAll(".deleteProductBtn");
console.log(deleteButton);

// buttons to show Form
addButton.addEventListener("click", () => {
  FormToAdd.style.display = "block";
  productList.style.opacity = 0.2;
});

editButton.forEach((element) => {
  element.addEventListener("click", () => {
    FormToEdit.style.display = "block";
    productList.style.opacity = 0.2;
    console.log("Edit clicked");
  });
});

// buttons to remove Form
function removeForm(form) {
  form.style.display = "none";
  productList.style.opacity = 1;
}
crossBtn[0].addEventListener("click", () => removeForm(FormToAdd));
crossBtn[1].addEventListener("click", () => removeForm(FormToEdit));
cancelBtn[0].addEventListener("click", () => removeForm(FormToAdd));
cancelBtn[1].addEventListener("click", () => removeForm(FormToEdit));

// click outside the form
productList.addEventListener("click", () => removeForm(FormToAdd));

// delete the product
for (let i = 0; i < product.length; i++) {
  deleteButton[i].addEventListener("click", () => {
    product[i].style.display = "none";
  });
}
