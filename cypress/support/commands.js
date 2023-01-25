// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("creatCli",()=>{

    cy.visit('http://localhost:8080/Cliente/formulario');
    cy.get('[name="nome"]').type('João');
    cy.get('[name="cpf"]').type('75787329945');
    cy.get('[name="telefone"]').type('44997705124');
    cy.get('[name="endereco"]').type('rua');

    cy.get('[id="bot"]').click();


})