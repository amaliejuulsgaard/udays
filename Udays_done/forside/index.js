$(function() {
    $(".arrow").css("display", "none");

    $("button").on('click', function () {
        $(".baggrund").css({"background-image": "url(pics/1.jpg)","background-size": "contain"});
        $("button").css({"display": "none"});
        $(".container").css({"display": "none"})
        $(".arrow").css("display", "block");
    });

    $("#pil_højre").on('click', function(){
        var pos = $(".baggrund").css("background-image");
        pos = pos.slice(-8,-6).replace("/","");
        pos = parseInt(pos);
        console.log("højre_clicked " + pos);
        switch (pos) {
            case 1:
                $(".baggrund").css("background-image", "url(pics/2.jpg)");
                break;
            case 2:
                $(".baggrund").css("background-image", "url(pics/3.jpg)");
                break;
            case 3:
                $(".baggrund").css("background-image", "url(pics/1.jpg)");
                break;
            case 4:
                $(".baggrund").css("background-image", "url(pics/6.jpg)");
                break;
            case 5:
                $(".baggrund").css("background-image", "url(pics/4.jpg)");
                break;
            case 6:
                $(".baggrund").css("background-image", "url(pics/5.jpg)");
                break;
            case 7:
                $(".baggrund").css("background-image", "url(pics/8.jpg)");
                break;
            case 8:
                $(".baggrund").css("background-image", "url(pics/7.jpg)");
                break;
            case 9:
                $(".baggrund").css("background-image", "url(pics/10.jpg)");
                break;
            case 10:
                $(".baggrund").css("background-image", "url(pics/9.jpg)");
                break;
            case 11:
                $(".baggrund").css("background-image", "url(pics/12.jpg)");
                break;
            case 12:
                $(".baggrund").css("background-image", "url(pics/13.jpg)");
                break;
            case 13:
                $(".baggrund").css("background-image", "url(pics/11.jpg)");
                break;
            case 14:
                $(".baggrund").css("background-image", "url(pics/15.jpg)");
                break;
            case 15:
                $(".baggrund").css("background-image", "url(pics/14.jpg)");
                break;
        }
    });

    $("#pil_venstre").on('click', function(){
        var pos = $(".baggrund").css("background-image");
        pos = pos.slice(-8,-6).replace("/","");
        pos = parseInt(pos);
        console.log("venstre_clicked " + pos);
        switch (pos) {
            case 1:
                $(".baggrund").css("background-image", "url(pics/3.jpg)");
                break;
            case 2:
                $(".baggrund").css("background-image", "url(pics/1.jpg)");
                break;
            case 3:
                $(".baggrund").css("background-image", "url(pics/2.jpg)");
                break;
            case 4:
                $(".baggrund").css("background-image", "url(pics/5.jpg)");
                break;
            case 5:
                $(".baggrund").css("background-image", "url(pics/6.jpg)");
                break;
            case 6:
                $(".baggrund").css("background-image", "url(pics/4.jpg)");
                break;
            case 7:
                $(".baggrund").css("background-image", "url(pics/8.jpg)");
                break;
            case 8:
                $(".baggrund").css("background-image", "url(pics/7.jpg)");
                break;
            case 9:
                $(".baggrund").css("background-image", "url(pics/10.jpg)");
                break;
            case 10:
                $(".baggrund").css("background-image", "url(pics/9.jpg)");
                break;
            case 11:
                $(".baggrund").css("background-image", "url(pics/13.jpg)");
                break;
            case 12:
                $(".baggrund").css("background-image", "url(pics/11.jpg)");
                break;
            case 13:
                $(".baggrund").css("background-image", "url(pics/12.jpg)");
                break;
            case 14:
                $(".baggrund").css("background-image", "url(pics/15.jpg)");
                break;
            case 15:
                $(".baggrund").css("background-image", "url(pics/14.jpg)");
                break;
        }
    });

    $("#pil_frem").on('click', function(){
        var pos = $(".baggrund").css("background-image");
        pos = pos.slice(-8,-6).replace("/","");
        pos = parseInt(pos);
        console.log("frem_clicked " + pos);
        switch (pos) {
            case 1:
                $(".baggrund").css("background-image", "url(pics/14.jpg)");
                break;
            case 2:
                $(".baggrund").css("background-image", "url(pics/4.jpg)");
                break;
            case 3:
                $(".baggrund").css("background-image", "url(pics/3.jpg)");
                break;
            case 4:
                $(".baggrund").css("background-image", "url(pics/8.jpg)");
                break;
            case 5:
                $(".baggrund").css("background-image", "url(pics/5.jpg)");
                break;
            case 6:
                $(".baggrund").css("background-image", "url(pics/2.jpg)");
                break;
            case 7:
                $(".baggrund").css("background-image", "url(pics/10.jpg)");
                break;
            case 8:
                $(".baggrund").css("background-image", "url(pics/6.jpg)");
                break;
            case 9:
                $(".baggrund").css("background-image", "url(pics/11.jpg)");
                break;
            case 10:
                $(".baggrund").css("background-image", "url(pics/7.jpg)");
                break;
            case 11:
                $(".baggrund").css("background-image", "url(pics/15.jpg)");
                break;
            case 12:
                $(".baggrund").css("background-image", "url(pics/12.jpg)");
                break;
            case 13:
                $(".baggrund").css("background-image", "url(pics/9.jpg)");
                break;
            case 14:
                $(".baggrund").css("background-image", "url(pics/1.jpg)");
                break;
            case 15:
                $(".baggrund").css("background-image", "url(pics/13.jpg)");
                break;
        }
    });

});