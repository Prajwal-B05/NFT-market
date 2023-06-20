const nftData = [
  {
    title: 'Bored Ape 1',
    imageSrc: 'img/nft4.jpg',
    artist: 'Sathoshi Nakamoto',
    price: '1.2 ETH'
  },
  // Add more NFT data here...
];

const cartItems = [];

const nftContainer = document.getElementById('nft-container');

nftData.forEach(nft => {
  const card = document.createElement('div');
  card.className = 'card';

  const card2 = document.createElement('div');
  card2.className = 'card2';

  const img = document.createElement('img');
  img.src = nft.imageSrc;
  img.alt = nft.title;
  img.className = 'card2';

  const text = document.createElement('div');
  text.className = 'text';
  
  const title = document.createElement('h3');
  title.textContent = nft.title;

  const artist = document.createElement('p');
  artist.textContent = `Artist: ${nft.artist}`;

  const price = document.createElement('p');
  price.textContent = `Price: ${nft.price}`;

  const buyButton = document.createElement('button');
  buyButton.className = 'buy-button';
  buyButton.textContent = 'Buy';
  buyButton.onclick = function() {
    addToCart(nft.title, nft.imageSrc);
  };

  text.appendChild(title);
  text.appendChild(artist);
  text.appendChild(price);

  card2.appendChild(img);
  card2.appendChild(text);
  card2.appendChild(buyButton);

  card.appendChild(card2);

  nftContainer.appendChild(card);
});

function addToCart(title, imageSrc) {
  cartItems.push({ title, imageSrc });
  updateCart();
  listSelectedItems();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.title;
    cartItemsElement.appendChild(li);
  });
}

function pay() {
  const cartItemsElement = document.getElementById('cart-items');
  const selectedItemsElement = document.getElementById('selected-items-list');
  
  cartItems.forEach(item => {
    const title = item.title;
    const nftElement = document.querySelector(`[data-title="${title}"]`);
    if (nftElement) {
      nftElement.remove();
    }
  });

  cartItems.length = 0;
  cartItemsElement.innerHTML = '';
  selectedItemsElement.innerHTML = '';
}

function listSelectedItems() {
  const selectedItemsElement = document.getElementById('selected-items-list');
  selectedItemsElement.innerHTML = '';

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item.title;
    selectedItemsElement.appendChild(li);
  });
}
