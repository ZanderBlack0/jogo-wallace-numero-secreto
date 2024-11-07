// document.querySelector para selecionar alguma linha no HTML
// let titulo = document.querySelector('h1');
// let subTitulo = document.querySelector('p');
//    titulo.innerHTML = 'Jogo do número Secreto';
//    subTitulo.innerHTML = 'Escolha um numero de 1 a 10';
// vamos usar uma função para que o botão funcione  
let listaDeNumeroSorteado = [];
let limiteDaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    function exibirTextoNaTela(tag, texto){
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.0});
    }
	
    function exibirTextoInicial() {
        exibirTextoNaTela('h1', 'Jogo do número Secreto');
        exibirTextoNaTela('p', `Escolha um numero de 1 a ${limiteDaLista}`);
    }
    // ativando a função:
        exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value


    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', "Número Correto! 😯");
        
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!👏';
        exibirTextoNaTela('p',  `Meus parabéns! Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

            } else{
                if(chute > numeroSecreto){
                    exibirTextoNaTela('p', "O número Secreto é menor");
             }   else{
                      exibirTextoNaTela('p', "O número Secreto é maior");
                   }
                   limparCampo();
                } tentativas++
            // ativando a função:

                
                                }
                            


function gerarNumeroAleatorio() {
    
    let numeroEscolhido = parseInt(Math.random()* limiteDaLista +1);
        let quantidadeDeNumerosLista = listaDeNumeroSorteado;

    if(limiteDaLista == listaDeNumeroSorteado.length){
        listaDeNumeroSorteado = [];
    };

        if(listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }        else{
                listaDeNumeroSorteado.push(numeroEscolhido);
                return numeroEscolhido;
        }

    }



function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
       numeroSecreto = gerarNumeroAleatorio();
       limparCampo();
       tentativas = 1
       exibirTextoInicial();
       document.getElementById('reiniciar').setAttribute('disabled', true);
}
