/**
 *
 */

var CubileteMagico = function(){

	this.cantidadDados = 1;
	

	this.init = function(cantidad){
		if (!isNaN(cantidad)){
			this.cantidadDados = cantidad;
		}else
			alert('Debe ingresar un valor mayor a 1');
	}
	
	this.tirarDados = function(){
		var d = 0,
		 	img = "",
		 	imagenes = $('img'),
			mismoTurno = false; 
		
		
		if (imagenes.length){
			if(imagenes.length == this.cantidadDados)
				mismoTurno = true;
			else
				mismoTurno = false;
		} else
			mismoTurno = false;
				
		if (mismoTurno)
			imagenes.each(function(){
				d = Math.floor((Math.random() * 6) + 1);
				this.src = "images/dado"+d+".png";
			});
		else{
			for (var i = 0; i < this.cantidadDados; i++) {
				d = Math.floor((Math.random() * 6) + 1);
				img += "<img src='images/dado"+d+".png' />";
			}
			$('.dados').html(img);
		}
		
	}

}

$(function(){
	
	var tirador = new CubileteMagico();

	$('input').blur(function(){
		tirador.init(this.value);
	});
	
	$("#jugar").click(function(){
		tirador.tirarDados();
	});





})
