function menuFixed(id){
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;
    
    window.onscroll = function(){
        changePos(id,_getHeight);
    }
}
function changePos(id,height){
    var obj = document.getElementById(id);
    //var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (doc.documentElement || doc.body.parentNode || doc.body).scrollTop;
    if(scrollTop < height){
        obj.style.position = 'relative';
    }else{
        obj.style.position = 'fixed';
        $(obj).animate({
            "top": 0
        })
    }
}
$(document).ready(function(){
    setTimeout(function(){
        $("#id-logo").fadeIn(5000);
       /* $("#id-logo").animate({
            "padding-top": "0"
        }, function(){
            $(".header-xdintro").slideDown('slow');
        });*/
    }, 1000);
    $(".memone").hover(function(e){
        var node = $(e.target.childNodes[1]);
        var height = e.target.offsetHeight;
        var width = e.target.offsetWidth;
        node.fadeIn('normal', function(){
            node.css("cursor", "auto");
        });
        
    }, function(e){
        var node = this.childNodes[1];
        $(node).fadeOut('normal', function(){
            $(node).css("cursor", "pointer");
        });
    });
    $("#nav-link a").click(function(){
        var id = $(this).attr("name");
        var pos = $("#" + id).offset().top;
        $('body,html').animate({
            scrollTop: pos - 52
        },
        600)
    })
})

$(function() {
    var totop_posi = 60; //([win_width - wrap_width] / 2 - totop_width);
    $('#totop').css({
        'right': totop_posi
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200)
        {
            $('#totop').slideDown(200);
        } else
        {
            $('#totop').slideUp(200);
        }
    });
    $('#totop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        },
        600)
    });
})
