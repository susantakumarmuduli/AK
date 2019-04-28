$(document).ready(function(){
    headerNavClick();
    viewGalleryBtn();
    $('.widgets-container').scrollbar();
    galleryGategroyBtnClick();
    galleryWidgetPlot(6);
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
function viewGalleryBtn(){
    $('#viewGalleryBtn').on('click', function(){
        $('.list-item[data-listname=gallery]').trigger('click');
    })
}
function galleryGategroyBtnClick(){
    $('.category-section ul li').on('click', function(){
        $('.category-section ul li').removeClass('active');
        $(this).addClass('active');
        var currentId = $(this).data('id')
        galleryWidgetPlot(currentId);
    })
}
function galleryWidgetPlot(cateId){
    $.getJSON( "data/gallery.json", function( data ) {
        var sb = "";
        var currentData = _.filter(data, {categoryId:cateId})
        for (let i = 0; i < currentData.length; i++) {
            sb += "<div class=\"widgets\" style=\"background-image: url('"+currentData[i]["imageUrl"]+"')\" data-toggle=\"modal\" data-target=\"#galleryPopupup\">\
            <div class=\"zoom-icon\"></div>\
        </div>";
            
        }
       $('#galleryWidgetsContainer').empty().append(sb.toString());
       getPopupImage();   
      });
       
}
function getPopupImage(currentImg){
    $('.widgets').on('click', function(){
        var string = "";
        var currentImagePath = $(this).attr('style');
        string += '<div class="popup-img" style="'+currentImagePath+'"></div>';
        $("#modalPopupBody").empty().append(string.toString());
    })
    
}