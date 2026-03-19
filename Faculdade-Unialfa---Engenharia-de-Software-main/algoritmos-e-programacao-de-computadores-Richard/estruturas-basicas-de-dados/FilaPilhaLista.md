# Estruturas de Dados

Este documento explica três estruturas básicas de dados utilizadas em programação:

- Fila
- Pilha
- Lista

---

# Fila (Queue)

Fila é um processo onde **o primeiro a entrar é o primeiro a sair**.

Isso segue o princípio **FIFO (First In, First Out)**.

## Exemplo

Fila inicial:


arthur - maria - julia


### Remover elemento

Remove o primeiro da fila:


maria - julia


### Adicionar elemento

Adicionar **richard** ao final da fila:


maria - julia - richard


### Índices


0 → maria
1 → julia
2 → richard


---

# Pilha (Stack)

Pilha é uma estrutura onde **o último a entrar é o primeiro a sair**.

Isso segue o princípio **LIFO (Last In, First Out)**.

## Exemplo

Pilha inicial:


arthur
fred
davi


Nesse caso:


Topo → davi


### Remover elemento

Ao remover um elemento da pilha, sai o **topo**:


arthur
fred


(davi foi removido)

### Adicionar elemento

Adicionar **richard** ao topo da pilha:


arthur
fred
richard


Agora o topo é:


richard


---

# Lista

Lista é uma estrutura diferente da fila e da pilha, pois o usuário pode **adicionar ou remover elementos em qualquer posição**.

## Exemplo

Lista inicial:


arthur, fred, richard


### Adicionar elemento

Adicionar **ana após arthur**:


arthur, ana, fred, richard


### Remover elemento

Remover **fred**:


arthur, ana, richard


---

# Resumo

| Estrutura | Funcionamento |
|-----------|--------------|
| Fila | Primeiro entra, primeiro sai (FIFO) |
| Pilha | Último entra, primeiro sai (LIFO) |
| Lista | Inserção e remoção em qualquer posição |

---