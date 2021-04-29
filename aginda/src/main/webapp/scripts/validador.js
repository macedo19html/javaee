/**
 * validar campos obrigatoris 
 * @author Aluno  João macedo
 */

function validar(){
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === ""){
		alert('Preencha o campo Nome')
		frmContato.fone.focus()
		return false
	}else if (fone === ""){
		alert('Preencha o campo Fone')
		return false
	}else{
		document.forms["frmContato"].submit();
	}
}