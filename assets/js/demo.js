(function($){
    'use strict';
   
    $('.demo1').scratchCard({
       
    });
    
    $('.demo2').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-3.png',
        brushImage: 'assets/images/brush.png'
    });
    
    $('.demo3').scratchCard({
        inpopup:true,
        triggerOn: "#popupopen1"
    });
    
    $('.demo4').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-1.png',
        brushImage: 'assets/images/brush.png',
        inpopup:true,
        autoTrigger:true,
        triggerAfter:1,
        triggerOn: "#popupopen2"
    });
    
    $('.demo5').scratchCard({
        width: '300',
        height: '300',
        scratched: '40',
        coverImage: 'assets/images/cover-2.png',
        brushImage: 'assets/images/brush.png',
        inpopup:true,
        triggerOn: "#popupopen3"
    });
    
    $(document).on('click','.sc-copy', function(e){                                
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(this).parent().closest('div').find(".copycouponcode").text()).select();
        document.execCommand("copy");
        $(this).parent().closest('div').find(".myTooltip").html("Kode Tersalin! : " + $temp.val());
        $temp.remove();
    }); 
    $(document).keydown(function(e){return 123==e.keyCode?!1:e.ctrlKey&&e.shiftKey&&73==e.keyCode?!1:e.ctrlKey&&85==e.keyCode?!1:83==e.keyCode&&(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?!1:void 0}),$(document).on("contextmenu",function(e){e.preventDefault()});


}(jQuery));