
async function commentcode() {
    return new Promise((resolve) => {
      resolve("Comment posted successfully");
    });
  }
  
 
async function likecode() {
    return new Promise((resolve) => {
      resolve("Like posted successfully");
    });
}
  
 async function unlikecode() {
    return new Promise((resolve, reject) => {
      
      const isLiked = true;  
      if (isLiked) {
        resolve("Like removed successfully");
      } else {
        reject("No like to remove");
      }
    });
}
  
  
async function unshareCode() {
    return new Promise((resolve, reject) => {
     
      const isShared = true;  
      if (isShared) {
        resolve("Post unshared successfully");
      } else {
        reject("No post to unshare");
      }
    });
}
  
  
async function uncommentcode() {
    return new Promise((resolve, reject) => {
     
      const isCommented = true;  
      if (isCommented) {
        resolve("Comment removed successfully");
      } else {
        reject("No comment to remove");
      }
    });
}
  
  
async function postcode() {
    return new Promise((resolve) => {
      resolve("Post created successfully");
    });
}
  
  
async function performActions() {
    post = postcode();
    comment = commentcode();
    like = likecode();
    share = unshareCode();
    uncomment = uncommentcode();
    unlike = unlikecode();
  
    
const results = await Promise.all([post,comment,like,share,uncomment,unlike ]);
results.forEach(result => console.log(result));
  }
  
 
performActions();
  