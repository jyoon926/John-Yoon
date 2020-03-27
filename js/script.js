window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("textlogo").style.opacity = "1";
        document.getElementById("logo").style.opacity = "0";
        $('.dot').css("margin-top", '17px');
        $('.dot').css("height", '4px');
        $('.dot').css("width", '4px');
        $('.dot').css("border-radius", '2px');
    } else {
        document.getElementById("header").style.height = "120px";
        document.getElementById("textlogo").style.opacity = "0";
        document.getElementById("logo").style.opacity = "1";
        $('.dot').css("margin-top", '20px');
        $('.dot').css("height", '5px');
        $('.dot').css("width", '5px');
        $('.dot').css("border-radius", '2.5px');
    }
}

//Audio Player
jQuery(document).ready(function(){
    var aud = $('audio')[0];
    var play = $('.play1');
    var progess = $('.progress1');
    var playbtn = $('.playbtn1');
    var cur = $('.current1');
    var cont = $('.cont1');
    var percent = aud.currentTime / aud.duration;
    var current = aud.currentTime;
    play.click(function() {
        if (aud.paused) {
            aud.play();
            playbtn.attr("src", "img/pause.svg");
        } else {
            aud.pause();
            playbtn.attr("src", "img/play.svg");
        }
    })
    cont.click(function(e) {
        var posX = $(this).position().left;
        percent = (e.pageX - posX) / cont.width();
        progess.css('width', percent * 100 + '%');
        current = aud.duration * percent;
        aud.currentTime = percent * aud.duration;
    })
    aud.ontimeupdate = function(){
        progess.css('width', aud.currentTime / aud.duration * 100 + '%');
        var min = parseInt(aud.currentTime / 60);
        var s = parseInt(aud.currentTime) - (60 * min);
        var sec = ("0" + s).slice(-2);
        cur.text(min + ":" + sec);
    }
})


jQuery(document).ready(function(){
    var aud = $('audio')[1];
    var play = $('.play2');
    var progess = $('.progress2');
    var playbtn = $('.playbtn2');
    var cur = $('.current2');
    var cont = $('.cont2');
    var percent = aud.currentTime / aud.duration;
    var current = aud.currentTime;
    play.click(function() {
        if (aud.paused) {
            aud.play();
            playbtn.attr("src", "img/pause.svg");
        } else {
            aud.pause();
            playbtn.attr("src", "img/play.svg");
        }
    })
    cont.click(function(e) {
        var posX = $(this).position().left;
        percent = (e.pageX - posX) / cont.width();
        progess.css('width', percent * 100 + '%');
        current = aud.duration * percent;
        aud.currentTime = percent * aud.duration;
    })
    aud.ontimeupdate = function(){
        progess.css('width', aud.currentTime / aud.duration * 100 + '%');
        var min = parseInt(aud.currentTime / 60);
        var s = parseInt(aud.currentTime) - (60 * min);
        var sec = ("0" + s).slice(-2);
        cur.text(min + ":" + sec);
    }
})




jQuery(document).ready(function(){
    var aud = $('audio')[2];
    var play = $('.play3');
    var progess = $('.progress3');
    var playbtn = $('.playbtn3');
    var cur = $('.current3');
    var cont = $('.cont3');
    var percent = aud.currentTime / aud.duration;
    var current = aud.currentTime;
    play.click(function() {
        if (aud.paused) {
            aud.play();
            playbtn.attr("src", "img/pause.svg");
        } else {
            aud.pause();
            playbtn.attr("src", "img/play.svg");
        }
    })
    cont.click(function(e) {
        var posX = $(this).position().left;
        percent = (e.pageX - posX) / cont.width();
        progess.css('width', percent * 100 + '%');
        current = aud.duration * percent;
        aud.currentTime = percent * aud.duration;
    })
    aud.ontimeupdate = function(){
        progess.css('width', aud.currentTime / aud.duration * 100 + '%');
        var min = parseInt(aud.currentTime / 60);
        var s = parseInt(aud.currentTime) - (60 * min);
        var sec = ("0" + s).slice(-2);
        cur.text(min + ":" + sec);
    }
})