/*async function funname(){
    return "hello"
}
 arrowfun = async() =>{
    return "kec"
 }

 console.log(funname())
 console.log(arrowfun())*/
//without return

 /*async function funname(){
    console.log("hello")
}
 arrowfun = async() =>{
    console.log("kec")
 }

 funname()
 arrowfun()*/

 async function funname(){
    //return "hello"
    setTimeout(()=>
    {
        console.log("hello")
       // return "hello"
    },1000)
    return(await "hello")
    // return "hello"
}
 arrowfun = async() =>{
   // return "kec"
    setTimeout(()=>
        {
           // var a  ="arrow"
            console.log( "kec")
        },1000)
        return(await "KEC")
 }

 funname().then((a)=>{
    console.log(a)
 })
 arrowfun()