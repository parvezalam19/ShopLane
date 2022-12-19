const content = document.body;
const productList = sessionStorage.productList
    ? JSON.parse(sessionStorage.productList)
    : [];
const prodId = new URLSearchParams(window.location.search).get('id');
// console.log(prodId);
const item = productList.find(p => p.id.toString() === prodId);
// console.log(item)

function getData(productDetails) {
    let details = `
        <div class="error">
            <h2 class="error-message">No Product Found.</h2>
            <a class="go-back" href="/">Back to Home?</a>
        </div>
    `;
    if (productDetails) {
        // console.log(items)
        details = `
            <div class="left-container" id=${productDetails.id}>
                <img src=${productDetails.preview}
                    alt="logo" id='mainimages' />
                </div>
                <div class="right-container">
                <h1>${productDetails.name}</h1>
                
                <h2>${productDetails.brand}</h2>
                <h2>Price : Rs <span>${productDetails.price}</span></h2>
                <h2>Description</h2>
                <p>
                    ${productDetails.description}
                </p>
                <div class="preview">
                    <h2>Product Preview</h2>
                    <div class="preivew-images" >
                        ${productDetails.photos
                .map((photo, idx) => {
                    const classes =
                        idx === 0
                            ? 'smallImages active'
                            : 'smallImages';
                    return `<img src='${photo}' onclick="setActiveImage(event)" width="15%" alt='photo-${idx}' class='${classes}' />`;
                })
                .join('')}
                    </div>
                </div>
                <button class='cartButton'>Add to Cart</button>
                </div>
            </div>
            `;
    }

    document.getElementById('product-details').innerHTML = details;
}

getData(item);



const cartCount = document.querySelector('.cart-count')
const cartButton = document.querySelector('.cartButton')
// sessionStorage.removeItem('count')
// let count ;
cartButton.addEventListener('click', () => {

    increaseCount();

    displayCartItems();


})

function displayCartItems() {
    // cart items
    sessionStorage.setItem('cart', JSON.stringify(item))
    let cartItems = [
        ...JSON.parse(sessionStorage.getItem('cart')), item
    ];
    sessionStorage.setItem('cart', JSON.stringify(cartItems))
}



function increaseCount() {
    let add = JSON.parse(sessionStorage.getItem('count')) || 0

    add += 1;
    sessionStorage.setItem('count', JSON.stringify(add));
    cartCount.textContent = add
}



const mainImg = document.getElementById('mainimages');
function setActiveImage(e) {
    document.querySelectorAll('.smallImages').forEach(element => {
        element.classList.remove('active');
    });

    mainImg.src = e.target.src;
    e.target.classList.add('active');

}




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


