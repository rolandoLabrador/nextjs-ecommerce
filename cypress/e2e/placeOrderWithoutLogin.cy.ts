
// Disable automatic failure on uncaught errors
Cypress.on('uncaught:exception', (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});


describe("place order without login", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy=searchMainpage1]').type('cat snack');
    cy.get('[data-cy=searchMainpagebutton]').click();
    cy.get('a[href="/products/656e122ad30b0d714710a411"]').click();
    cy.get('div.card-actions').invoke('removeAttr', 'style'); // Remove the 'style' attribute which sets 'visibility: hidden'
    cy.get('btn-primary brn').click({ force: true }); // Click on the button forcefully
    










  });

  
});