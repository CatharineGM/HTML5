var palavras = new Array();
palavras[0] = 'kaka';
palavras[1] = 'adrian';
palavras[2] = 'paulo';

var tentativas;

iniciar_jogo();

function iniciar_jogo(){
	var palavra = palavras[Math.floor(Math.random()*3)];
	var dicas = new Array();
	iniciar(palavra, dicas);
	tentativas = 3;
	while(tentativas > 0){
		var letra = prompt("Digite uma letra");
		forca(palavra, letra, dicas);
	}
	var restart = prompt('Deseja jogar novamente?');
		if(restart == 's'){
			iniciar_jogo();
		}else if(restart == 'n'){
			alert('tchau seu bosta');
		}else {
			alert('resposta invalida');
		}
}

function iniciar(palavra, dicas){
	var tam = palavra.length;
		console.log(tam);
		for (var i = 0; i < tam; i++) {
			dicas[i] = '_';
		}
		alert('Dica: ' + dicas.join(' ')+ '\n A palavra tem '+tam+' letras');	
}
function forca(palavra, letra, dicas) {
		if (letra.trim().length == 0 || letra.trim().length > 1){
			alert("invalido");
			return;
		}
		var tam = palavra.length;
		var pos = palavra.indexOf(letra);
		if(pos == -1){
			alert("Incorreto!");
			tentativas = tentativas - 1;
			alert("Voce tem "+tentativas+ " tentativas");
		} else{
			while(pos != -1){
				dicas[pos] = letra;
  				pos = palavra.indexOf(letra, pos + 1);
			}
			alert("Acertou!");

		}
		alert('Dica: ' + dicas.join(' '));
		if(palavra == dicas.join('')){
			alert('voce ganhou!!');
			tentativas = 0;
		} return;
	}
