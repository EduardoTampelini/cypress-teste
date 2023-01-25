const el = require('./elements').ELEMENTOS;

class Editar{
    acessarEditar(){
        cy.visit('http://localhost:8080/Cliente/lista');
    }
    clicarEditar(){
        cy.get(el.btnEdit).click();
    }
    preencherEdit(){
        cy.get(el.nome).clear();
        cy.get(el.nome).type('Sanji').should("have.value", 'Sanji');
        cy.get(el.endereco).type(' de asfalto').should("have.value", 'rua de asfalto');

        cy.get(el.btnSalv).click();
    }

}

export default new Editar();