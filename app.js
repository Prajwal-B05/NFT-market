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
  console.log(JSON.stringify(cartItems));
  let NFTP = document.querySelector('.grid')
  const NFT1C = document.querySelector('.NFT1');
  const NFT2C = document.querySelector('.NFT2')
  const NFT3C = document.querySelector('.NFT3')
  
  for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i] === "NFT1") {
      var divele = document.querySelector('.NFT1');
      NFTP.removeChild(divele);
    } else if (cartItems[i] === "NFT2") {
      var divele = document.querySelector('.NFT2');
      NFTP.removeChild(divele);
    } else if (cartItems[i] === "NFT3") {
      var divele = document.querySelector('.NFT3');
      NFTP.removeChild(divele);
    }
  }
cartItems = [];
updateCart();
console.log(JSON.stringify(cartItems));

}