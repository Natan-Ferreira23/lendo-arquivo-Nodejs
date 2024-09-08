const Periodo = require('./Periodo');
class Produto {
    constructor(nome, precoMedio, Periodo) {
        this.nome = nome;
        this.precoMedio = precoMedio;
        this.Periodo = Periodo;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPeriodo(Periodo) {
        this.Periodo = Periodo;
    }
    getPeriodo() {
        return this.Periodo;
    }
    setPrecoMedio(precoMedio) {
        this.precoMedio = precoMedio;
    }
    getPrecoMedio() {
        return this.precoMedio;
    }
}
module.exports = Produto;