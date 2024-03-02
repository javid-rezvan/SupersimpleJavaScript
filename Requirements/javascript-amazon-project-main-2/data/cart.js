export let cart=[];
cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
  cart=[];
}

export function addToCart(productId){

  let matchingItem='';
  cart.forEach((cartItem)=>{
     if(cartItem.productId === productId){
      matchingItem=cartItem;
     }
  });
  if(matchingItem){
    matchingItem.quantity+=1;
  }else{
    cart.push({
      productId:productId,
      quantity:1,
      deliveryOptionId:1
    });
  }
  saveToStorage();
}

export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function updateCartQuantity(){
  let cartQuantity=0;
  cart=JSON.parse(localStorage.getItem('cart')) || [];
  cart.forEach((cartItem)=>{
    cartQuantity+=cartItem.quantity;
  });
  document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
}

export function removeFromCart(produtcId){
  let newCart=[];
  cart.forEach((cartItem)=>{
    if(cartItem.productId !== produtcId){
      newCart.push(cartItem);
    }
  });
  cart=newCart;
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  cart.forEach((cartItem)=>{
    if(cartItem.productId === productId){
      cartItem.deliveryOptionId=deliveryOptionId;
      saveToStorage();
    }
  });
}