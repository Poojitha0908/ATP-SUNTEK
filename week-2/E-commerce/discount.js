// discount.js
const coupons = {
  WELCOME10: { type: 'percentage', value: 10, minAmount: 1000 },
  FLAT500: { type: 'flat', value: 500, minAmount: 5000 },
  ELECTRONICS20: { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
function validateCoupon(code, total, items) {
  let coupon = coupons[code];
  if (!coupon) return { valid: false, message: 'Invalid coupon' };
  if (total < coupon.minAmount)
    return { valid: false, message: 'Minimum amount not met' };

  return { valid: true, message: 'Coupon applied' };
}
function calculateDiscount(code, total) {
  let coupon = coupons[code];
  if (coupon.type === 'percentage') {
    return (total * coupon.value) / 100;
  }
  return coupon.value;
}
function applyDiscount(total, code, items) {
  let check = validateCoupon(code, total, items);
  if (!check.valid) {
    return { originalTotal: total, discount: 0, finalTotal: total, message: check.message };
  }
  let discount = calculateDiscount(code, total);
  return {
    originalTotal: total,
    discount,
    finalTotal: total - discount,
    message: 'Discount applied'
  };
}
export { validateCoupon, calculateDiscount, applyDiscount };