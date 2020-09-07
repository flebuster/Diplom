
// var burg = document.getElementById('burger');
// burg.onclick = function(){
   
// };

$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger').toggleClass('active');
    });
});


$(document).ready(function(){
    $('.about_us-box-img-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        pauseOnFocus: true
    });
    $('.logos-slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        easing: 'ease',
        asNavFor:".logos-slider2",
        autoplaySpeed: 1200,
        pauseOnHover: true,
        pauseOnFocus: true, 
    
        
    });
    $('.logos-slider2').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        
        asNavFor:".logos-slider",
       
        
    });

});



