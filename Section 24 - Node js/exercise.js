function echo(str,num){
    for(var i=0;i<num;i++){
        console.log(str);   
    }
};


//echo("Echo!!!",10);

//dundaj oloh function
var scores = [90, 98, 89, 100, 100, 86, 94];
function average(score){
    var sum = 0;
    scores.forEach(score => {
        sum += score;
    });
    var average = sum/scores.length;
    return Math.round(average); 
};

console.log(average(scores));