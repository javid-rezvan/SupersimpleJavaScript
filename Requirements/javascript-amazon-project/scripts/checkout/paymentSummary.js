import {cart} from '../../data/cart.js';
import {getProducts} from '../../data/products.js';
import {getDeliveryOption} from '../../data/deliveryOptions.js';

export function renderPaymentSummary(){
  let productPriceCents=0;
  let shippingPriceCents=0;

  cart.forEach((cartItem)=>{
     const product=getProducts(cartItem.productId);
     productPriceCents+=product.priceCents * cartItem.quantity;
     const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
     shippingPriceCents += deliveryOption.priceCents;
  });
  const totalBeforeTaxCents=productPriceCents+shippingPriceCents;
  const taxCents=totalBeforeTaxCents * 0.1;
  const totalCents=totalBeforeTaxCents + taxCents;

}