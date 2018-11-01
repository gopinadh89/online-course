/*height*/
$(document).ready(function(){
    function calcheight(){
        debugger;
        var windowHeight = window.innerHeight;
        
        $(".courseheight").css("height", windowHeight - 0);
    }
    calcheight();
    $(window).resize(function(){
        calcheight();
    })
});
/*height*/