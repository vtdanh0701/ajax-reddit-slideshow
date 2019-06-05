var hide = document.getElementById("inputcontainer");
var resetButton = document.getElementById("reset");
function test(){
    console.log("a");
    hide.style.display = "none";
}

function reset(){
    hide.style.display = "block";
    
}

//get input
//replace input into http://www.reddit.com/search.json?q=cats+nsfw:no
//get the img url
//need to check if the url is .jpg or not
//if yes
//push the img url to an array
//loop through the array 
// display img
// reset

fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
    .then(function(data){
        return data.json();
    })
    .then(function(json){
        var img = json;
        var url = img.data.children[0].data.url
        console.log(url)
    })