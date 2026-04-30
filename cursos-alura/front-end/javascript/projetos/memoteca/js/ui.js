import api from "./api.js"

const ui = {

  async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId)
    document.getElementById("pensamento-id").value = pensamento.id
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo
    document.getElementById("pensamento-autoria").value = pensamento.autoria

   },

    async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")
    const mensagemVazia = document.getElementById("mensagem-vazia");
    listaPensamentos.innerHTML = ""

    try {
      const pensamentos = await api.buscarPensamentos()
      if (pensamentos.length === 0) {
        mensagemVazia.style.display = "block";
      } else {
        mensagemVazia.style.display = "none";
        pensamentos.forEach(ui.adicionarPensamentoNaLista)
      }  
    }
    catch {
      alert('Erro ao renderizar pensamentos')
    }
  },

    adicionarPensamentoNaLista(pensamento) {
        const listaPensamentos = document.getElementById("lista-pensamentos")
        const li = document.createElement("li")
        li.setAttribute("data-id", pensamento.id)
        li.classList.add("li-pensamento")

        const imgAspas = document.createElement("img")
        imgAspas.src = "assets/imagens/aspas-azuis.png"
        imgAspas.alt = "Aspas azuis"
        imgAspas.classList.add("icone-aspas")

        const divConteudo = document.createElement("div")
        divConteudo.classList.add("pensamento-conteudo")
        divConteudo.textContent = pensamento.conteudo

        const divAutoria = document.createElement("div")
        divAutoria.classList.add("pensamento-autoria")
        divAutoria.textContent = pensamento.autoria

        const buttonEditar = document.createElement("button")
        buttonEditar.classList.add("botao-editar")
        buttonEditar.onclick = () => ui.preencherFormulario(pensamento.id)

        const iconeEditar = document.createElement("img")
        iconeEditar.src = "assets/imagens/icone-editar.png"
        iconeEditar.alt = "editar"
        buttonEditar.append(iconeEditar)

        const buttonExcluir = document.createElement("button")
        buttonExcluir.classList.add("botao-excluir")
        buttonExcluir.onclick = async () => {
            try {
                await api.excluirPensamento(pensamento.id)
                ui.renderizarPensamentos()
            } 
            catch {
                alert("erro ao excluir pensamento!!")
            }
        }

        const iconeExcluir = document.createElement("img")
        iconeExcluir.src = "assets/imagens/icone-excluir.png"
        iconeExcluir.alt = "excluir"
        buttonExcluir.append(iconeExcluir)

        const icones = document.createElement("div")
        icones.classList.add("icones")
        icones.append(buttonEditar, buttonExcluir)

        li.append(imgAspas, divConteudo, divAutoria, icones)
        listaPensamentos.appendChild(li)

        return li
    },

    limparFormulario() {
    document.getElementById("pensamento-form").reset();
    },
}
 



export default ui;