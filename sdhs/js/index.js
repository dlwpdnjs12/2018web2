$(document).ready(function () {

    var i=1;
    function slide(){
        $(".slide_box > img").eq(i).animate({left : -1000},0);
        $(".slide_box > img").eq(i-1).animate({left : 1000},1000);
        $(".slide_box > img").eq(i).animate({left : 0},1000);
        i++;
        if(i>=3){
            i=0;
        }
    }setInterval(slide,3000);


});