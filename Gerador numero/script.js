
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 5;

function testeNumero(){
    const chute = parseInt(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");

    if (isNaN(chute) || chute < 1 || chute > 100) {
        mensagem.textContent = "Numero invalido! Digite um numero entre 1 e 100!";
        return
    }

    if (tentativasRestantes <= 0) {
        mensagem.textContent = `Voçe perdeu, numero de tentativas acabou! o numero era: ${numeroSecreto}!`;
        return;
        
    }

tentativasRestantes = tentativasRestantes - 1;

if (chute === numeroSecreto) {
    mensagem.textContent = `Parabens! o numero era ${numeroSecreto}.`;
    
} else if (chute < numeroSecreto) {
    mensagem.textContent = `chute mais alto!`;
    
} else {
    mensagem.textContent = `Chute mais baixo!`
    
}

tentativas.textContent = `Tentativas restantes: ${tentativasRestantes}.`;

if (tentativasRestantes === 0) {
    mensagem.textContent =  `numero de tentativas acabou. O numero era ${numeroSecreto}.`;
    
}

}


