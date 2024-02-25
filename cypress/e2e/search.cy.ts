/// <reference types="cypress" />


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.clickNavBuy('BUY'); // Using the custom command to click on an element containing 'BUY'
    cy.clickNavBuy('SELL');
    cy.clickNavBuy('FINANCE');
    cy.clickNavBuy('ABOUT');
    cy.clickNavBuy('HELP');
    cy.get('.indicator').click();
    cy.get('.card-actions').click();
    
  })
})