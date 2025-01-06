

fetchData = (callback) =>
{
    console.log("fetching the data")
    setTimeout(()=>{
        const data = "fetching completed"
        callback(data)
    },2000);
}
handleData = (data) =>
{
    console.log("received",data)
}
fetchData(handleData);