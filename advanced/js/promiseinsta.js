async function commentcode(){
    return new Promise((commentposted)=>{
        commentposted("commnet posted successfully")
    })
}
async function likecode(){
    return new Promise((likeposted)=>{
        likeposted("like posted successfully")
    })
}
async function createpost(){
    var post = new Promise((cpost) =>{
        cpost("post created successfully")

    })
    var [posts,comment,likes] = await Promise.all([post,commentcode(),likecode()])
    console.log(posts)
    console.log(comment)
    console.log(likes)
}
createpost()

///task

