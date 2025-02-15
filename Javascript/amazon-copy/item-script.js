const deliveryTimes = [
  { productId: 1, estimatedDays: 7 },
  { productId: 2, estimatedDays: 5 },
  { productId: 3, estimatedDays: 10 },
  { productId: 4, estimatedDays: 3 },
  { productId: 5, estimatedDays: 15 },
  { productId: 6, estimatedDays: 8 },
  { productId: 7, estimatedDays: 12 },
  { productId: 8, estimatedDays: 4 },
  { productId: 9, estimatedDays: 6 },
  { productId: 10, estimatedDays: 9 },
];
const quantityProductsContent = document.querySelector(".number-products");
const productsCart = JSON.parse(localStorage.getItem("cart"));
let lengthArray;

const detailCartContent = document.querySelector(".content-products");
const titleContent = document.querySelector(".quantity-items");

if (
  productsCart === null ||
  productsCart === undefined ||
  productsCart.length === 0
) {
  lengthArray = 0;
  detailCartContent.innerHTML = "It's empty this cart";
} else {
  lengthArray = productsCart.length;
  let newDetailsCart = "";
  productsCart.forEach((p) => {
    newDetailsCart += createDetailsCart(JSON.parse(p));
  });

  detailCartContent.innerHTML = newDetailsCart;
}

calculateOrderSummary(lengthArray);
quantityProductsContent.innerHTML = lengthArray;
titleContent.innerHTML = `${lengthArray} items`;

const dialogContent = document.getElementById("myDialog");

function openModal() {
  dialogContent.showModal();
}
function closeModal() {
  dialogContent.close();
}

document
  .getElementById("closeDialog-button")
  .addEventListener("click", closeModal);
document
  .getElementById("closeDialog-svg")
  .addEventListener("click", closeModal);

function updateQuantity(id) {
  openModal();

  // delete event if it existing
  const confirmButton = document.getElementById("confirm-button");
  confirmButton.replaceWith(confirmButton.cloneNode(true));

  document.getElementById("confirm-button").addEventListener("click", () => {
    const productsInLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const indexDetail = productsInLocalStorage.findIndex((p) => {
      const currentProduct = JSON.parse(p);
      return currentProduct.id === id;
    });
    const newQuantity = document.getElementsByName(`select-modal`);
    if (indexDetail > -1) {
      productsInLocalStorage[indexDetail] = JSON.stringify({
        ...JSON.parse(productsInLocalStorage[indexDetail]),
        quantity: newQuantity[0].value,
      });
    }
    document.getElementById(`price-${id}`).innerHTML = `$${Number.parseFloat(
      Number(JSON.parse(productsInLocalStorage[indexDetail]).cost) *
        Number(newQuantity[0].value)
    ).toFixed(2)}`;
    document.getElementById(`quantity-${id}`).innerHTML = newQuantity[0].value;
    localStorage.setItem("cart", JSON.stringify(productsInLocalStorage));
    calculateOrderSummary(productsInLocalStorage.length);
    closeModal();
  });
}

function createDetailsCart({ id, name, cost, imageUrl, quantity }) {
  const deliveryTime = deliveryTimes.find((d) => d.productId === id);
  const nowDate = dayjs();
  const longDate = nowDate.add(Number(deliveryTime.estimatedDays), "day");
  const mediumDate = nowDate.add(Number(deliveryTime.estimatedDays) - 6, "day");
  const shortDate = nowDate.add(Number(deliveryTime.estimatedDays) - 8, "day");

  return `<div class="item-cart" id="detail-${id}">
            <h4 id="title-card${id}">Delivery date: ${longDate.format(
    "dddd, MMMM D"
  )}</h4>
            <div class="main-card">
                <div class="description-item">
                    <div class="image-container min">
                        <img class="image" src="${imageUrl}" style="aspect-ratio: 1/1;" alt="${name}">
                    </div>
                    <div class="description">
                        <p class="name-product">${name}</p>
                        <p class="price" id="price-${id}">$${Number.parseFloat(
    Number(cost) * Number(quantity)
  ).toFixed(2)}</p>
                        <div class="actions">
                            <p>Quantity: <span id="quantity-${id}">${quantity}</span></p>
                            <button onclick="updateQuantity(${id})">Update</button>
                            <button onclick="deleteDetailCart(${id})" >Delete</button>
                        </div>
                    </div>
                </div>
                <div class="method-delivery-container">
                    <p class="title">Choose a delibery option:</p>
                    <ul class="list">
                        <li>
                            <label for="item${id}" class="input-checkbox" onclick="renderTitleCard(${id},${
    deliveryTime.estimatedDays
  }, ${1})">
                                <input type="radio" name="delivery-option${id}" id="item${id}" value="free" checked>
                                <div>
                                    <p class="color">${longDate.format(
                                      "dddd, MMMM D"
                                    )}</p>
                                    <p class="opacity">FREE Shipping</p>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label for="item${
                              id + id
                            }" class="input-checkbox" onclick="renderTitleCard(${id},${
    deliveryTime.estimatedDays
  }, ${2})">
                                <input type="radio" name="delivery-option${id}" id="item${
    id + id
  }" value="medium">
                                <div>
                                    <p class="color">${mediumDate.format(
                                      "dddd, MMMM D"
                                    )}</p>
                                    <p class="opacity">$4.99 - Shipping</p>
                                </div>
                            </label>
                        </li>
                        <li>
                            <label for="item${
                              id + id + id
                            }" class="input-checkbox" onclick="renderTitleCard(${id},${
    deliveryTime.estimatedDays
  }, ${3})">
                                <input type="radio" name="delivery-option${id}" id="item${
    id + id + id
  }" value="fast">
                                <div>
                                    <p class="color">${shortDate.format(
                                      "dddd, MMMM D"
                                    )}</p>
                                    <p class="opacity">$9.99 - Shipping</p>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
          </div>`;
}

function deleteDetailCart(id) {
  const detailCartContent = document.getElementById(`detail-${id}`);
  detailCartContent.remove();
  const productsInLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const indexDetail = productsInLocalStorage.findIndex((p) => {
    const currentProduct = JSON.parse(p);
    return currentProduct.id === id;
  });
  if (indexDetail > -1) {
    productsInLocalStorage.splice(indexDetail, 1);
  }
  localStorage.setItem("cart", JSON.stringify(productsInLocalStorage));

  renderCart(productsInLocalStorage.length);
  calculateOrderSummary(productsInLocalStorage.length);
}

function renderCart(lengthCart) {
  lengthArray = lengthCart;
  document.querySelector(".number-products").innerHTML = lengthCart;
  document.querySelector(".quantity-items").innerHTML = `${lengthCart} items`;

  if (lengthCart === 0) {
    detailCartContent.innerHTML = "It's empty this cart";
  }
}

function calculateOrderSummary(lengthCart) {
  document.getElementById(
    "quantity-products"
  ).innerHTML = `Items (${lengthCart}):`;

  const productsCart = JSON.parse(localStorage.getItem("cart"));
  let priceProducts = 0;

  if (
    (productsCart !== null,
    productsCart !== undefined || productsCart.length !== 0)
  ) {
    productsCart.forEach((p) => {
      const product = JSON.parse(p);
      priceProducts =
        priceProducts + Number(product.cost) * Number(product.quantity);
    });
  }

  priceDelivery = calculateCostDelivery();
  priceTotalBefore = priceProducts + priceDelivery;
  priceTax = priceTotalBefore * 0.1;
  priceTotal = priceTotalBefore + priceTax;

  document.getElementById("price-delivery").innerHTML = `$${Number.parseFloat(
    priceDelivery
  ).toFixed(2)}`;
  document.getElementById("price-products").innerHTML = `$${Number.parseFloat(
    priceProducts
  ).toFixed(2)}`;
  document.getElementById(
    "price-total-before-tax"
  ).innerHTML = `$${Number.parseFloat(priceTotalBefore).toFixed(2)}`;
  document.getElementById("price-tax").innerHTML = `$${Number.parseFloat(
    priceTax
  ).toFixed(2)}`;
  document.getElementById("price-total").innerHTML = `$${Number.parseFloat(
    priceTotal
  ).toFixed(2)}`;
}

function renderTitleCard(id, estimatedDays, variant) {
  const nowDate = dayjs();
  let newDate;
  switch (variant) {
    case 1:
      newDate = nowDate.add(Number(estimatedDays), "day");
      break;

    case 2:
      newDate = nowDate.add(Number(estimatedDays) - 6, "day");
      break;

    case 3:
      newDate = nowDate.add(Number(estimatedDays) - 8, "day");
      break;
    default:
      console.log("Sorry, error in switch");
  }
  document.getElementById(
    `title-card${id}`
  ).innerHTML = `Delivery date: ${newDate.format("dddd, MMMM D")}`;

  calculateOrderSummary(lengthArray);
}

function calculateCostDelivery() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  let costTotal = 0;
  for (let radio of radioButtons) {
    if (radio.checked) {
      switch (radio.value) {
        case "medium":
          costTotal += 4.99;
          break;
        case "fast":
          costTotal += 9.99;
          break;
      }
    }
  }
  return costTotal;
}

function descriptionCart() {
  const cartContent = JSON.parse(localStorage.getItem("cart")) || [];
  const productsCart = cartContent.map((p) => {
    const product = JSON.parse(p);
    return {
      ...product,
      total_cost: Number(product.quantity) * Number(product.cost),
    };
  });
  const priceProducts = document.getElementById("price-products").innerHTML;
  const priceDelivery = document.getElementById("price-delivery").innerHTML;
  const priceTotalBefore = document.getElementById(
    "price-total-before-tax"
  ).innerHTML;
  const priceTax = document.getElementById("price-tax").innerHTML;
  const priceTotal = document.getElementById("price-total").innerHTML;
  const usePaypal = document.getElementsByName("paypal")[0].checked

  console.log({ price_products: priceProducts, price_delivery: priceDelivery, price_total_before: priceTotalBefore, price_tax: priceTax, price_total: priceTotal, use_paypal: usePaypal , productsCart });
}
