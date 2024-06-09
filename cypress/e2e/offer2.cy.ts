it("passes", () => {
    cy.visit("http://localhost:3000/");

    cy.fixture('vin.json').then((vinData) => {
        // Loop through each VIN in the JSON file
        Object.keys(vinData).forEach((vinKey) => {
            const vin = vinData[vinKey];

            
            cy.get("[data-cy=sell]").click();
            cy.get('.input-bordered').type(vin);
            cy.get("[data-cy=sell_button]").click();
            cy.get("[data-cy=mileage]").type("10000");
            cy.get("[data-cy=sell_submit_button]").click();
            cy.get("[data-cy=retry_button]").click();

            // Optional: Add assertions or further test steps if needed
        });
    });
});
