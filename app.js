$(document).ready(function() {
    $('<input type="submit" id="btnSubmit" value="Submit" disabled>').appendTo('form');
    $('#text').keyup(function(e) {
        if($(this).val() == "") { //this took too long to figure out lol
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        }
    });
    $('<ul></ul>').appendTo('body');

    /* Click submit Event */
    $('#btnSubmit').click(function(){
       // $('<h2>' + $('#text').val() + '</h2>').appendTo('div');
       $('<li>' + $('#text').val() + '</li>').appendTo('ul');
       $("li").click(function(e) {
            $(this).css('color', 'rgb('+rand()+','+rand()+','+rand()+')');
        });
    });


});



function rand() {
    return Math.floor(Math.random() * Math.floor(255));
}