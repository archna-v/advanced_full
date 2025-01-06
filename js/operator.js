//assignment operator
v =70
//arithmetic operator
a =100
b=30
console.log("add ",a+b)
console.log("sub ",a-b)
console.log("mul ",a*b)
console.log("div ",a/b)
console.log("mod",a%b)
//relational operator
c =45
if(a>=b&&a>=c)
{
    console.log(a,"is greater")
}
else if(b>=c)
{
    console.log(b,"is greater")
}
else
{
    console.log(c,"is greater")
}
if(a==b || b!=0 || c===a)
{
    console.log('A ,B,C are',a," ",b," ",c)
}
a = 5
b = 1
console.log("bitwise AND ",a&b)
console.log("bitwise OR ",a|b)
console.log("bitwise NOT ",~b)
console.log("left shift ",a<<b)
console.log("right shift",a>>b)

//ternary operator
var result = a>b ? a : b
console.log("result of ternary is ",result)

