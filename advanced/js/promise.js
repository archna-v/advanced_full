//location finder example
/*function loc() {
    train = 8
  return   new Promise((resolve,reject) =>{
    if(train==8)
    {
        resolve("train arrived")
    }
    else{
        reject("train not arrive")
    }
  }
)                  //new keyword for starting the new promise
}

loc().then((resolvedmsg)=>
{
    console.log(resolvedmsg)
}).catch(function(rejectmsg){
    console.log(rejectmsg)
})*/

function istimeconsume(t){
    time =1000
    return time<= t
}
function isvalidloc(loc)
{
    location ="ooty"
    return loc == location
}
function loc() {
    lo = "ooty"
  return   new Promise((locfound,locnotfound) =>{
    setTimeout(()=>{
        if(isvalidloc(loc)&&istimeconsume(1000))
        {
            locnotfound("location found")
        }
    })
  }
)                  //new keyword for starting the new promise
}

loc().then((resolvedmsg)=>
{
    console.log(resolvedmsg)
}).catch(function(rejectmsg){
    console.log(rejectmsg)
})