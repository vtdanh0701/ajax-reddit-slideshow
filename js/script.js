var hide = document.getElementById("inputcontainer");
var resetButton = document.getElementById("reset");
var imgDisplay = document.getElementById("img");
var images = ["1","2","3","4","5","6"];
var i=0;
var on = true;
var t;
//imgDisplay.src = "img/1.jpg";

function play(){
    console.log(on);
    hide.style.display = "none";
    on = true;
}
function clickButton(){
    play();
    slideShow();
}
function reset(){
    hide.style.display = "block";
    on = false;
    console.log(on);
    clearTimeout(t);
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

// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//     .then(function(data){
//         return data.json();
//     })
//     .then(function(json){
//         var img = json;
//         var url = img.data.children[0].data.url
//         console.log(url)
//     })


function slideShow(){
    imgDisplay.src = "img/"+ images[i] +".jpg";
    if((i < images.length - 1) && on === true){
        i++;
        console.log(on);
    }
    else if(on === true && i === images.length - 1){
        i = 0;
        console.log(on);
    }
    t = setTimeout(slideShow,2000);
}

function pause(){
    if(on === true){
        on = false;
        document.getElementById("clickplay").textContent = "Play";
        console.log(on);
        clearTimeout(t);
    }
    else if(on !== true){
        on = true;
        slideShow();
        document.getElementById("clickplay").textContent = "Pause";
    }
 }