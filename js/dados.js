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
		var row = "";
		tirador.cantidadDados = $('input').val();
		for (var i = 0; i < tiradorDados.cantidadDados; i++) {
			row += '<img src="images/dado1.png"> <br>' ;
			}
		$('.dados').html(row);

	});







})
