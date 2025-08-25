// -----function for getting value-------//
// -----part-4----13.30-----//
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
document.getElementById("btn-k1").addEventListener("click", function () {
  const cardTitle = getElement("title-k1").innerText;
  const cardPrice = getElement("price-k1").innerText;

  const getTotalPrice = getElement("total-price").innerText;

  const currentPrice = Number(cardPrice) + Number(getTotalPrice);

  getElement("total-price").innerText = currentPrice.toFixed(2);

  //------update cart container-----------//

  const cartCont = getElement("cart-container");

  const newCart = document.createElement("div");
  newCart.innerHTML = `
 <div class="flex items-center justify-around bg-gray-200 rounded mb-3">
                  <img src="assets/kitchen-1.png" class="w-15" alt="">
                  <div class="">
                    <h2 class="font-bold">${cardTitle}</h2>
                    <h2>${cardPrice} TK</h2>
                  </div>
                </div>
 
 `;

  cartCont.append(newCart);
});
