  //Asignar valores a los cuadros de todas las filas
  var cuadro1 = document.getElementById("0,0");
  var cuadro2 = document.getElementById("1,0");
  var cuadro3 = document.getElementById("2,0");
  var cuadro4 = document.getElementById("3,0");
  var cuadro5 = document.getElementById("0,1");
  var cuadro6 = document.getElementById("1,1");
  var cuadro7 = document.getElementById("2,1");
  var cuadro8 = document.getElementById("3,1");
  var cuadro9 = document.getElementById("0,2");
  var cuadro10 = document.getElementById("1,2");
  var cuadro11 = document.getElementById("2,2");
  var cuadro12 = document.getElementById("3,2");
  var cuadro13 = document.getElementById("0,3");
  var cuadro14 = document.getElementById("1,3");
  var cuadro15 = document.getElementById("2,3");
  var cuadro16 = document.getElementById("3,3");

  cuadro1.addEventListener("click",mostrar);
  cuadro2.addEventListener("click",mostrar);
  cuadro3.addEventListener("click",mostrar);
  cuadro4.addEventListener("click",cambiarColor);
  cuadro5.addEventListener("click",mostrar);
  cuadro6.addEventListener("click",mostrar);
  cuadro7.addEventListener("click",mostrar);
  cuadro8.addEventListener("click",mostrar);
  cuadro9.addEventListener("click",cambiarColor);
  cuadro10.addEventListener("click",mostrar);
  cuadro11.addEventListener("click",mostrar);
  cuadro12.addEventListener("click",mostrar);
  cuadro13.addEventListener("click",cambiarColor);
  cuadro14.addEventListener("click",mostrar);
  cuadro15.addEventListener("click",mostrar);
  cuadro16.addEventListener("click",cambiarColor);

  function mostrar(){
    cuadro1.innerText="1";
    cuadro2.innerText="Buum!";
    cuadro3.innerText="1";

    cuadro5.innerText="1";
    cuadro6.innerText="2";
    cuadro7.innerText="2";
    cuadro8.innerText="1";

    cuadro10.innerText="1";
    cuadro11.innerText="Buum!";
    cuadro12.innerText="2";

    cuadro14.innerText="2";
    cuadro15.innerText="1";
    cuadro16.innerText=" ";
  }
function cambiarColor(){
  cuadro4.style.background="green";
  cuadro9.style.background="green";
  cuadro13.style.background="green";
}
