const tweeter = Tweeter()
const render = Renderer()

render.renderPosts(tweeter.getPosts())


const post = function(){
    const val = $("#input").val()
    tweeter.addPost(val)
    render.renderPosts(tweeter.getPosts())
    
}


$("body").on("click",".delete-post", function(){
    const txt = $(this).closest(".post").find("h3").text()
    let posts = tweeter.getPosts()
    const post = posts.find(p => p.text == txt ) 
    let postid = post.id
    tweeter.removePost(postid)
    render.renderPosts(tweeter. getPosts);

})
$("body").on("click",".add-comment", function(){
    const txt = $(this).closest(".post").find("h3").text()
    console.log(txt)
    let posts = tweeter.getPosts()
    const post = posts.find(p => p.text == txt ) 
    let postid = post.id
    console.log(postid)
    const txtC = $(this).closest(".post").find("input").val()
    console.log(txtC)
    tweeter.addComment(txtC , postid);
    render.renderPosts(tweeter.getPosts());
 })

$("body").on("click",".delete-comment", function(){

    let txtP = $(this).closest(".post").find("h3").text()
    let txtC = $(this).closest(".tc").find("p").text()
    txtC=txtC.trim();


    let posts = tweeter.getPosts()
    let commid
    let posid

    for(let p of posts){
        if(p.text == txtP)
        {
                
                posid=p.id;
            for(let comment of p.comments){
                
            
             if(comment.text == txtC)
             {
                commid=comment.id;
                  break;
             }
        }
        }
        
    }
            tweeter.removeComment(posid , commid)
            render.renderPosts(tweeter.getPosts());

})       
