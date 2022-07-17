const Renderer = function(){

    const source = $("#store-template").html();
    const template = Handlebars.compile(source);
   
    const renderPosts = function(posts){
     
        $("#posts").empty()
        const newHTML = template({post: posts})
        $("#posts").append(newHTML)
       
       
    }

    return{
        renderPosts
    }
}