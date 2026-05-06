# Plano de Testes BDD + Automação Playwright

Projeto desenvolvido com foco em organização, rastreabilidade e automação de testes utilizando práticas de BDD (Behavior Driven Development).

O objetivo deste projeto é demonstrar a estruturação de cenários baseados em regras de negócio, automação E2E com Playwright e integração contínua com GitHub Actions.

---

## Tecnologias utilizadas

- Playwright
- JavaScript
- GitHub Actions
- Page Object Model (POM)
- BDD / Gherkin
- HTML Reports

---

## Estrutura do projeto

```bash
qa-bdd-plano-de-testes
│
├── .github/workflows
│   └── playwright.yml
│
├── data
│   └── checkoutData.js
│
├── pages
│   └── loginPage.js
│
├── tests
│   ├── checkout.spec.js
│   │
│   └── ui
│       └── login.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
