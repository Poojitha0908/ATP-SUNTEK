const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1. filter() all credit transactions
let r=transactions.filter(ele=>ele.type==='credit')
console.log(r)

//2. map() to extract only transaction amounts
let r1=transactions.map(ele=>[ele.amount])
console.log(r1)

//3. reduce() to calculate final account balance
let r2=transactions.reduce((acc,ele)=>acc+ele.amount,0)
console.log(r2)

// 4. find() the first debit transaction
let r3=transactions.find(ele=>ele.type==="credit")
console.log(r3)

//5. findIndex() of transaction with amount 10000
let r4=transactions.findIndex(ele=>ele.amount=='10000')
console.log(r4)