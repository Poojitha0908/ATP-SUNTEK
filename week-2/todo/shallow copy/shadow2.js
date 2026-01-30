/*Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/
let order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
        city: "Hyderabad",
        pincode: 500085
        }
    },
    items: [{ product: "Laptop", price: 70000 }]
};
//Create a deep copy of order
const ordercopy=JSON.parse(JSON.stringify(order))   
// Modify customer.address.city
ordercopy.customer.address.city="uppal"
console.log(ordercopy)
//items[0].price
ordercopy.items[0].price=5000
console.log(ordercopy)
//Verify original object remains unchanged
console.log(order)