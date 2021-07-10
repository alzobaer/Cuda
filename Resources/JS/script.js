//........MixItUp............
//$('#Button').prop('disabled', true);
var mxt = document.querySelector('.container');
var mixer = mixitup(mxt);

//..........STICKY NAVBAR............
$(document).ready(function(){
    $(".js-services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });
});

//.........NAVBAR ACTIVE SHOW.............//
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})

$(document).on('click', '#portfolio button', function(){
    $(this).addClass('active').siblings().removeClass('active')
})