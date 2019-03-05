var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");


init();

function init(){
for(var i=0; i<modeBtns.length;i++){
    modeBtns[i].addEventListener("click", function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent == "Easy"){
            numSquares = 3;
        } 
        else{
            numSquares = 6;
        }       
        reset();
    });
}

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length; i++){
    // add background color
    squares[i].style.backgroundColor = colors[i];
    
    // clicked square
    squares[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColor(clickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again!";
       }
       else{
           this.style.backgroundColor = "black";
           messageDisplay.textContent = "Try again";
       }
    });

}
}


// new color button clicked
resetButton.addEventListener("click", function(){
    reset();
});



// buh squaruud daragdsan ongoor budagdana
function changeColor(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

// songogdson ongo
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//random make array function
function generateRandomColor(num){
    var arr = [];

    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }

    return arr;
}

// random color ex: rgb(255, 34, 34);
function randomColor(){
    // color red 
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}

function reset(){
    colors = generateRandomColor(numSquares);

    // tuhain jishih ongoo colors arrayaas songono
    pickedColor = pickColor();

    // clear messages display
    messageDisplay.textContent = "";

    // change text reset button
    resetButton.textContent = "New Color";
    // change colorDisplay
    colorDisplay.textContent = pickedColor; 

    // square coloruudaa solino
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        h1.style.backgroundColor = "steelblue";
    }
}

