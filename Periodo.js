class Periodo {
    constructor(periodo) {
        this.periodo = periodo;
        this.preco = [];
    }

    adicionarPreco(preco) {
        this.preco.push(preco);
    }

    setPreco(preco) {
        this.preco = preco;
    }

    getPreco() {
        return this.preco;
    }

    setPeriodo(periodo) {
        this.periodo = periodo;
    }

    getPeriodo() {
        return this.periodo;
    }

    percorre() {
        console.log(`Período: ${this.periodo}`);
        for (let i = 0; i < this.preco.length; i++) {
            console.log(`Preço ${i + 1}: ${this.preco[i]}`);
        }
    }
}

module.exports = Periodo;
