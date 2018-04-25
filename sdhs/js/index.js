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

    var to = new Date();
    var day = to.getDate();
    var month = to.getMonth();
    var year = to.getFullYear();

    $(".today").text(day);
    $(".tomonth").text(month);
    $(".toyear").text(year);

    $(".notice").click(function () {
        $(".notice").css({"color" : "rgb(65, 113, 255)"});
        $(".correspondence").css({"color" : "black;"});
        $(".notice_1").css({"display" : "block"});
        $(".notice_2").css({"display" : "none"});

    });
    $(".correspondence").click(function () {
        $(".correspondence").css({"color" : "rgb(65, 113, 255)"});
        $(".notice").css({"color" : "black"});
        $(".notice_2").css({"display" : "block"});
        $(".notice_1").css({"display" : "none"});
    });

    $(".sub_img").click(function () {
        $(".sun_popup").css({});
    })
});