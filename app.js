const menuBtn = document.getElementsByClassName('menu-btn');
let menuOpen = false;
var menuSecondary = document.getElementsByClassName('nav-container-secondary');
var body = document.getElementsByTagName('body');
function clicked() {
    if (!menuOpen) {
        menuBtn[0].classList.add('open');
        menuOpen=true;
        setTimeout(() => {
            menuSecondary[0].style.transform = "translateX(0%)";
            
        }, 100);
        menuSecondary[0].style.display ="block";
        body[0].style.overflowX ="hidden";

    }
    else {
        menuBtn[0].classList.remove("open");
        menuOpen = false;
        setTimeout(() => {
            menuSecondary[0].style.display ="none";
            
        }, 300);
        menuSecondary[0].style.transform = "translateX(100%)";
        body[0].style.overflowX ="hidden";
    }
    console.log("hello");
    
};