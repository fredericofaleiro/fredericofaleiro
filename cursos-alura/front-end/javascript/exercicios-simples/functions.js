const fatorial = function f(numb) {
   if (numb === 0 || numb === 1) return 1;
   return numb * f(numb - 1)
}

console.log(fatorial(5))

const jurosCompostos = (valor, juros, tempo) => {
   let taxaJuros = juros/100 + 1;
   return valor * Math.pow(taxaJuros, tempo)
}

console.log(jurosCompostos(1000, 10, 2))

const descontoProduto = (valor, porcentagem) => {
   let taxaDesconto = porcentagem / 100
   return resultado = valor - (taxaDesconto * valor)
}

console.log(descontoProduto(120, 50))