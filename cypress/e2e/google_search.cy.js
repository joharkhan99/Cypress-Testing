describe("Google home page", function () {
  it("Google Search for Images", () => {
    cy.visit("https://www.google.com");
    cy.get("#APjFqb").type("is Testing boring?");
    cy.contains("Google Search").click();
    cy.contains("Images").click();
  });
});
