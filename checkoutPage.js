let cartitems =JSON.parse(sessionStorage.getItem('cart')) 

console.log(cartitems)
let cartProducts = '' ;
const cartItemContainer = document.querySelector('.container')
function cartItemsLoad(item) {
    cartProducts = `
      <div class="checkout-left-container">
      <div class="checkout-content">
      <img
        class="checkout-product-img"
        src=${item.preview}
      />
      <div>
        <h4>${item.name}</h4>
        <p>x1</p>
        <p>
          <span>Amount :Rs</span>
          <span>${item.price}</span>
        </p>
      </div>
      </div>
      </div>
      <div class="checkout-right-container">
        <h3 class="section-heading">Total Amount</h3>
        <p>Amount : Rs <span id="total-amount">${item.price}</</span></p>
        <a href="orderPlaced.html">        <button id="btn-place-order">Place Order</button>
        </a>
      </div>
   

    
    `

  
    
      
    
  cartItemContainer.innerHTML =cartProducts

    // cartItemContainer.innerHTML = cartProducts


}
cartItemsLoad(cartitems);


// const placeOrdet = document.getElementById('btn-place-order');
// placeOrdet.addEventListener('click' ()=>{
  
// })


// hamburger event /
const showMenu = document.getElementById("show-menu");
showMenu.addEventListener("click", onEvent);

function onEvent() {
  const hamburger = document.getElementById("hamburger");

  if (hamburger.style.display !== "none") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "block";
  }
}

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", hide);
function hide() {
  if (hamburger.style.display !== "block") {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
  }
}

const clothtilte = document.getElementById("cloth-title");
const hometitle = document.getElementById("home-title");
const Acctitle = document.getElementById("acc-title");

clothtilte.addEventListener("click", hide);
Acctitle.addEventListener("click", hide);

hometitle.addEventListener("click", hide);