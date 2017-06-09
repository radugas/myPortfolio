$(document).ready(function () {
    $('#work1, #work2, #work3, #work4, #work5, #work6').mouseenter(function () {
        $(this).animate({
            height: '+=10px'
        });
    });
    $('#work1, #work2, #work3, #work4, #work5, #work6').mouseleave(function () {
        $(this).animate({
            height: '-=10px'
        });
    });
    $('#work1, #work2, #work3, #work4, #work5, #work6').click(function () {
        $(this).toggle(1000);
    });
});