const menuBtn = document.getElementsByClassName('menu-btn');
let menuOpen = false;
var menuSecondary = document.getElementsByClassName('nav-container-secondary');
var body = document.getElementsByTagName('body');
const section1 = document.getElementById('section1');
/* const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
const section5 = document.getElementById('section5');
const section6 = document.getElementById('section6');
const section7 = document.getElementById('section7'); */
function clicked() {
    if (!menuOpen) {
        menuBtn[0].classList.add('open');
        menuOpen=true;
        /* menuSecondary[0].style.display = "block"; */
        menuSecondary[0].style.transform = "translateX(0%)";
        
    }
    else {
        menuBtn[0].classList.remove("open");
        menuOpen = false;
        body[0].style.overflowX ="hidden";
        
        menuSecondary[0].style.transform = "translateX(100%)";
    }
    console.log("hello");
    
};

/* function scrollto1() {
    document.documentElement.scrollIntoView(section2);
  }
function scrollto2() {
    document.documentElement.scrollIntoView(section3);
  }
function scrollto3() {
    document.documentElement.scrollIntoView(section4);
  }
function scrollto4() {
    document.documentElement.scrollIntoView(section5);
  }
function scrollto5() {
    document.documentElement.scrollIntoView(section6);
  }
function scrollto6() {
    document.documentElement.scrollIntoView(section7);
  } */
function scrollto7() {
    document.documentElement.scrollIntoView(section1);
  }
  