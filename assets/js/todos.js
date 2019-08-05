//Check off specific todos by clicking
//When li is clicked inside a ul
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click", "span", function(event) {
    //Select the parent
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //Stop event bubbling
    event.stopPropagation();
})

//Create new todos
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        //Grab new todo text from input
        var todoText = ($(this).val());
        $(this).val(""); 
        //Create new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})