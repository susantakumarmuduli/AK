
$(document).ready(function(){
    headerNavClick();
});
function headerNavClick(){
    $('.menu-list .list-item').click(function(){
        if($(this).hasClass('active')){
            return false;
        }
        $('.menu-list .list-item').removeClass("active");
        $(this).addClass('active');
        var navName = $(this).data('listname');
        sectionSliding(navName);
    })
}
function sectionSliding(pageName){
    $('.animated-container section').map(function(e){
        $(".sliding-animation-overlay").css('display','block');
        $(this).css({'left':'-100%','z-index':0}).fadeOut();
        if($(this).hasClass(''+pageName+'-section')){
            $(this).css('z-index',4).css('left',0).fadeIn();
            }
    })
    setTimeout(function(){
        $(".sliding-animation-overlay").css('display','none');
    }, 1200);
}