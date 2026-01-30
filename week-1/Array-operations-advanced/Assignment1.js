let cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];


//1 Use filter() to get only inStock products
let r=cart.filter(ele=>ele.inStock==true)
console.log(r)


//2 Use map() to create a new array with:  { name, totalPrice }
let r1=cart.map(ele=>[ele.name,ele.price])
console.log(r1)


//3 Use reduce() to calculate grand total cart value
let r2=cart.reduce((acc,ele)=>acc+ele.price,0)
console.log(r2)


//4 Use find() to get details of "Mouse"
let r3=cart.find(ele=>ele.name==='Mouse')
console.log(r3)

//5 Use findIndex() to find the position of "Keyboard"
let r4=cart.findIndex(ele=>ele.name=='Keyboard')
console.log(r4)
