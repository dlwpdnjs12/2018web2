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
    var date=to.getDate();
    var month=to.getMonth()+1;
    var year=to.getFullYear();

    $(".today").html(date);
    $(".tomonth").html(year+"-"+month);


    $(".next_box").click(function () {
        date++;
        var date_length=new Date(year, month, 0).getDate();
        if(date>date_length){
            month++;
            date=1;
            $(".tomonth").html(year+"-"+month);
            if(month>12){
                year++;
                month=1;
                $(".tomonth").html(year+"-"+month);
            }
        }
        $(".todate p").html(date);
    })
    $(".prev_box").click(function () {
        date--;
        var date_length=new Date(year, month-1, 0).getDate();
        if(date<1){
            month--;
            date=date_length;
            $(".tomonth").html(year+"-"+month);
            if(month<1){
                year--;
                month=12;
                $(".tomonth").html(year+"-"+month);
            }
        }
        $(".todate p").html(date);
    })

    $(".notice").click(function () {
        $(".notice").css({"color" : "rgb(65, 113, 255)"});
        $(".correspondence").css({"color" : "black"});
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
        $(".pop_sec").css({"display" : "block"});
    });
    $(".close").click(function () {
        $(".pop_sec").css("display", "none");
    });
    $(".meal_img").click(function () {
        $(".meal_pop").css({"display" : "block"});
    });
    $(".close").click(function () {
        $(".meal_pop").css("display", "none");
    });

});