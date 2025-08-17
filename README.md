# Cypress Lessons

Repositório dedicado a **testes E2E** usando **Cypress**. O objetivo é praticar e aprender automação de testes em um site externo. 

---

## Tecnologias

- [Cypress](https://www.cypress.io/) – Framework de testes end-to-end para aplicações web.

---

## Estrutura do projeto

cypress-lessons/
├── cypress/
│ ├── e2e/ # Testes E2E
│ ├── fixtures/ # Dados de teste
│ └── support/ # Comandos customizados e configuração
├── cypress.config.js # Configuração do Cypress
└── package.json




> Observação: Este projeto é focado apenas em Cypress. Não possui backend ou frontend próprios, os testes são realizados em um site externo.

---

## Como rodar os testes

1. Clone o repositório:

git clone https://github.com/seu-usuario/cypress-lessons.git
cd cypress-lessons

2. Instale as dependências:
npm install

3. Abra o Cypress:
   npx cypress open



## Estrutura dos testes

Os testes estão organizados dentro da pasta cypress/e2e.

Cada arquivo representa um cenário ou funcionalidade do site externo que está sendo testado.

É possível criar comandos customizados dentro de cypress/support/commands.js.

