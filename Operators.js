//Operators
//Arithmetic Operator (+, -,*,/)
//Assignment Operator (= , += , -=, /= , *=)
//Comparison Operator (==, === , != , !==, >, <,>=,<=)
//logical Operator (&&, ||, !)
//unary Operator
//String Operator
//ternary Operator
//typeof Operator

let a= 10
let b=20
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log("---------Assignment Operator------------")
let c = 10
c+=5 // c=c+5 =15
console.log(c)
c-=5 //c=c-5 - 15-5 =10
console.log(c)
c*=5 //c= c*5 - 10*5 
console.log(c)
c/=5 //c=c/5
console.log(c)

//Comparision
console.log("---------Comparision Operator------------")
console.log(5==5) //true
console.log(5=="5") //true
// == ->only check the value not the datatype

console.log(5 === 5) //true - Strict equal
console.log(5 ==="5") // false

//=== - >it will check both value and datatype
// ! -> true -> false -> not


console.log(5!=5) //false
console.log(5!="5") //false

console.log(5!==5) //false
console.log(5!=="5") //true

console.log("---------------------")
console.log(5<5) //false
console.log(5<=5) //true
console.log(5>5) //false
console.log(5>=5) //true

console.log("-----Logical Operator-----------")

console.log((5==5)&&(5=="5")) //true

console.log((5=="5")&&(5==="5")) //false

//&& - Both should be true else it will return false
console.log((5=="5")||(5==="5")) //True

// || - either one is false then it will return false

console.log(!true) //false

let isthere = true
console.log(!isthere) //false

//false value -> undefined , null , NaN
console.log("---------------------")
console.log(!"Hello") 
console.log(!undefined) 
console.log(!null) 
console.log(!NaN) 