var str = prompt("Enter the Numbers");
var num = Number(str);
// isEven function
function isEven(num){
    if(num % 2 === 0){
        console.log("even number");
    }

    else {
        console.log("odd number");
    }
}

isEven(num);


//factorial
function factorial(num){
    if(num === 1 || num ===0) {
        return 1;
    }
    return num * factorial(num-1);

}

alert(num + "! = " + factorial(num));

// undescore replace dash
var str1 = prompt("Enter the string!");

function kebabToSnake(str){
    return str.replace(/-/g,"_");
}

alert(kebabToSnake(str1));