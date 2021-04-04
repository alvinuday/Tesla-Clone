const menuBtn = document.getElementsByClassName('menu-btn');
let menuOpen = false;
var menuSecondary = document.getElementsByClassName('nav-container-secondary');
function clicked() {
    if (!menuOpen) {
        menuBtn[0].classList.add('open');
        menuOpen=true;
        menuSecondary[0].style.transform = "translateX(0%)";

    }
    else {
        menuBtn[0].classList.remove("open");
        menuOpen = false;
        menuSecondary[0].style.transform = "translateX(100%)";
    }
    console.log("hello");
    
};