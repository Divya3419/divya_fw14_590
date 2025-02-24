/// <reference types="Cypress" />

describe("checking counter ",()=>{
// beforeEach(()=>{
// cy.visit("http://localhost:3000")
// })
it("should exist in the document",()=>{
    cy.visit("http://localhost:3000")
    cy.get("h1").should("exist")
    cy.get(".inc_button").should("exist")
    cy.get(".dec_button").should("exist")


})


it("should increment",()=>{
    cy.visit("http://localhost:3000")
    cy.get("h1").should("have.text","count is 0")
    cy.get(".inc_button").click()
    cy.get("h1").should("have.text","count is 1")
})

it("should multi increment",()=>{
    cy.visit("http://localhost:3000")
    cy.get("h1").should("have.text","count is 0")
    cy.get(".inc_button").click()
    cy.get(".inc_button").click()
    cy.get(".inc_button").click()
    cy.get(".inc_button").click()
    cy.get("h1").should("have.text","count is 4")
})


})