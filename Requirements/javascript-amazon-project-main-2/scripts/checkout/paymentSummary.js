import { getProducts } from "../../data/products.js"
import { cart } from "../../data/cart.js";
import { getDeliveryOptions } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary(){
   let productPriceCents=0;
   let shippingPriceCents=0;
    cart.forEach((cartItem)=>{
        const product=getProducts(cartItem.productId);
        const deliveryOption=getDeliveryOptions(cartItem.deliveryOptionId);
        productPriceCents+=product.priceCents*cartItem.quantity;
        shippingPriceCents+=deliveryOption.deliveryPrice;

    });
    const totalBeforTaxCents=productPriceCents+shippingPriceCents;
    const taxCents=totalBeforTaxCents*0.1;
    const totalCents=totalBeforTaxCents+taxCents;
    let html=`
        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${formatCurrency(totalBeforTaxCents)}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `;
    document.querySelector('.js-payment-summary').innerHTML=html;
}