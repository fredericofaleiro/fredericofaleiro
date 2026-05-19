// DATA FINAL: 22 de maio às 16:00
const dataFinal = new Date("2026-05-22T16:00:00").getTime();

const atualizarContagem = () => {

  const agora = new Date().getTime();

  const diferenca = dataFinal - agora;

  if(diferenca <= 0){

    document.getElementById("contador").innerHTML = `
      <div class="finalizado">
        A FAROFA COMEÇOU 🍻🔥
      </div>
    `;

    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutos = Math.floor(
    (diferenca % (1000 * 60 * 60)) / (1000 * 60)
  );

  const segundos = Math.floor(
    (diferenca % (1000 * 60)) / 1000
  );

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;

};

atualizarContagem();

setInterval(atualizarContagem, 1000);