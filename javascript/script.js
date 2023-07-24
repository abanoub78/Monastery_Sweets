

let up=document.querySelector(".up")
window.onscroll=function(){
    if(this.scrollY>1000)
    {
        up.style.opacity =1;
    }else{
        up.style.opacity =0;
    }
}
up.onclick =function(){
   window.scrollTo({
    top:0,behavior: "smooth",
   });
}


let subMenu = document.getElementById("subMenu");
let mainMenu = document.querySelector(".main-menu-warp")
    
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
function toggleMenu2(){
    mainMenu.classList.toggle("open");
}

//************************************* */

const addButton = document.querySelectorAll('.addcart');
const cartItems = [];
let totalPrice = 0;

addButton.forEach(function(button) {
  button.addEventListener('click', function() {
    const image = this.parentNode.parentNode.querySelector('img').src;
    const title = this.parentNode.parentNode.querySelector('h3').textContent;
    const price = parseFloat(this.parentNode.parentNode.querySelector('h4').textContent);

    const item = {
      image: image,
      title: title,
      price: price
    };

    cartItems.push(item);
    totalPrice += price;
    updateCart();
  });
});

function updateCart() {
  const cartItemsContainer = document.getElementById('cartitem');
  cartItemsContainer.textContent = '';

  if (cartItems.length === 0) {
    cartItemsContainer.textContent = 'Your Cart Is Empty';
  } else {
    cartItems.forEach(function(item, index) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');

      const cartItemImage = document.createElement('img');
      cartItemImage.src = item.image;

      const cartItemTitle = document.createElement('h3');
      cartItemTitle.textContent = item.title;

      const cartItemPrice = document.createElement('h4');
      cartItemPrice.textContent = item.price + ' EP';

      const deleteIcon = document.createElement('i');
      deleteIcon.classList.add('delete-icon');
      deleteIcon.classList.add('fas');
      deleteIcon.classList.add('fa-trash-alt');

      deleteIcon.addEventListener('click', function() {
        cartItems.splice(index, 1);
        totalPrice -= item.price;
        updateCart();
      });

      cartItem.appendChild(cartItemImage);
      cartItem.appendChild(cartItemTitle);
      cartItem.appendChild(cartItemPrice);
      cartItem.appendChild(deleteIcon);

      cartItemsContainer.appendChild(cartItem);
    });
  }

  const totalPriceElement = document.getElementById('price');
  totalPriceElement.textContent = totalPrice.toFixed(2) + ' EP';
}

const clearIcon = document.querySelector('.clear');
clearIcon.addEventListener('click', function() {
  cartItems.length = 0;
  totalPrice = 0;
  updateCart();
});