// payment.js
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method);
}
function processPayment(paymentMethod, couponCode = null) {
  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }
  let items = getCartItems();
  let subtotal = getCartTotal();
  let discount = 0;
  let total = subtotal;
  if (couponCode) {
    let result = applyDiscount(subtotal, couponCode, items);
    discount = result.discount;
    total = result.finalTotal;
  }
  items.forEach(i => reduceStock(i.id, i.quantity));
  clearCart();
  return {
    orderId: 'ORD' + Date.now(),
    items,
    subtotal,
    discount,
    total,
    paymentMethod,
    status: 'success',
    message: 'Payment successful'
  };
}
export { processPayment, validatePaymentMethod };