const el = require('./elements').CADASTRAR;
class Cadastro{
    acessarCadastro(){
        cy.visit('http://localhost:8080/Cliente/formulario');
    }
    preencherCadastro(){
        cy.get(el.nome).type('Lucas').should("not.have.value", 'Jão');
        cy.get(el.cpf).type('95280505900');
        cy.get(el.telefone).type('44997703438');
        cy.get(el.endereco).type('rua de pedra');

        cy.get(el.btnSalvar).click();

    }
}

export default new Cadastro();