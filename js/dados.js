/**
 * 
 */

var tiradorDados = function(){
	
	this.cantidadDados = 0;
	
	this.tirarDados = function(){
		alert('asdasd');
	}
}


$(function(){
	var tirador = new tiradorDados();
	
	$('#numeroDados').click(function(){
		tirador.cantidadDados = $('input').val();
		console.log(tirador.cantidadDados);
	});
	
	
	
	
})