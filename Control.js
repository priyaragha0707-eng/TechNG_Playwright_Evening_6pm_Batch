//Control Statement
//Conditional Statement
// Looping Statment (or) Iteration Process
//Jumping Statement


console.log("---------Conditional Statement---------")
//1. Simple if 
//2. if ... else
//3. if ... else if
//4. Nested if

console.log("---------Simple if condition---------")

// if(condition){
//     c.l
// }

if(5>=6)
{ //False
    console.log("Hello")
}

console.log("---------if else condition---------")

if(5>=6)
{ //False
    console.log("Hello")
}
else{
    console.log("Hi")
}

let username = "Admin"
let pass = "123"
if(username === "Admin" && pass ==="123"){
    console.log("Valid user")
}
else{
    console.log("InValid user")
}

console.log("---------if.... else if condition---------")

let mark = 82
if(mark >=90 && mark <=100){
    console.log("A Grade")
}
else if(mark >=75 && mark <=89){
    console.log("B Grade")
}
else if(mark >=50 && mark <=74){
    console.log("C Grade")
}
else{
     console.log("FAIL")
    }

console.log("------------------")

let amount =7000
if(amount >=10000){
    console.log("20 % Discount")
}
else if (amount >=5000){
    console.log("10 % Discount")
}
else if (amount >=2000){
    console.log("5 % Discount")
}
else
    {
    console.log("No Discount")
}

console.log("---------Nested if condition---------")

let age1= 25
let citizen ="Indian"
let hasVoterId1 = true

if(age1>=18){
    if(citizen === "Indian"){
        if(hasVoterId1){
            console.log("Able to Vote")
        }else{
            console.log("Not able to vote")
        }
    }else{
        console.log("Only Indians can vote in India")
    }
}else{
    console.log("Not Eligible")
}

