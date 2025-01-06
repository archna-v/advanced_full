arrowfun = (studept) =>{
 return studept[0]
}
console.log(arrowfun('AIML,cSE,IT',"aiml","cse","it"))
//destructuring operator
var marks = [90,91,93]
var [m1,m2,m3] = marks
console.log(m1,m2)

//ternary operator'
a =10
out =(a%2 == 0)? "even":"odd"
console.log(out)

//spread operator
arr1 =[10,20,30]
arr2 =[40,50,60]
arr3 = [...arr1,arr2]
arr4 =[...arr1,...arr2]
console.log(arr3)
console.log(arr4)

//rest operator


//scope
//let local // var,const global scope 
var a = 5
const pi =3.14
console.log(pi)
console.log(a)
{
    let a = 10
    let b =10.5
    console.log("i", a)
    console.log("i", b)
}
console.log("o", pi)
console.log("o", a)

// hoisting

dbshare = () =>{
    console.log("data stored successfully")
}
function submitform(formmsg,dbs)
{
  dbs
  console.log(formmsg)
}
submitform("form submitted successfully ",dbShare)
