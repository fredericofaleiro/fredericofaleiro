let jachutados = [];
let numerosecreto = Math.floor(Math.random() * 50) + 1;
let numeroAleatorio = 0
console.log('++++++++++++++++++++++++++++++++++++++++++')
console.log('numero secreto:', numerosecreto)
console.log('++++++++++++++++++++++++++++++++++++++++++')
let i = 0;

do {
 numeroAleatorio = Math.floor(Math.random() * 50) + 1;

  if (jachutados.includes(numeroAleatorio)) {
    continue;
  } else {
    jachutados.push(numeroAleatorio);
    if (numeroAleatorio != numerosecreto) {
      console.log("testou:", numeroAleatorio);
      i++;
      console.log("tentativa:", i);
    } else {
      console.log("acertou o numerosecreto, que era:", numerosecreto);
      i++;
      console.log("em", i, "tentativas");
      break;
    }
  }
} while ((numeroAleatorio !== numerosecreto));
