let form = document.forms.white;
let size = form.elements.size;
let quantity = form.elements.quantity

if (parseInt(quantity) <= 0) {
  document.alert("Please enter a valid quantity")
}
