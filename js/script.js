window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "60px";
        document.getElementById("header").style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
        document.getElementById("logo").style.height = "28px";
    } else {
        document.getElementById("header").style.height = "120px";
        document.getElementById("logo").style.height = "40px";
        document.getElementById("header").style.boxShadow = "0 2px 5px rgba(0,0,0,0)";
    }
}