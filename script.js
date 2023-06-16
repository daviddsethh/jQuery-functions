$(document).ready(function(){
    $('#main-menu').smartmenus();
}); // end ready
$(document).ready(function(){
    $('.gallery a').attr('data-fancybox', 'mygallery');
    $('.gallery a').each(function(){
        $(this).attr('data-caption', $(this).find('img').attr('alt'));
        $(this).attr('title', $(this).find('img').attr('alt'));
    });
    $('.gallery a').fancybox();
}); // end ready
$(document).ready(function(){
    $('#username').mouseover(function(){
        $(this).css('background-color', 'blue');
    });
    $('#password').mouseover(function(){
        $(this).css('background-color', 'orange');
    });
    $('#photo').width(0).height(0).css('opacity', 0);
    $('#caption').hide();
    $('#photo').animate({
        width: '700px',
        height: '500px',
        opacity: 1,
    },
    1000,
    function(){
        $('#caption').fadeIn(1000);
    });
    $('#container').dblclick(function(){
        $('#container').fadeOut(1500)
    });   
}); // end ready
$(document).ready(function() {
    $('#signup').validate({
        rules: {
        username: {
            required: true,
            username: true
        },
        password: {
        	required: true,
        	rangelength: [8,16]    
        },
        confirm_password: {
        	equalTo: "#password"    
        }
        }, // end rules
        messages: {
        username: {
        	required: "Please insert a valid username."   
        },
        password: {
        	required: "Please insert a password.",
        	rangelength: "Password must be 8 to 16 characters long."    
        },    
        }
    }); // end validate()
}); // end ready