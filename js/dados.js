/**
 *
 */

var tiradorDados = function(){

	this.cantidadDados = 0;

	this.tirarDados = function(){
		var d = 0;
		for (var i = 0; i < this.cantidadDados; i++) {
			d = Math.floor((Math.random() * 6) + 1);
			$('img').each(function() {
					this.src="lala";
			})

		}
	}

}

$(function(){
	var tirador = new tiradorDados();

	$('#numeroDados').click(function(){
		var row = "";
		tirador.cantidadDados = $('input').val();
		for (var i = 0; i < tirador.cantidadDados; i++)
			row += '<img src="images/dado1.png">';

		$('.dados').html(row);

	});
$("#tirar").click(function(){
		tirador.tirarDados();
});





})
