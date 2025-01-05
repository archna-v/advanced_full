//func with parameter and return type
fun1 = (x,y) =>{
   return x+y
}
const c=30
fun2 = () =>{

    return c
}
fun3 = (x,y) =>{
      console.log(x*y)
}
funct = () =>
{
    console.log(c)
}
fun4 = () =>{
    funct()
}
a=10
b=20
console.log(fun1(a,b))
console.log(fun2())
console.log(fun3(a,b))
console.log(fun4())