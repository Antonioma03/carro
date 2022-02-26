canvas=document.getElementById("lienzo");
dibujo=canvas.getContext("2d");
roverancho=100;
roveralto=100;
roberx=100;
robery=100;
marte="estacionamiento.jpg";
rober="carro.png";
fondosmarte=["fondo1.jpg","fondo2.jpg","fondo3.jpg","fondo4.jpg"];
fondoaleatorio=Math.floor(Math.random()*4);
fondonuebo=fondosmarte[fondoaleatorio];
function inisiar()
{
    ponerfondo=new Image();
    ponerfondo.onload=cargarfondo;
    ponerfondo.src=marte;
    ponercarro=new Image();
    ponercarro.onload=cargarcarro;
    ponercarro.src=rober;
}
function cargarfondo()
{
    dibujo.drawImage(ponerfondo,0,0,canvas.width,canvas.height);
 
}
function cargarcarro(){
    dibujo.drawImage(ponercarro,roberx,robery,roverancho,roveralto);
}
window.addEventListener("keydown", botones);
function botones (e){
    boton = e.keyCode;
    if (boton=="38")
    {
        ariba();
    }
    if (boton=="40")
    {
        abajo();
    }
    if (boton=="37")
    {
        isquierda();
    }
    if (boton=="39")
    {
        derecha();
    }
}
function ariba(){

     if(robery>=0){
         robery=robery-10;
         cargarfondo();
        cargarcarro();
     }

}
function abajo(){
    if(robery<=500){
        robery=robery+10;
        cargarfondo();
       cargarcarro();
    }
}
function derecha(){
    if(roberx<=700)
        roberx=roberx+10;
        cargarfondo();
       cargarcarro();
}
function isquierda(){
    if(roberx>=0)
        roberx=roberx-10;
        cargarfondo();
       cargarcarro();
}


