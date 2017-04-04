var longitud=document.getElementsByClassName("espacio").length;
var longitudBombas=document.getElementsByClassName("bomba").length;
var longitudNumero1=document.getElementsByClassName("numero1").length;
var longitudNumero2=document.getElementsByClassName("numero2").length;
var tabla=document.getElementById("tablaBuscaminas");

//En la variable longitud se guardan el numero de clases "espacio" que tengo en mi documento
var numEspacios =[];
var celdasBomba=[];
var celdasNumero1=[];
var celdasNumero2=[];

//Este primer for obtiene los espacios y los mete en el arreglo numEspacios
for (var i = 0; i < longitud; i++){
  numEspacios[i]=document.getElementsByClassName("espacio")[i];
}
for (var i=0; i< numEspacios.length; i++){
  numEspacios[i].addEventListener("click",cambiarColor,false);
}
//Este primer for obtiene las casillas con bomba y los mete en el arreglo celdasBomba
for (var i = 0; i < longitudBombas; i++){
  celdasBomba[i]=document.getElementsByClassName("bomba")[i];
}
for (var i=0; i< celdasBomba.length; i++){
  celdasBomba[i].addEventListener("click",explotaBomba,false);
}
//Este primer for obtiene las casillas con numero1 y los mete en el arreglo celdasnumeros1
for (var i = 0; i < longitudNumero1; i++){
  celdasNumero1[i]=document.getElementsByClassName("numero1")[i];
}
for (var i=0; i< celdasNumero1.length; i++){
  celdasNumero1[i].addEventListener("click",muestraNum1,false);
}
//Este primer for obtiene las casillas con numero2 y los mete en el arreglo celdasNumero2
for (var i = 0; i < longitudNumero2; i++){
  celdasNumero2[i]=document.getElementsByClassName("numero2")[i];
}
for (var i=0; i< celdasNumero2.length; i++){
  celdasNumero2[i].addEventListener("click",muestraNum2,false);
}
//Se definen aquí las funciones.
/*function stop(){
  event.stoppropagation;
  alert("No puedes jugar más!, Da clic en reiniciar para jugar otra vez!")
}*/
function cambiarColor(){
this.style.backgroundColor = "green";
}
function explotaBomba(){
  alert("Encontraste una Bomba,PERDISTE!!!");
  this.innerHTML="<img src='bomba.jpg' width='70'>";
  if(explotaBomba==true){
    event.stopPropagation();
  }

  //desabilitar;
  //event.stopPropagation();
}
function muestraNum1(){
  this.innerText="1";
}
function muestraNum2(){
  this.innerText="2";
}
//Esta funcion resetea todo el form que contiene la tablaBuscaminas
function reiniciar(){
  tabla.reset();
}
/*
function desabilitarTabla(){
 tabla.disabled = true;
}

function habilitarTabla() {
 tabla.disabled= false;
}
*/
