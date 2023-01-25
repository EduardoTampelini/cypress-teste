/// <reference types="cypress"/>
import Editar from '../support/pages/editar';
import Cadastro from '../support/pages/cadastro';


describe('tcc', () =>{
    it('cadastro de cliente',() =>{
        Cadastro.acessarCadastro();
        Cadastro.preencherCadastro();

    });

    it('editar',() =>{
        Editar.acessarEditar();
        Editar.clicarEditar();
        Editar.preencherEdit();
      
        
    });

    it('venda', () => {
        cy.visit('http://localhost:8080/Venda/formulario');
        cy.get('[name="cliente.id"]').select('1');
       cy.get('#data').type('2022-07-01');
        
    });

    
});

