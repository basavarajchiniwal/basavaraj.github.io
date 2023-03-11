function login(){
    let email=document.getElementById("email")
    let password=document.getElementById("pasword")
    console.log(email.value)
    console.log(password.value)
    let appRegisterObject=localStorage.getItem("appRegister")
    console.log(appRegisterObject)
    console.log(appRegisterObject.email)
    let appRegisterparsedObject=JSON.parse(appRegisterObject)
    console.log(appRegisterparsedObject)
    console.log(appRegisterparsedObject.email)


    if(email.value==appRegisterparsedObject.email
        && password.value==appRegisterparsedObject.password){
            let loginmessage=document.getElementById("loginmessage")
            loginmessage.innerHTML="login success"
            loginmessage.style.color="Green"
            window.location.href="https://facebook.com"

        }else {
            let loginmessage=document.getElementById("loginMessage")
loginmessage.innerHTML="Invalid Email or password"
loginmessage.style.color="red"
        }
}
//8-9-2022 Web Tech class
//function Express
let addition=function add(a,b){
    console.log(a+b)
}
//addition(10,20)
//annonymous function
let annonymous=function(){
    console.log("calling annonymous function")
}
//annonymous()
//immediate invoking function
(function(){
    console.log("calling immediate Invoking function")
})
//Array in javascript
let c=[]
c.push(1)//push method adds element at the end of array
console.log(c)
c.push(10)
console.log(c)
c.pop()//pop methods removes element at the end of array
console.log(c)
c.unshift(11)//unshift methods adds element at the begining of array
console.log(c)
c.shift()//shift methods removed element at the begining of array
console.log(c)
c.unshift("javascript")
console.log(c)


for(let d=0;d<c.length;d++){
    console.log(c[d])
}
let movies=[]
let movie={
    "moviename":"RRR",
    "language":"Kannada",
    "price":300
}
movies.push(movie)
console.log(movie)

