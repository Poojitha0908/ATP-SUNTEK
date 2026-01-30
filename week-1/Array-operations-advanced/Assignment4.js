const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
let r=movies.filter(ele=>ele.genre==='Sci-Fi')
console.log(r)

/*2. map() to return:
            "Inception (8.8)"*/
let r1=movies.map(ele=>{ return `${movies.title} (${movies.rating})`;})
console.log(r1)

//3. reduce() to find average movie rating
let r2=movies.reduce((acc,ele)=>acc+ele.rating,0)
console.log(r2)

//4. find() movie "Joker"
let r3=employees.find(ele=>ele.title==="Joker")
console.log(r3)

//5. findIndex() of "Avengers"
let r4=employees.findIndex(ele=>ele.name=='Avengers')
console.log(r4)