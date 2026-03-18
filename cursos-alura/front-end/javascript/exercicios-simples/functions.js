//calcula fatorial
const fatorial = function f(numb) {
  if (numb === 0 || numb === 1) return 1;
  return numb * f(numb - 1);
};

console.log(fatorial(5));

//calcula juros compostos
const jurosCompostos = (valor, juros, tempo) => {
  let taxaJuros = juros / 100 + 1;
  return valor * Math.pow(taxaJuros, tempo);
};

console.log(jurosCompostos(1000, 10, 2));

//calcula desconto
const descontoProduto = (valor, porcentagem) => {
  let taxaDesconto = porcentagem / 100;
  return valor - taxaDesconto * valor;
};

console.log(descontoProduto(120, 50));

//calcula media
const media = (numb1, numb2) => (numb1 + numb2) / 2;

console.log(media(2, 4));

//verificar paridade
const verificarParidade = (numb) => {
   if (numb % 2 === 0) return "par";
   return "impar"
}

console.log(verificarParidade(1))