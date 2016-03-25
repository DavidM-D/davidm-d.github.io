var jumboHeight = $('.jumbotron').outerHeight();
if(typeof heroUrl !== 'undefined')
    $('.bg').css('background-image', "url('" + heroUrl + "')");
var panned = 0;
function parallax(){
    var scrolled = $(window).scrollTop();
    if(typeof mhwMap !== 'undefined'){
        map.panBy(0 ,(panned-scrolled)/3)
        panned = scrolled;
    }else{
        $('.bg').css('height', (jumboHeight-scrolled) + 'px');
    }
}

$(window).scroll(function(e){
    parallax();
});
parallax();
