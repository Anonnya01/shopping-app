// -----function for getting value-------//
// -----part-4----13.30-----//
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}




//------------ traverse way-----------//

// ---------quantity--------//


// ---------cart button-------//
const cartBtns = document.getElementsByClassName("card-btn");
// console.log(cartBtns);

for (let cartBtn of cartBtns) {
  cartBtn.addEventListener("click", function () {
    console.log("clicked");
    // ---------getting values---------//
    const productImg =
      cartBtn.parentNode.parentNode.parentNode.children[0].children[0].src;
    console.log(productImg);
    const productTitle = cartBtn.parentNode.parentNode.children[0].innerText;
    console.log(productTitle);
    const productPrice =
      cartBtn.parentNode.parentNode.children[2].children[0].innerText;
    console.log(productPrice);


    
//  -------------------------------------------//
    // -------------total price----------//
    const totalPrice = getElement("total-price").innerText;

    const currentPrice = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentPrice;

    // -----------cart container-----------//

    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");

    newCart.innerHTML = `
    <div class="flex items-center justify-around bg-gray-200 rounded mb-3">
    <img src="${productImg}" class="w-15" alt="">
    <div class="">
    <h2 class="font-bold">${productTitle}</h2>
    <h2>${productPrice} TK</h2>
    </div>
    </div>
    
       `;
    cartContainer.append(newCart);
  });


// -----------------quantity----------//





}

// treditional way
// document.getElementById("btn-k1").addEventListener("click", function () {
//   const cardTitle = getElement("title-k1").innerText;
//   const cardPrice = getElement("price-k1").innerText;

//   const getTotalPrice = getElement("total-price").innerText;

//   const currentPrice = Number(cardPrice) + Number(getTotalPrice);

//   getElement("total-price").innerText = currentPrice.toFixed(2);

//   ------update cart container-----------//

//   const cartCont = getElement("cart-container");

//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//  <div class="flex items-center justify-around bg-gray-200 rounded mb-3">
//                   <img src="assets/kitchen-1.png" class="w-15" alt="">
//                   <div class="">
//                     <h2 class="font-bold">${cardTitle}</h2>
//                     <h2>${cardPrice} TK</h2>
//                   </div>
//                 </div>

//  `
//  ;

//   cartCont.append(newCart);
// });
