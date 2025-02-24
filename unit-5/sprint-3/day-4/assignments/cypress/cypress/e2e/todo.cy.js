/// <reference types="Cypress" />


describe("checking todos application",()=>{
    it("should have basic structure",()=>{
        cy.visit("http://example.cypress.io/todo")

        cy.get(".new-todo").should("exist")
        cy.get(".todo-count").should("exist")
        cy.get(".filters").should("exist")
        

    })
    it("the input form should be auto-focused ",()=>{
        cy.visit("http://example.cypress.io/todo")

        cy.get(".new-todo").focus()
        

    })
    it("the value should have be the same as the typed value",()=>{
        cy.visit("http://example.cypress.io/todo")

        cy.get(".new-todo").type("Learn Testing")
        

    })
    it("should able to add task ",()=>{
        cy.visit("http://example.cypress.io/todo")

        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("Learn React{enter}")
        cy.get(".new-todo").type("Learn Redux{enter}")
        cy.get(".new-todo").type("Learn Cypress{enter}")
        cy.get(".todo-list").children().should("have.length",5)
        

    })
    it("should able to increase length in footer ",()=>{
        cy.visit("http://example.cypress.io/todo")

    cy.get(".todo-count strong").should('have.text',2)


    cy.get(".new-todo").type("Learn React{enter}")
    cy.get(".todo-count strong").should("have.text",3)

        

    })

})