/* Mi codigo de Javascript que tira dados.
*/
"use strict";

var user1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var user2;
var cantd;

$("#saveCantDados").on('click', function (event) {
  event.preventDefault();
  var cantd = $("#cantDados").val();
})
if (cantd > 1){
  function TirarMuchosDados(cantd) {
  for(var t = 0; t< cantd;t++)
    TirarDados();
}
}
function TirarDados(){
  var d = Math.floor((Math.random() * 6) + 1);
  document.getElementById('dado').src = "images/dado"+d+".png";
}




/*var cuenta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//variable donde guardar los resultados temporales

function TirarDados() {
    //genera dos numeros al azar y cambia las fuentes de las imagenes
    var d1 = Math.floor((Math.random() * 6) + 1);
    document.getElementById('dado1').src = "images/dado"+d1+".png";
    var d2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById('dado2').src = "images/dado"+d2+".png";
    //calcular suma
    var sum = d1+d2;
    //contar la suma, tener en cuenta que el arreglo empieza en 0
    cuenta[sum-1]++;
    //concatenar las cantidad de veces que salio cada suma
    var cadena = "";
    for(var c = 0; c<12; c++)
      cadena += ""+ cuenta[c] + " ";
    //mostrar en el html
    document.getElementById("resultado").innerHTML = cadena;
}

//Tira dados muchas veces
$("saveCantDados").on("click", function(){
  var cantidadDados = $("cantDados")
}

);

/*var cantidadDados = $("cantDados")
function TirarMuchosDados(cantidadDados) {
  for(var t = 0; t< cantidadDados;t++)
    TirarDados()*cantidadDados;
}*/

/*var tirando_dados = false;

function EmpezarTiradas() {
  tirando_dados = true;
  TirarConDelay();
}

//Tira dados periodicamente
function TirarConDelay() {
  if(tirando_dados) {
    TirarDados();
    window.setTimeout("TirarConDelay()", 500);
  }
}

function FrenarTiradas() {
  tirando_dados = false;
}*/
