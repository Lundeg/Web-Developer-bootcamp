$("h1").click(function(){
    $(this).css("color","red");
})

//click
$("button").click(function(){
    var text = $(this).text();
    alert(text);
});

//keyPressed
// $("input").keypress(function(){
//     console.log("You Pressed a Key!");
// })

$("input").keypress(function(event){
    if(event.which === 13)
    alert("You Hit Enter!");
});

//on()
$("h1").on('click',function(){
    $(this).css("color","pink");
})

$("button").on('mouseleave',function(){
    $(this).css("font-weight","bold");
})