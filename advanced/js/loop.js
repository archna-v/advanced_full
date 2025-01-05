//for loop

for(let i=0 ;i<10;i++)
{
    console.log(i," ")
}
 
//while loop
a =0
while(a<=10)
{
    ++a
    console.log(a," ")
}
c=0
do
{
   c++
   if(c>0)
   {
    console.log(c," ")
   }
}while(c<=10)

//for in loop
array = [10,20,30,40,50]
for(var a in array)
{
    console.log(a," ")
}
//for of loop
for(var a of array)
{
    console.log(a, " ")
}

array.forEach((element,index) => {
    console.log("ele is ",element,"and its is ",index)
});

//day3 task 
objtype ={
    "fname" : "debe",
    "lastname":"jaga",
    "age":20
}
/*console.log(objtype.age)                     //object is not iteratable
objtype.forEach((value)=> {
    console.log(value)
});

for(key in objtype){
    value = objtype.key
    console.log(key,value)
}*/
Object.keys(objtype).forEach((key) => {                // using for each loop task
    console.log(key, objtype[key]);  
  });

for (let key of Object.keys(objtype)) {                    //using for of loop
    console.log(key, objtype[key]);  
  }