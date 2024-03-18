// Disable automatic failure on uncaught errors
Cypress.on("uncaught:exception", (err, runnable) => {
  // Returning false here prevents Cypress from failing the test
  return false;
});

describe("place order without login", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=searchMainpage1]").type("cat snack");
    cy.get("[data-cy=searchMainpagebutton]").click();
    cy.get('a[href="/products/656e122ad30b0d714710a411"]').click();
    //cy.pause();
   // cy.wait(5000);
    cy.get(".btn-primary.btn").click({ multiple: true, force: true }); // Multiple : true tells cypress to click on all matched elemetns one by one. force: true tells cypress to click on the element even if it is not visible
    //cy.pause();
     cy.wait(2000);
    // cy.get('.indicator').click();

    //cy.pause();
  });
});
