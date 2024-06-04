describe("offer", () => {
    it("passes", () => {
        cy.visit("http://localhost:3000/");

        cy.fixture('vin.json').then((vinData) => {
            const vin = vinData.VIN1;

            cy.get("[data-cy=sell]").click();
            cy.get('.input-bordered').type(vin);
            cy.get("[data-cy=sell_button]").click();
        });
    });
});
