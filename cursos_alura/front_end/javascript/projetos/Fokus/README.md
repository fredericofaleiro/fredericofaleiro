# Fokus ⏳

Aplicação web inspirada na técnica Pomodoro para auxiliar no foco e produtividade durante os estudos ou trabalho.

O projeto permite:

* iniciar ciclos de foco e descanso
* adicionar tarefas
* editar tarefas
* concluir tarefas automaticamente
* remover tarefas
* salvar dados no navegador com LocalStorage
* tocar música ambiente durante o foco

---

## 🚀 Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* LocalStorage API
* Manipulação de DOM
* Eventos personalizados (CustomEvent)

---

## 🎯 Funcionalidades

### ⏱ Timer Pomodoro

* Modo foco: 25 minutos
* Descanso curto: 5 minutos
* Descanso longo: 15 minutos
* Contagem regressiva dinâmica
* Sons ao iniciar, pausar e finalizar

### ✅ Gerenciamento de tarefas

* Criar tarefas
* Editar tarefas
* Selecionar tarefa ativa
* Marcar tarefa como concluída automaticamente ao finalizar o foco
* Remover tarefas concluídas
* Remover todas as tarefas

### 💾 Persistência de dados

As tarefas ficam salvas no navegador usando `localStorage`, mantendo os dados mesmo após fechar a página.

### 🎵 Música ambiente

O usuário pode ativar/desativar música de fundo durante o foco.

### 📱 Responsividade

Interface adaptada para:

* Desktop
* Tablet
* Mobile

---

## 📚 Conceitos praticados

Durante o desenvolvimento foram utilizados conceitos importantes de JavaScript moderno:

* `querySelector`
* `addEventListener`
* `classList`
* `createElement`
* `append`
* `forEach`
* `filter`
* `localStorage`
* `JSON.parse`
* `JSON.stringify`
* `setInterval`
* `CustomEvent`
* manipulação dinâmica do DOM

---

## 🖼 Interface

O projeto possui interface moderna inspirada em aplicações de produtividade, utilizando:

* gradientes
* variáveis CSS
* flexbox
* efeitos visuais dinâmicos
* troca de contexto visual entre foco e descanso

---

## 📂 Estrutura do projeto

```bash
📦 fokus
 ┣ 📂 imagens
 ┣ 📂 sons
 ┣ 📜 index.html
 ┣ 📜 styles.css
 ┣ 📜 script.js
 ┗ 📜 script-crud.js
```

---

## ▶ Como executar

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Abra a pasta do projeto

3. Execute o `index.html` no navegador

---

## 🔥 Melhorias futuras

* adicionar tempo customizado
* dark/light mode
* drag and drop nas tarefas
* estatísticas de produtividade
* integração com backend
* login de usuários
* notificações do navegador

---

## 👨‍💻 Autor

Desenvolvido por Frederico.
