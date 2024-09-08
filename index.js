const fs = require('fs');
const caminho = 'C:/Users/natan/OneDrive/Área de Trabalho/lendo arquivo csv com node/arquivo/aula1DadosV2.1.CSV';
const Periodo = require('./Periodo');
const Produto = require('./Produto');
let i;
let j;
let listaProd = [];
let listaPeriodos = [];
let p1;
let pr1;
let dado;

fs.readFile(caminho, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    // Divide o conteúdo do arquivo em linhas e obtém a primeira linha
    const linha = data.split('\n');
    const primeiraLinha = linha[0];
    console.log(primeiraLinha)
    let periodos = primeiraLinha.split(';');

    for (i = 1; i < periodos.length; i++) {
        pr1 = new Periodo();
        pr1.setPeriodo(periodos[i]);
        listaPeriodos.push(pr1);
    }
    for (i = 0; i < listaPeriodos.length; i++) {
        console.log(listaPeriodos[i].getPeriodo());
    }
    linha.shift()
    linha[1];

});

function tratarPreco(dado) {
    dado = dado.replace('R$', '').replace('.', '').replace(',', '.').trim();
    return dado;
}