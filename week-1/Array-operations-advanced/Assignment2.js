const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1 filter() students who passed (marks ≥ 40)
let r=students.filter(ele=>ele.marks>=40)
console.log(r)

/*2 map() to add a grade field
        ≥90 → A
        ≥75 → B
        ≥60 → C
        else → D   */
let r1=students.map(ele=>{
    if(ele.marks>=90){
        ele.grade='A'
    }
    else if(ele.marks>=75){
        ele.grade='B'
    }
    else if(ele.marks>=60){
        ele.grade='C'
    }
    else{
        ele.grade='D'
    }
    return ele
})
console.log(r1)

//3 reduce() to calculate average marks
let r2=students.reduce((acc,ele)=>acc+ele)
console.log(r2)

//4. find() the student who scored 92
let r3=students.find(ele=>ele.marks===92)
console.log(r3)

// 5. findIndex() of student "Kiran"
let r4=students.findIndex(ele=>ele.name=='Kiran')
console.log(r4)