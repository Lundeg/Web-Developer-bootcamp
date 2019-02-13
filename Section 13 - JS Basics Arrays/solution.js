var solution1 = [12,32,34,45];

// PrintReverse
function printReverse(solution1){
    for(var i = solution1.length -1;i>=0;i--){
        console.log(solution1[i]);
    }
}

//printReverse(solution1);

var solution2 = [2,1,1];

// isUniform
// function isUniform(solution2){
//     var equal = solution2[0];
//     for(var i=1;i<solution2.length;i++){
//         if(equal !== solution2[i]){
//             return false;
//         }
//     }
//     return true;
// }

function isUniform(solution2){
    var equal = solution2[0];
    solution2.forEach(element => {
        if(equal !== element){
            return false;
        }
    });
    return true;
}



console.log(isUniform(solution2));

var solution3 = [34,21,45,32,54];

//sumArray
// function sumArray(solution3){
//     var sum = 0;
//     for(var i=0;i<solution3.length;i++){
//         sum+=solution3[i];
//     }
//     console.log("sum = " + sum);
// }

function sumArray(solution3){
    var sum = 0;
    solution.forEach(element => {
        sum+=element;
    });
    console.log("sum = " + sum);
}


var solution4 = [34,56,2,5,7,123,4554];

//max
function max(solution4){
    var max = solution4[0];
    for(var i=1;i<solution4.length;i++){
        if(max < solution4[i]){
            max = solution4[i];
        }
    }
    console.log("max = " + max);
}
