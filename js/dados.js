/**
 *
 */

var CubileteMagico = function(){

	this.cantidadDados = 1;


	this.init = function(cantidad){
		if (!isNaN(cantidad))
			this.cantidadDados = cantidad;
		else
			alert('El valor ingresado no es un numero válido');
	}
	
	this.tirarDados = function(){
		var d = 0;
		for (var i = 0; i < this.cantidadDados; i++) {
			d = Math.floor((Math.random() * 6) + 1);

		}
	}

}

$(function(){
	
	var tirador = new CubileteMagico();

	$('input').blur(function(){
		tirador.init(this.value);
	})
	
	$("#jugar").click(function(){
			tirador.tirarDados();
	});





})
