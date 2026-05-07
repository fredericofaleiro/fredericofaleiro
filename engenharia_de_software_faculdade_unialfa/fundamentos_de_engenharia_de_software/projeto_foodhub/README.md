# 🍽️ foodhub

Sistema completo de gerenciamento para restaurantes, com foco em centralização de pedidos, controle administrativo e personalização da interface.

---

## 🚀 Sobre o projeto

O foodhub é um sistema desenvolvido para auxiliar restaurantes no controle de suas operações diárias, integrando pedidos, estoque, financeiro e funcionários em uma única plataforma.

O grande diferencial do sistema é sua **interface dinâmica e temática**, que se adapta ao estilo do restaurante, proporcionando uma experiência única para cada cliente.

---

## ✨ Funcionalidades

### 👤 Cliente
- Realizar pedidos
- Visualizar cardápio
- Acompanhar status do pedido
- Efetuar pagamento

---

### 🧑‍💼 Administrador
- Criar, editar e cancelar pedidos
- Atualizar status dos pedidos
- Gerenciar funcionários
- Aplicar descontos
- Visualizar relatórios
- Gerenciar estoque
- Acompanhar financeiro

---

### 📦 Pedidos
- Cadastro de pedidos
- Itens detalhados (produto, quantidade, valor)
- Status (Recebido, Preparando, Pronto, Entregue)
- Origem do pedido:
  - WhatsApp
  - Balcão
  - Delivery (apps)
  - Online

---

### 🧾 Pagamento
- Associado ao pedido
- Controle de status (pago, pendente)
- Registro automático no financeiro

---

### 📊 Financeiro
- Controle de lucro
- Registro de receitas e despesas
- Relatórios financeiros

---

### 📦 Estoque
- Controle de produtos
- Quantidade disponível
- Atualização automática com base nos pedidos

---

## 🎨 Diferencial do sistema

- Interface **personalizável e temática**
- Exemplo:
  - Restaurante de anime → tema estilizado
  - Restaurante gourmet → layout sofisticado

Isso permite que cada restaurante tenha uma identidade visual única dentro do sistema.

---

## 🏗️ Estrutura do sistema

O sistema é dividido em:
/frontend → Interface do usuário
/backend → Lógica de negócio e API
/docs → Documentação (diagramas, PDF, etc)


---

## 🧠 Modelagem do sistema

### Entidades principais:
- Usuário
- Cliente
- Funcionário
- Administrador
- Pedido
- Item do Pedido
- Produto
- Pagamento
- Estoque
- Financeiro

---

## 🔗 Relacionamentos

- Cliente → realiza → Pedido  
- Pedido → possui → Itens do Pedido  
- Item do Pedido → referencia → Produto  
- Pedido → possui → Pagamento  
- Produto → pertence → Estoque  

---

## 🛠️ Tecnologias (ajusta depois se quiser)

- Frontend: React + Vite + TailwindCSS
- Backend: Node.js / Java (dependendo do que usar)
- Banco de dados: (MySQL, PostgreSQL, etc)

---

## 📌 Objetivo

Facilitar a gestão de restaurantes, centralizando todas as operações em um único sistema, aumentando a eficiência e reduzindo erros operacionais.

---

## 📷 Protótipo

(Opcional: coloca print do Figma aqui depois)

---

## 📄 Documentação

O projeto conta com:
- Diagrama de casos de uso
- Modelagem UML
- Documentação em PDF

---

## 👨‍💻 Autor

Desenvolvido por Frederico 🚀

---

## 📢 Observações

Este projeto foi desenvolvido para fins acadêmicos e pode ser expandido futuramente com novas funcionalidades como:
- Inteligência de dados
- Recomendações automáticas
- Integração com APIs externas

