function price(a){
    let label
    if (a<500){
        label='Budget Course'
    }
    if(a>500 && a<1000){
        label='Standard Course'
    }
    if(a>1000){
        label='Premium Course'
    }
    return label
}
let s=price(1299)
console.log(s)