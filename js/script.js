window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("textlogo").style.opacity = "1";
        document.getElementById("logo").style.opacity = "0";
    } else {
        document.getElementById("header").style.height = "120px";
        document.getElementById("textlogo").style.opacity = "0";
        document.getElementById("logo").style.opacity = "1";
    }
}

//Audio Player
jQuery(document).ready(function(){
    var aud = $('audio')[0];
    var play = $('.play');
    var progess = $('.progress');
    var percent = aud.currentTime / aud.duration;
    var current = aud.currentTime;
    play.click(function() {
        if (aud.paused) {
            aud.play();
            $('.playbtn').attr("src", "img/pause.svg");
        } else {
            aud.pause();
            $('.playbtn').attr("src", "img/play.svg");
        }
    })
    $('.cont').click(function(e) {
        var posX = $(this).position().left;
        percent = (e.pageX - posX) / $('.cont').width();
        progess.css('width', percent * 100 + '%');
        current = aud.duration * percent;
        aud.currentTime = percent * aud.duration;
    })
    aud.ontimeupdate = function(){
        progess.css('width', aud.currentTime / aud.duration * 100 + '%');
        var min = parseInt(aud.currentTime / 60);
        var s = parseInt(aud.currentTime) - (60 * min);
        var sec = ("0" + s).slice(-2);
        $('.current').text(min + ":" + sec);
    }
})