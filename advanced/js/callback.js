dbShare = () =>{
    console.log("data stored successfully")
}
function submitform(formmsg,dbs)
{
  setTimeout = () =>
  {
    dbs()
    console.log(formmsg)
  },1000
 
}
submitform("form submitted successfully ",dbShare)
