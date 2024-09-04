import fs from 'fs/promises';

const dataLoad = async (path) => {
    try {
        const data = await fs.readFile(path);
        const jsonData = JSON.parse(data);
        return (jsonData);
    } catch (err) {
        console.error("Não foi possivel resgatar os dados");
    }
}

let dados = await dataLoad('dados.json');

let menorValorMensal = dados[0];
let maiorValorMensal = dados[0];
let vendaTotal = 0;
let dias = 0;

for (let dia in dados) {
    if (dados[dia].valor > maiorValorMensal.valor)
        maiorValorMensal = dados[dia];
    if (dados[dia].valor > 0 && (dados[dia].valor < menorValorMensal.valor))
        menorValorMensal = dados[dia];
    if (dados[dia].valor > 0) {
        vendaTotal += dados[dia].valor;
        dias++;
    }
}

let mediaFaturamento = vendaTotal / dias;
let diasFatuMaiorMedia = 0;

for (let dia in dados) {
    if (dados[dia].valor > mediaFaturamento) {
        diasFatuMaiorMedia++;
    }
}

console.log("O menor valor de faturamento ocorrido foi no dia " + menorValorMensal.dia + " com o valor de " + (menorValorMensal.valor).toFixed(2));

console.log("O maior valor de faturamento ocorrido foi no dia " + maiorValorMensal.dia + " com o valor de " + (maiorValorMensal.valor).toFixed(2));

console.log("O número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi de " +  diasFatuMaiorMedia + " dias.");
