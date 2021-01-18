// // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     // document.getElementsByClassName("mynavbar").style.padding = "30px 10px";
//     document.getElementById("logo").style.height= "35px";
//   } else {
//     // document.getElementsByClassName("mynavbar").style.padding = "80px 10px";
//     document.getElementById("logo").style.height = "150px";
//   }
// }

$(function () { 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) { 
            $('.navbar #logo').attr('src','photos/logo.png');
        }
        if ($(this).scrollTop() < 80) { 
            $('.navbar #logo').attr('src','photos/logo-large.png');
        }
    })
});