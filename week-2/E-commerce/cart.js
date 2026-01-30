// cart.js
import { getProductById, checkStock } from './product.js';
let cartItems = [];
function addToCart(productId, quantity) {
  let product = getProductById(productId);
  if (!product) return 'Product not found';
  if (!checkStock(productId, quantity)) return 'Insufficient stock';
  let item = cartItems.find(i => i.productId === productId);
  if (item) {
    item.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  return 'Added to cart';
}
function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return 'Item removed';
}
function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return 'Stock not available';
  let item = cartItems.find(i => i.productId === productId);
  if (!item) return 'Item not found';
  item.quantity = newQuantity;
  return 'Quantity updated';
}
function getCartItems() {
  return cartItems.map(i => {
    let product = getProductById(i.productId);
    return { ...product, quantity: i.quantity };
  });
}
function getCartTotal() {
  return getCartItems().reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
}
function clearCart() {
  cartItems = [];
}
export {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart
};