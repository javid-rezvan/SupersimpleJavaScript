import {cart,removeFromCart, updateCartQuantity,updateDeliveryOption} from   '../../data/cart.js';
import { getProducts } from "../../data/products.js";
import {formatCurrency} from '../utils/money.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { getDeliveryOptions,deliveryOptions} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';

export function renderOrderSummary(){
  let orderSummaryHTML='';
  cart.forEach((cartItem)=>{
       let matchingProduct='';
       const productId=cartItem.productId;
       matchingProduct=getProducts(productId);
       const today=dayjs();
       const deliveryOtion=getDeliveryOptions(cartItem.deliveryOptionId);
       const deliveryDate=today.add(deliveryOtion.deliveryDay,'day');
       const dateString=deliveryDate.format('dddd ,MMMM D');
       
       orderSummaryHTML +=`
          <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
          <div class="delivery-date">
           ${dateString}
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
               ${matchingProduct.name}
              </div>
              <div class="product-price">
                $${formatCurrency(matchingProduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link"
                  data-product-id=${matchingProduct.id}
                  >
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
               ${deliveryOptionsHTML(cartItem,matchingProduct)}
            </div>
          </div>
       </div> `;
  });
  document.querySelector('.js-order-summary').innerHTML=orderSummaryHTML;
  document.querySelectorAll('.js-delete-link').forEach((link)=>{
    const productId=link.dataset.productId;
       link.addEventListener('click',()=>{
       let container=document.querySelector(`.js-cart-item-container-${productId}`);
       removeFromCart(productId);
       container.remove();
       renderPaymentSummary();
       updateCartQuantity();
     });
  });

  function deliveryOptionsHTML(cartItem,matchingProduct){
        let html='';
        deliveryOptions.forEach((deliveryOption)=>{
        const today=dayjs();
        const deliveryDate=today.add(deliveryOption.deliveryDay,'day');
        const dateString=deliveryDate.format('dddd ,MMMM D');
        const priceString=deliveryOption.deliveryPrice === 0? 'FREE':`$${formatCurrency(deliveryOption.deliveryPrice)}`;
        const isChecked=deliveryOption.id ==cartItem.deliveryOptionId;      
         html+=`
         <div class="delivery-option js-delivery-option"
                   data-product-id=${matchingProduct.id}
                   data-delivery-option-id=${deliveryOption.id}
                   >
                   <input type="radio"
                    ${isChecked ? 'checked' : ''}
                     class="delivery-option-input"
                     name="delivery-option-${matchingProduct.id}">
                   <div>
                     <div class="delivery-option-date">
                      ${dateString}
                     </div>
                     <div class="delivery-option-price">
                       ${priceString}
                     </div>
                   </div>
              </div>`;
       });
        return html;
   }
     document.querySelectorAll('.js-delivery-option').forEach((element)=>{
     element.addEventListener('click',()=>{
      const{productId,deliveryOptionId}=element.dataset;
      updateDeliveryOption(productId,deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
   });
});

}
