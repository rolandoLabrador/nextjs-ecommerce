
describe("offer", () => {
    it ("passes",()=>{
        cy.visit("http://localhost:3000/");
        cy.get("[data-cy=sell]").click();
        cy.get("[data-cy=vin-input]").type("1HGCM82633A001234");




    });
    });