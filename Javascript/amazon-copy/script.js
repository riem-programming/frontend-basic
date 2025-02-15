const products = [
  {
    id: 1,
    name: "Smartphone X",
    cost: 599.99,
    imageUrl: "https://picsum.photos/200/300?1", // Imagen aleatoria 200x300
  },
  {
    id: 2,
    name: "Laptop Pro",
    cost: 1299.99,
    imageUrl: "https://picsum.photos/200/300?2",
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    cost: 149.99,
    imageUrl: "https://picsum.photos/200/300?3",
  },
  {
    id: 4,
    name: "Smart Watch",
    cost: 199.99,
    imageUrl: "https://picsum.photos/200/300?4",
  },
  {
    id: 5,
    name: "4K TV",
    cost: 799.99,
    imageUrl: "https://picsum.photos/200/300?5",
  },
  {
    id: 6,
    name: "Gaming Console",
    cost: 499.99,
    imageUrl: "https://picsum.photos/200/300?6",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    cost: 89.99,
    imageUrl: "https://picsum.photos/200/300?7",
  },
  {
    id: 8,
    name: "Tablet Lite",
    cost: 299.99,
    imageUrl: "https://picsum.photos/200/300?8",
  },
  {
    id: 9,
    name: "DSLR Camera",
    cost: 899.99,
    imageUrl: "https://picsum.photos/200/300?9",
  },
  {
    id: 10,
    name: "Noise-Cancelling Headphones",
    cost: 349.99,
    imageUrl: "https://picsum.photos/200/300?10",
  },
];

const containerProducts = document.getElementById("main");
let contentMain = "";
products.forEach((product) => {
  contentMain += createCard(product);
});
containerProducts.innerHTML = contentMain;

const quantityProductsContent = document.querySelector(".number-products");

const initialArrayStorage = JSON.parse(localStorage.getItem("cart"));
let lenght;
initialArrayStorage === null
  ? (lenght = 0)
  : (lenght = initialArrayStorage.length);
quantityProductsContent.innerHTML = lenght;

function createCard({ id, name, cost, imageUrl }) {
  return `<div class="card" id="${id}">
        <div class="image-container" style="width: 100%;"><img class="image image-aspect" src="${imageUrl}" alt="${name}" /></div>
        <p>${name}</p>
        <div class="calification">
          <i class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-opacity="0" d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/></path><path fill="none" stroke="currentColor" stroke-dasharray="36" stroke-dashoffset="36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l-2.35 5.76l-6.21 0.46l4.76 4.02l-1.49 6.04l5.29 -3.28M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"/></path></svg>
          </i>
          <span>812</span>
        </div>
        <p style="font-weight: bold;">$${cost}</p>
        <select name="select${id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button class="button-add" onclick="addProductInCart(${id})" type="button">Add to Cart</button>
      </div>`;
}

function addProductInCart(id) {
  const product = products.find((p) => p.id === id);
  const contentSelected = document.getElementsByName(`select${id}`);
  const quantityProductsAdded = Number(contentSelected[0].value);

  addProductInLocalStorage({ ...product, quantity: quantityProductsAdded });
}

function addProductInLocalStorage(product) {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

  if (isProductInLocalStorage(currentCart, product.id)) {
    updateProductQuantity(product, currentCart);
  } else {
    addProductToCart(product, currentCart);
  }
}

function isProductInLocalStorage(currentCart, id) {
  result = currentCart.find((p) => JSON.parse(p).id === id);
  if (typeof result === "undefined") {
    return false;
  }
  return true;
}

function updateProductQuantity(product, currentCart) {
  console.log("This product has already been added");
  const contentSelected = document.getElementsByName(`select${product.id}`);
  const quantityProductsAdded = Number(contentSelected[0].value);

  const index = currentCart.findIndex((c) => {
    const productCart = JSON.parse(c);
    return productCart.id === product.id;
  });

  if (index !== -1) {
    const currentProduct = JSON.parse(currentCart[index]);
    currentCart[index] = JSON.stringify({
      ...currentProduct,
      quantity: currentProduct.quantity + quantityProductsAdded,
    });
    localStorage.setItem("cart", JSON.stringify(currentCart));
  }
}

function addProductToCart(product, currentCart) {
  console.log("This product not existing");
  const newProducto = JSON.stringify(product);
  currentCart.push(newProducto);
  localStorage.setItem("cart", JSON.stringify(currentCart));

  const result = Number(quantityProductsContent.innerHTML) + 1;
  quantityProductsContent.innerHTML = result;
}

const containerForm = document.getElementById("search-form");
containerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchInput = event.target.elements.search.value.trim().toLowerCase();
  console.log(searchInput)
  const containerMain = document.getElementById("main");
  let newContentMain = "";
  containerMain.innerHTML = ''
  if (searchInput) {
    
    const filteredProducts = products.filter(p => p.name.trim().toLowerCase().includes(searchInput))
    filteredProducts.forEach((p) => (newContentMain += createCard(p)));
    console.log(filteredProducts)
    containerMain.innerHTML = newContentMain;
  } else {
    products.forEach(p => newContentMain += createCard(p))
    containerMain.innerHTML = newContentMain;
  }
});