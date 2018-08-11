$(document).ready(function () {

    //animation work-section
    $('.works-img').mouseover(function () {
        $(this).animate({
            height: '+=15px',
            width: '+=15px',
            opacity: 0.7
        });
    });
    $('.works-img').mouseout(function () {
        $(this).animate({
            height: '-=15px',
            width: '-=15px',
            opacity: 1
        });
    });
    $('.works-img').click(function () {
        $(this).toggle(3000,linear);
    });

    //form
    $('.ajax').on('submit', function(){
        var that = $(this),
            urlF = that.attr('action'),
            type = that.attr('method'),
            data = {};


        that.find('[name]').each(function(i, value){
            var that = $(this),
                name = that.attr('name'),
                value = that.val();
                data[name] = value;

        });

        $.ajax({
            url: urlF, 
            type: type,
            data: data,
            success: function(response){
                console.log(response);
            }
        });

        


        return false;
    });
    
});