/**
 *
 */

var CubileteMagico = function(){

	this.cantidadDados = 1;


	this.init = function(cantidad){
		if (!isNaN(cantidad) && cantidad > 0){
			this.cantidadDados = cantidad;
		}else
			alert('Debe ingresar un valor mayor a 1');
	}

	this.tirarDados = function(){
		var d = 0,
			suma = 0,
		 	img_tag = "",
		 	imagenes = $('img'),
			mismoTurno = false;


		/*
		 * Verificamos que si cambiaron las condiciones iniciales
		 */
		if (imagenes.length){
			if(imagenes.length == this.cantidadDados)
				mismoTurno = true;
			else
				mismoTurno = false;
		} else
			mismoTurno = false;

		/* Dependiendo de si se mantiene la cantidad de dados o no, es si
		 * se vuelve a crear la estructura de imagenes o se editan solo el
		 * atributo src.
		 */
		if (mismoTurno)
			imagenes.each(function(){
				d = Math.floor((Math.random() * 6) + 1);
				suma += d;
				this.src = "images/dado"+d+".png";
			});
		else{
			for (var i = 0; i < this.cantidadDados; i++) {
				d = Math.floor((Math.random() * 6) + 1);
				suma += d;
				img_tag += "<img src='images/dado"+d+".png' />";
			}
			$('.dados').html(img_tag);
		}
		return suma;
	}

};

var Regulador = function(){

	this.turnoActual = 1;

	this.cambiarDeTurno = function(){
		if (this.turnoActual == 1){
			$('input').attr('disabled', 'disabled');
			this.turnoActual = 2;
		}else{
			this.turnoActual = 1;
			$('input').removeAttr('disabled');
		}
	};

	this.asignarPuntajes = function(puntaje){
		var td_element = '<td>'+puntaje+'</td>';

		if (this.turnoActual == 1){
			$('tbody').html("<tr>"+ td_element+"</tr>")
		} else{
			$('tr').last().append(td_element);
		}


	}
}


$(function(){

	var tirador = new CubileteMagico();
	var admin = new Regulador();


	$('input').blur(function(){
		tirador.init(this.value);
	});

	$("#jugar").click(function(){
		var resultado = tirador.tirarDados();
		admin.asignarPuntajes(resultado);
		admin.cambiarDeTurno();
		$('.btnCantDados p span').html(admin.turnoActual);

	});





})
