const inputSuperior = document.querySelector("#texto-superior");
const inputInferior = document.querySelector("#texto-inferior");

function btnEncriptar(){
	const textoEncriptado = encriptar(inputSuperior.value);
	inputInferior.value = textoEncriptado;
}

function encriptar(textoParaEncriptar){

	let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	textoParaEncriptar = textoParaEncriptar.toLowerCase();
	for (var i = 0; i < matrizCodigo.length; i++) {
	
		if (textoParaEncriptar.includes(matrizCodigo[i][0])) {

			textoParaEncriptar = textoParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

		}

	}
	return textoParaEncriptar;
}

function btnDesencriptar(){
	const textoDesencriptado = desencriptar(inputInferior.value);
	inputSuperior.value = textoDesencriptado;
}

function desencriptar(textoParaDesencriptar){

	let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
	textoParaDesencriptar = textoParaDesencriptar.toLowerCase();
	for (var i = 0; i < matrizCodigo.length; i++){

		if (textoParaDesencriptar.includes(matrizCodigo[i][0])) {

			textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
		}
	}
	return textoParaDesencriptar;
}


function btnCopiarSuperior(){

	inputSuperior.select();
	document.execCommand('copy');

	alert("El texto ha sido copiado!");

}

function btnCopiarInferior(){

	inputInferior.select();
	document.execCommand('copy');

	alert("El texto ha sido copiado!");

}