let marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
t=0
s=0
let a=marks.physics
for(let v in marks){
    t=t+marks[v]
    s=s+1
    if (a<marks[v]){
        a=marks[v]
    }
}
console.log(t)
console.log(t/s)
console.log(a)
marks.computer=90

