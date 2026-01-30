const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let r=employees.filter(ele=>ele.department=='IT')
console.log(r)

/* 2. map() to add:
            netSalary = salary + 10% bonus */
let r1=employees.map(employee => {
  const bonus = employee.salary * 0.10; 
  const netSalary = employee.salary + bonus; 
  return {
    ...employee,
    bonus: bonus,
    netSalary: netSalary
  }
})
console.log(r1)

//3. reduce() to calculate total salary payout
let r2=employees.reduce((acc,ele)=>acc+ele.salary)

//4. find() employee with salary 30000
let r3=employees.find(ele=>ele.salary===30000)
console.log(r3)

//5. findIndex() of employee "Neha"
let r4=employees.findIndex(ele=>ele.name=='Neha')
console.log(r4)