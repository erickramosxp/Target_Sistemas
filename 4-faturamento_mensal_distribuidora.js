

let estados = [
    {nome: "sp", valor: 67836.43, porcentagemDeVenda: 0},
    {nome: "rj", valor: 36678.66, porcentagemDeVenda: 0},
    {nome: "mg", valor: 29229.88, porcentagemDeVenda: 0},
    {nome: "es", valor: 27165.48, porcentagemDeVenda: 0},
    {nome: "outros", valor: 19849.53, porcentagemDeVenda: 0}
]

let total = 0;

for (let uf of estados) {
    total += uf.valor;
}

estados.forEach(estado => estado.porcentagemDeVenda =  parseFloat(((estado.valor / total) * 100).toFixed(2)));


console.log("O valor total de vendas foi de " + total);
estados.forEach(estado => {
    console.log("O estado " + estado.nome  + " vendeu cerca de " + estado.valor  + " representando " + estado.porcentagemDeVenda + "% das vendas");   
});

