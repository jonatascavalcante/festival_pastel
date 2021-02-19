$(document).ready(function() {

	var $comandas = $('input[name="cor_comanda"]');
	var eh_comanda_azul = true;
	$("#pastel_preco").hide();

	$comandas.change(function() {
  			var $checked = $comandas.filter(function() {
    			return $(this).prop('checked');
  			});
  		if ($checked.val() === 'azul') {
  			eh_comanda_azul = true;
  		} else if ($checked.val() === 'branca'){
  			eh_comanda_azul = false;
  		}
	});

	$("#btnCalcular").click(function() {
		event.preventDefault();
		var total = calculaPrecoPasteis(eh_comanda_azul);
		total += calculaPrecoBebidas();

		$("#preco_final").html("Valor da Comanda: R$" + total.toFixed(2));
		$("#btnCalcular").hide();
		$("#pastel_preco").show();
	});	

	$("#btnNovoCalculo").click(function() {
		location.reload();
	});	
});


function calculaPrecoPasteis(eh_comanda_azul)
{
	var qtd_pastel_carne = 0;
	var qtd_pastel_frango = 0;
	var qtd_pastel_presunto = 0;
	var qtd_pasteis = 0;
	var total = 0;

	if ($("#qtd_carne").val() !== "")
		qtd_pastel_carne = parseInt($("#qtd_carne").val());
	if ($("#qtd_frango").val() !== "")
		qtd_pastel_frango = parseInt($("#qtd_frango").val());
	if ($("#qtd_presunto").val() !== "")
		qtd_pastel_presunto = parseInt($("#qtd_presunto").val());

	var qtd_pasteis = qtd_pastel_carne + qtd_pastel_frango + qtd_pastel_presunto;

	if (qtd_pasteis == 0)
		return 0;
	
	if (eh_comanda_azul)
		total = 20 + (qtd_pasteis - 3)*7.5;
	else
		total = qtd_pasteis*7.5;

	return total;
}

function calculaPrecoBebidas()
{
	var copos_refri_200ml = 0;
	var garrafas_2l = 0;
	var copos_suco_200ml = 0;
	var caixas_1l = 0;
	var total = 0;

	if ($("#qtd_copo_refri_200ml").val() !== "")
		copos_refri_200ml = parseInt($("#qtd_copo_refri_200ml").val());
	if ($("#qtd_garrafa_2l").val() !== "")
		garrafas_2l = parseInt($("#qtd_garrafa_2l").val());
	if ($("#qtd_copos_suco_200ml").val() !== "")
		copos_suco_200ml = parseInt($("#qtd_copos_suco_200ml").val());
	if ($("#qtd_caixa_1l").val() !== "")
		caixas_1l = parseInt($("#qtd_caixa_1l").val());

	total = copos_refri_200ml + copos_suco_200ml + 5.5*caixas_1l + 8*garrafas_2l;

	return total;
}

