//calcula fatorial
const fatorial = function f(numb) {
  if (numb === 0 || numb === 1) return 1;
  return numb * f(numb - 1);
};

console.log(fatorial(8));

//calcula juros compostos
const jurosCompostos = (valor, juros, tempo) => {
  let taxaJuros = juros / 100 + 1;
  return valor * Math.pow(taxaJuros, tempo);
};

console.log(jurosCompostos(500, 15, 3));

//calcula desconto
const descontoProduto = (valor, porcentagem) => {
  let taxaDesconto = porcentagem / 100;
  return valor - taxaDesconto * valor;
};

console.log(descontoProduto(300, 10));

//calcula media
const media = (numb1, numb2) => (numb1 + numb2) / 2;

console.log(media(2, 4));

//verificar paridade

const verificarParidade = (numb) => {
   if (numb % 2 === 0) return "par";
   return "impar"
}

console.log(verificarParidade(1))

//processamento de um pedido

function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}

function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}

processarPedido("Julia", "comum", mensagemPersonalizada);

//calcular consumo

function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);

//sistema de sorteio interativo
const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
 
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
 
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
 
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
 
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];
 
realizarSorteio(participantes);