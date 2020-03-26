function changeColor(color) { 
    document.body.style.background = color; 
}

var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");

btn.addEventListener('click', function(){
    changeColor("aliceblue");
});

btn2.addEventListener('click', function(){
    changeColor("white");
});


