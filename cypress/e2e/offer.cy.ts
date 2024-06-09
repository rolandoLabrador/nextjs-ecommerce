// Option 1: Named Imports (try this first)
import { generateVIN, validateVIN } from 'vin-generator';

// Option 2: Default Import with Named Exports (uncomment if Option 1 fails)
// import vinGenerator from 'vin-generator';
// const generateVIN = vinGenerator.generateVIN;
// const validateVIN = vinGenerator.validateVIN;

// Option 3: CommonJS Import Syntax (uncomment if Option 1 and 2 fail)
// const vinGenerator = require('vin-generator');
// const generateVIN = vinGenerator.generateVIN;
// const validateVIN = vinGenerator.validateVIN;

describe('VIN Generator Test', () => {
  it("passes", () => {
    // Generate a VIN
    const vin = generateVIN();
    
    // Optional: Validate the generated VIN
    const isValid = validateVIN(vin);
    expect(isValid).to.be.true;

    cy.visit("http://localhost:3000/");

    cy.get("[data-cy=sell]").click();
    cy.get('.input-bordered').type(vin);
    cy.get("[data-cy=sell_button]").click();
    cy.get("[data-cy=mileage]").type("10000");
    cy.get("[data-cy=sell_submit_button]").click();
    cy.get("[data-cy=retry_button]").click();
  });
});
