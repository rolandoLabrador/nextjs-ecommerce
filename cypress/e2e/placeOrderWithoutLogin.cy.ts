describe("place order without login", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });

  it("search for a cat", () => {
    cy.get('div[data-cy="searchMainpage"] input[type="search"]', { timeout: 10000 }).type("your search text");




  });
});