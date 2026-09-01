console.log("jsdjhjdfddskj")


//var , let , const 
//var username //Variable declaration
var username = "Roy"  // varaible Intialization

username = "Harry" //Re-Assign

username="Potter"
var username = "Harrypotter"  //Re-declare
console.log(username)      

//VAR -> It will allow us to Re-Assign , Re-Declare


let fname = "Iron"
fname = "man"  // Re-Assign
//let fname = "Ironman" //Cant do Re-Declare
console.log(fname)

//let ->  It will allow us to Re-Assign but not Re-Declare

const v =12

console.log(v)

//const ->  It will not allow us to Re-Assign and Re-Declare

let r = "hello" //global variable
{
    let q="ride" //Local varaible 
    console.log(r)
}
console.log(r)


{
    var s="hi"
    console.log(s)
}
console.log(s)

//VAR - Fuction scope
//Const , Let - Block Scope

console.log(u)
var u =10 // undefined - hoisted Problem

console.log(i)
let i =90  //Reference error


console.log(j)
const j =90  //Reference error

var sname

let ename 

const gname=10