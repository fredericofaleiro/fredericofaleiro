// Crie um objeto chamado "pessoa" com as seguintes propriedades: nome, idade, cidade, cpf, pontuação e troféus (que deve ser um array de strings). Em seguida, imprima o nome da pessoa e o primeiro troféu da lista. Por fim, remova a propriedade "cpf" do objeto.

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    cpf: "123.456.789-00",
    pontuacao: 1000,
    trofeus: ["Campeão de Xadrez", "Vencedor do Campeonato de Corrida"],
}

console.log(pessoa.nome, pessoa.trofeus[0])

delete pessoa.cpf;

//Crie um objeto configuracoes com as propriedades de tema, notificacoes, idioma. Acesse tema usando notação de ponto. Acesse idiomausando notação de colchetes. Exiba os dois valores no console.

const configuracoes = {
    tema : "escuro",
    notificacoes : true,
    idioma : "português"
}

console.log(configuracoes.tema);
console.log(configuracoes["idioma"])
console.log(configuracoes.idioma)

//Você está criando um aplicativo de culinária que mostra receitas com seus ingredientes, tempo de preparo e instruções. Cada receita érepresentada por um objeto que contém uma lista de ingredientes armazenada como um array.

const receita = {
    nome: "Bolo de Chocolate",
    ingredientes: ["farinha", "açúcar", "cacau em pó", "ovos", "leite"],
    tempoPreparo: "45 minutos",
}
    
    console.log("ingrediente complementar: ", receita.ingredientes[0]);

//Você está desenvolvendo um sistema para uma locadora de carros. Cada veículo tem informações cadastradas, mas agora a empresa decidiuremover a informação do modelo antigo dos carros.

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    modeloAntigo: "Corolla 2015"
}

delete carro.modeloAntigo;
console.log(carro);

//Você está desenvolvendo um painel de monitoramento que exibe informações sobre dispositivos conectados à rede. Cada dispositivo érepresentado por um objeto, e todos estão organizados dentro de um array.

const dispositivos = [
    {nome: "Laptop", status: "conectado"},
    {nome: "Smartphone", status: "desconectado"},
    {nome: "Tablet", status: "conectado"}
]

for (let i = 0; i < dispositivos.length; i++) {
 console.log(`dispositivo: ${dispositivos[i].nome} | status: ${dispositivos[i].status}`);
}

//Você está desenvolvendo um sistema de controle de máquinas em uma fábrica. Cada máquina é representada por um objeto que, além dainformações básicas, também possui um método interno que exibe seu status.

const maquina = {
 nome: "Máquina de Embalagem",
 funcionando: true,
 exibirStatus() {
     if (this.funcionando) {
         console.log(`${this.nome} está funcionando normalmente.`);
     } else {
         console.log(`${this.nome} está com problemas.`);
     }
 }
}

maquina.exibirStatus()

//Imagine que você está desenvolvendo uma funcionalidade de importação de dados para uma empresa. Os dados chegam como um array dpares, onde cada par representa uma chave e seu respectivo valor, e você precisa transformar isso em um objeto estruturado, que serusado pelo sistema para preencher os campos automaticamente.

const dadosImportados = [
 ["nome", "Maria"],
 ["idade", 28],
 ["cidade", "Rio de Janeiro"],
 ["profissao", "Engenheira"]
]
       
 function criarobject() {
 objeto = {};
 for (let i = 0; i < dadosImportados.length; i++) {
 const chave = dadosImportados[i][0];
 const valor = dadosImportados[i][1];
     objeto[chave] = valor;
 }
 return objeto;
}

console.log(criarobject())

//Você foi a pessoa encarregada de desenvolver uma funcionalidade para o sistema de inspeções técnicas de uma fábrica. Cada máquininspecionada gera automaticamente um relatório de medições, contendo dados como temperatura, vibração, pressão e nível de ruídoEssas informações são organizadas dentro de um objeto, onde cada chave representa uma categoria avaliada e o valor representa nível registrado na inspeção.

const relatorio = {
    temperatura: 75,
    vibracao: 40,
    pressao: 55,
    nivelRuido: 30
};

console.log(`categorias avaliadas: ${Object.keys(relatorio)}`);
console.log(`níveis registrados: ${Object.values(relatorio)}`);

function detalhamento(obj) {
    for (const chave in obj) {
        let valor = obj[chave];
        if (valor > 50) {
            console.log(`${chave}: ${valor} - Atenção!`);
        } else {
            console.log(`${chave}: ${valor} - ok`);
        }
    }
}

console.log("");
console.log("detalhamento do relatório:");
detalhamento(relatorio)

//Você está desenvolvendo um sistema de manutenção preventiva para uma indústria. Cada máquina registra os meses em que passou por manutenção ao longo do ano, armazenando a quantidade de dias parados em um objeto, onde cada chave representa um mês e o valor representa os dias de inatividade.

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

function calcularDiasParados(obj) {
    let totalDiasParados = 0;
    for (const chave in obj) {
        totalDiasParados += obj[chave];
    }
    return totalDiasParados;
}

function analizarDiasManutencao(obj) {
    let mesesManutencao = 0;
    for (const chave in obj) {
        if (obj[chave] > 0) {
            mesesManutencao++;
        }
    }
    return mesesManutencao;
}

let diasParados = calcularDiasParados(manutencao);

function alerta(obj) {
    if (diasParados > 20) {
        console.log("Alerta: Total de dias parados excede o limite!");
    } else {
        console.log("Total de dias parados dentro do limite.");
    }
}

console.log(`total de dias parados: ${calcularDiasParados(manutencao)}`);
console.log(`meses com manutenção: ${analizarDiasManutencao(manutencao)}`);
console.log(alerta(manutencao))
