let cartItems = [];

function addToCart(picture) {
  cartItems.push(picture);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    cartItemsElement.appendChild(li);
  });
}

function pay() {
  
  cartItems = [];
  updateCart();
}
