export let cart=[];
cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[];
}

export function addToCart(productId){
  let matchingItem='';
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
       matchingItem=cartItem;
    }
  });
  if(matchingItem){
    matchingItem.quantity+=1;
  }else{
    cart.push(
      {
        productId:productId,
        quantity:1,
        deliveryOptionId:1
      }
    );
  }
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function updateCartQuantity(){
  let cartQuantity=0;
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(productId !== cartItem.productId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem='';
  cart.forEach((cartItem)=>{
    if(productId === cartItem.productId){
       matchingItem=cartItem;
    }
  });
  matchingItem.deliveryOptionId=deliveryOptionId;
  saveToStorage();
}