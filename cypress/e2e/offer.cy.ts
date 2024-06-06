describe("offer", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/");

        cy.fixture('vin.json').then((vinData) => {
            const vin = vinData.VIN1;

            cy.get("[data-cy=sell]").click();
            cy.get('.input-bordered').type(vin);
            cy.get("[data-cy=sell_button]").click();
            cy.get("[data-cy=mileage]").type("10000");
            cy.get("[data-cy=sell_submit_button]").click();
            cy.get("[data-cy=retry_button]").click();

        });
    });
});
// Path: cypress/e2e/placeOrderWithoutLogin.cy.ts