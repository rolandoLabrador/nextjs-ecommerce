/// <reference types="cypress" />


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').contains('BUY').click();
    cy.get('nav').contains('SELL').click();
    cy.get('nav').contains('FINANCE').click();
    cy.get('nav').contains('ABOUT').click();
    cy.get('nav').contains('HELP').click();
    cy.get('.indicator').click();
    cy.get('.card-actions').click();
    
  })
})