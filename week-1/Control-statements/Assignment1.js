function login(l,p){
    if (l=false){
        msg="Please Login"
    }
    else if(l==true && p==false){
        msg="Complete the Profile"
    }
    else{
        msg="Welcome back!"
    }
    return msg
}
let a=login(true,false)
console.log(a)