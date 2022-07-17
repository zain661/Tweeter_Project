const Tweeter = function(){
    let _posts = [
    
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    
]

let postIdCounter = 2
let commentIdCounter = 6

const getPosts = function(){
    return _posts
}
const addPost = function(data){
    postIdCounter++
    _posts.push({
        text: data ,
        id: "p" + postIdCounter ,
        comments: []
    })
}

const removePost = function(postId){
    
     _posts = _posts.filter((p) => p.id !== postId);
     postIdCounter--;
    //another way 
    // const post = _posts.find(p => p.id === postId)  
    // const index = parseInt(postId.slice(1))
    // _posts.splice(index-1,1)

}

const addComment = function(txt,postId){
    commentIdCounter++
    for(let post of _posts){
        if(post.id == postId){
            post.comments.push({
                id: "c" + commentIdCounter ,
                text: txt
               })
        }
    }
   
}

const removeComment = function(postId,commentId){
    //  const findPost = _posts.find(p => p.id==postId)
    // // const newComments = findPost.comments.filter((c) => c.id !== commentId);
    // const index = parseInt(commentId.slice(1))
    // findPost.comments.splice(index-1,1)
    // findComment = findPost.comments.id == commentId
    //  const index = parseInt(postId.slice(1))
    // _posts[index-(_posts.length)].comments=_posts[index-(_posts.length)].comments.filter((c) => c.id !== commentId);
    commentIdCounter--
    for(let post of _posts)
        if(post.id == postId)
          post.comments = post.comments.filter((c) => c.id !== commentId);
                
            
            
        
    
}

   return{
    addPost , 
    getPosts ,
    removePost ,
    addComment , 
    removeComment 

   }
}


