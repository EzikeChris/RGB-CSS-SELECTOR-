var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easyBtn");
var hardbtn = document.querySelector("#hardBtn");

easybtn.addEventListener("click", function(){
   hardbtn.classList.remove("selected");
   easybtn.classList.add("selected");
   colors = generateRandomColors(3);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for (var i = 0; i < squares.length; i++) {
       if(colors[i]){
           squares[i].style.background = colors[i];
       }else {
           squares[i].style.display = "none";
       }
   }


});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
         squares[i].style.background = colors[i];
         squares[i].style.display = "block";
        }
  
 
});



resetButton.addEventListener("click", function(){
    var colors = generateRandomColors(6);

    var pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
     squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323"

})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

    squares[i].style.background = colors[i];

    squares[i].addEventListener("click", function(){

        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = "clickedColor";
        }else {
             
            messageDisplay.textContent = "Try Again"
        }

        
    });

}

function changeColors(color){

    for (var i = 0; i < squares.length; i++) {

        squares[i].style.background = color;
    }
}
 
function pickColor() {
   var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){

    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor())

    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}