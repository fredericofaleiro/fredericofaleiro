const frutas = ["uva", "maça", "pera", "laranja", "melancia"];
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
const despesas = [120, 80, 45.5, 200, 60];
const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];
const pedidos = ['camiseta', 'calça', 'tênis'];
const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

//treinar com array "frutas"
for (let i = 0; i < frutas.length; i++) {
  console.log("indice:", i);
  console.log(frutas[i]);
}

frutas.forEach((valor, indice) => {
  console.log("indice:", indice, valor);
});

//treinar com array numb
numb.forEach((valor) => {
  console.log("indice", valor);
});

const numerosPares = numb.filter((numb) => {
  return numb % 2 === 0;
});

const numerosImpares = numb.filter((numb) => {
  return numb % 2 !== 0;
});
console.log(numerosPares);
console.log(numerosImpares);

//treinar com array listadecompras
console.log("segundo item da lista:", listaDeCompras[1]);

function compra(array, valor) {
  array[array.length - 1] = valor;
}

compra(listaDeCompras, 'uva')
console.log(listaDeCompras)

//treinar com array despesas, somar os valores

let precototal1 = 0

for (let i=0; i < despesas.length; i++) {
  preco2 = despesas[i]
  precototal1 += preco2
}

console.log('despesa total:', precototal1);

//treinar com array estudantes

for (let i=0; i < estudantes.length; i++) {
  console.log('estudante:', estudantes[i])
}

//treinar com array pedidos

const pedidosCopia = pedidos.slice();
pedidosCopia.push('boné');

console.log(pedidos)
console.log(pedidosCopia)

//treinar com array livros

const livroprocurado = "O Cortiço"

if (livros.indexOf(livroprocurado) !== -1) {
  console.log(`O livro "${livroprocurado}" está disponível.`);
} else {
  console.log(`O livro "${livroprocurado}" não foi encontrado.`);
}

//treinar com array produtos

let relatorio = ''; 
let produtosMaisVendidos = ''; 
 
let totalPorProduto = ''; 
 
const maisLucrativo = { nome: '', totalVendas: 0 }; 

produtos.forEach(prod => {
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 

  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`;

  if (prod.quantidadeVendida > 100) { 
 
    produtosMaisVendidos += `${prod.nome}\n` 
 
  } 

  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`;

  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
 
    maisLucrativo.nome = prod.nome; 
 
    maisLucrativo.totalVendas = totalVendidoProduto; 
 
  }

})

console.log('Relatório de produtos vendidos:'); 
 
console.log(relatorio); 
 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
 
console.log(produtosMaisVendidos); 
 
console.log('Total de vendas por produto:'); 
 
console.log(totalPorProduto); 
 
console.log('Produto mais lucrativo:'); 
 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);