let zlogo = document.getElementById("logo");

let element = document.getElementById("casilla");


var elem = document.getElementById("logo");
var idDown = null;
var idTop = null;

/*   function myMoveDown() {
  var pos = 20;
  clearInterval(idDown);
  idDown = setInterval(frameDown, 10);
    function frameDown() {
            if (pos == 100) {
            clearInterval(idDown);
            } else {
            pos++;
            elem.style.width = pos + 'vw';
            }
        }
    }; */

/*
function logoAni() {

    let zlogo = document.getElementById("logo");

    zlogo.style.transition= 'transform .8s';
    zlogo.style.transform = 'scale(1.1) translate(1.1vw)';

    let MVlogo = document.getElementById("logoMV");
    MVlogo.style.opacity = "1";
    MVlogo.style.transition= "opacity .8s ease 0.5s";

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

    let MVlogo = document.getElementById("logoMV");
    MVlogo.style.opacity = "0";
    MVlogo.style.transition= "opacity .01s ease 0s";
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



// coordenadas de cada seccion de la pagina
/*var locaciones = [];
let secciones = document.querySelectorAll('section');
secciones.forEach(function callback(seccion, i, array) {
    locaciones[i] = seccion.getBoundingClientRect();
    // tu iterador
});


function nextSeccion(inView, sec){
    if(inView<sec){
        
    }
}*/


 
var lastScrollTop = 0;
let MV = document.getElementById('inicio-mv');
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var inViewNow = this.window.pageYOffset;
    if (st > lastScrollTop) {
            myMoveDown();
        //scrolldown
    } else if (st < lastScrollTop) {
            myMoveDown();
       // upscroll code
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);



 /* animacion de los pilares 

const progreso    = document.getElementById("progreso");
const anterior    = document.getElementById("anterior");
const siguiente   = document.getElementById("siguiente");
const circles     = document.querySelectorAll(".circle");
const pages       = document.querySelectorAll(".P");
const parrafos    = document.querySelectorAll(".Pilar");

let currentActive = 1;
let lastActive = 1;

/* Boton siguiente, despliega la ventana que se indica
siguiente.addEventListener("click", () => {
    lastActive = currentActive;
    currentActive++;

    if (currentActive > circles.length){
        currentActive = circles.length;
    };

     boton activo o desactivo 
    anterior.disabled=false;

    if(currentActive != circles.length){
       siguiente.disabled=false;
    }else if(currentActive == circles.length){
        siguiente.disabled=true;
     }


    pilarActivo();
    displayVentana();
})*/

/* Boton anterior, despliega la ventana que se indica
anterior.addEventListener("click", () => {
    lastActive = currentActive;
    currentActive--;

    
    if (currentActive < 1){
        currentActive = 1;
    };

     boton activo o desactivo 
    siguiente.disabled=false;

    if(currentActive != 1){
        anterior.disabled=false;
        
     }
     else if(currentActive ==1){
        anterior.disabled=true;
     }



    pilarActivo();
    displayVentana();
})*/

/*quita ventana que se encuentra en display y coloca la nueva ventana 
function displayVentana(){
    let lastPage = pages[lastActive-1];
    let page = pages[currentActive-1];
    let parrafo = parrafos[currentActive-1];
    let lastParrafo = parrafos[lastActive-1];
    page.classList.add("show");
    parrafo.classList.add("show");
    
    if(lastActive != currentActive){
    lastPage.classList.remove("show");

    lastParrafo.classList.remove("show");
}
}*/

/* modifica la barra de avance, correspondiente a la ventana activa
function pilarActivo(){
    circles.forEach((circle,i)=>{
            let page = pages[i];
            if(i < currentActive){
                circle.classList.add("active");
            }
            else{
                circle.classList.remove("active");
            }
    })

    

    const activos = document.querySelectorAll(".circle.active");
    console.log(activos);
    progreso.style.width = (((activos.length-1)/(circles.length-1)) * 100 + '%');

}*/
