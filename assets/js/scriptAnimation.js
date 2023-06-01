/*const zoomLogo = { transform: 'scale(5.5) translate(1.3vw)' };
  
const zoomTiming = {duration: 300, iterations: 1 };

let zlogo = document.getElementById("logo");

let element = document.getElementById("mision-vision-section"); 

console.log(element);

function logoAni() {
    let zlogo = document.getElementById("logo");

    zlogo.style.transition= 'transform .5s';
    zlogo.style.transform = 'scale(4.3) translate(2.0vw)';
    let MV = document.getElementById("misionVision")
    MV.style.display = 'flex';
    
}

function logoAniRev(){
    let MV = document.getElementById("misionVision")
    MV.style.display = 'none';
    let zlogo = document.getElementById("logo");

    zlogo.style.transition= 'transform .5s';
    zlogo.style.transform = 'scale(0.8) translate(-2.2vw)';
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        //scrolldown
       logoAni();
    } else if (st < lastScrollTop) {
        logoAniRev()
       // upscroll code
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);
*/

 let zlogo = document.getElementById("logo");

let element = document.getElementById("casilla");


function logoAni() {
    let zlogo = document.getElementById("logo");

    zlogo.style.transition= 'transform .8s';
    zlogo.style.transform = 'scale(5.8) translate(1.5vw)';


    let MV = document.querySelectorAll(".PMV");

    MV.forEach((PMV,i)=>{
        PMV.style.opacity = "1";
        PMV.style.transition= "opacity .8s ease 0.5s";
        
    });
    
}

function logoAniRev(){
    let MV = document.querySelectorAll(".PMV");
    MV.forEach((PMV,i)=>{
        PMV.style.opacity = "0";
        PMV.style.transition= "opacity .01s ease 0s";
        
    });
    
    let zlogo = document.getElementById("logo");

    zlogo.style.transition= 'transform .8s';
    zlogo.style.transform = 'scale(0.8) translate(-1.5vw)';
}

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) {
        //scrolldown
       logoAni();
    } else if (st < lastScrollTop) {
        logoAniRev()
       // upscroll code
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);
