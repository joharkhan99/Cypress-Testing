describe("Advance Test Cases For Amazon", () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.amazon.com/");
  });

  it("Remove Logo", () => {
    cy.get("#nav-logo-sprites")
      .invoke("attr", "style", "display: none")
      .should("have.attr", "style", "display: none");
  });

  it("Clear Cookies", () => {
    cy.clearCookies();
  });

  it("Traverse Browser History", () => {
    cy.go(-1);
    cy.go(1);
  });
});
