/**
 * confimação de exclusão de um contato
 * @author Aulo João Macedo
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("confirma a exclusão deste contato ?");
	if (resposta === true){
	window.location.href = "delete?idcon=" + idcon
	}
}