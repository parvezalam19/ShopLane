let cartitems =JSON.parse(sessionStorage.getItem('cart')) 

console.log(cartitems)
let cartProducts = '' ;
const cartItemContainer = document.querySelector('.checkout-left-container')
function cartItemsLoad() {
  cartitems.map((item)=>{
    // console.log(item)
    cartProducts += `
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

    
    `

  })
    
      
    
  cartItemContainer.innerHTML =cartProducts

    // cartItemContainer.innerHTML = cartProducts


}
cartItemsLoad(cartitems);


