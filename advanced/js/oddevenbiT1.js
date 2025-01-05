let a = 3
//binary form , the odd number will end with 1 , even nu,ber end with 0
// if we make AND operation with that number, if result is 1 it is odd else o ,even
if((a&1) == 0)
{
    console.log("even")
}
else if((a&1) == 1)
{
    console.log("odd")
}
else
{
    console.log("invalid")
}

//using ternary
console.log((a&1) == 0 ? "even" : "odd")