//using toggleClass
$('ul').on('click','li',function(){
    $(this).toggleClass("completed");  
});

//
$("ul").on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which ===13){
        // input text avah
        var todoText = $(this).val();

        //input cleaner
        $(this).val("");

        //create li
        $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>"); 
    }
});


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});