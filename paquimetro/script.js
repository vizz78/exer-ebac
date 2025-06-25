class Parquimetro {
    constructor() {
        this.tabelaPrecos = [
            { tempo: 120, preco: 3.00 },
            { tempo: 60,  preco: 1.75 },
            { tempo: 30,  preco: 1.00 }
        ];
    }

    calcularTempo(valorInserido) {
        for (let item of this.tabelaPrecos) {
            if (valorInserido >= item.preco) {
                const troco = valorInserido - item.preco;
                return {
                    tempo: item.tempo,
                    troco: troco.toFixed(2)
                };
            }
        }

        return {
            tempo: 0,
            troco: valorInserido.toFixed(2)
        };
    }
}

function simular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const resultadoElemento = document.getElementById("resultado");
    const parquimetro = new Parquimetro();

    
    if (isNaN(valor) || valor <= 0) {
        resultadoElemento.textContent = "Por favor, insira um valor válido.";
        return;
    }

    const resultado = parquimetro.calcularTempo(valor);

    if (resultado.tempo === 0) {
        resultadoElemento.textContent = `Valor insuficiente. Troco: R$ ${resultado.troco}`;
    } else {
        resultadoElemento.textContent = `Tempo: ${resultado.tempo} minutos | Troco: R$ ${resultado.troco}`;
    }
}




