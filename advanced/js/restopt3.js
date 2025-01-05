fun1 = (...value) =>{          //using rest parameter
    console.log(value[0],value[1])
}
fun1(1,2,3,4)   

fun2 = (a,b,...values) =>
{
    console.log(a,b)
    console.log(values)
    console.log(values[3])
}
fun2(20,30,40,50,60,45,56,89)