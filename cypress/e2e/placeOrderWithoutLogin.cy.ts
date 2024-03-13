describe('place order without login', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  it('search for a cat', () => {
    cy.get('nav').contains(text).click();
    
  })


})