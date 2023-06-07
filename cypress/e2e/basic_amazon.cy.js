describe("Basic Test Cases For Amazon", () => {
  before(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.amazon.com/");
  });

  it("Basic Search", () => {
    cy.get("#twotabsearchtextbox").type("Samsung");
    cy.get("#nav-search-submit-button").click();
  });

  it("Slow Search", () => {
    cy.get("#twotabsearchtextbox").type("Furniture", { delay: 1000 });
    cy.get("#nav-search-submit-button").click();
  });

  it("Hamburger Menu", () => {
    cy.get("#nav-hamburger-menu").click();
    cy.get(".hmenu-close-icon").click();
  });

  it("Shop By Department", () => {
    cy.get("#nav-hamburger-menu").click();
    cy.contains("li", "Electronics").click();
    cy.contains("Cell Phones & Accessories").click();
  });

  it.only("Javascript In Search Box", () => {
    cy.get("#twotabsearchtextbox").type("<script>alert('hello')</script>");
    cy.get("#nav-search-submit-button").click();
  });

  it("HTML In Search Box", () => {
    cy.get("#twotabsearchtextbox").type("<h1>This is H1 tag</h1>");
    cy.get("#nav-search-submit-button").click();
  });

  it("Focus On Search Box", () => {
    cy.get("#twotabsearchtextbox").focus();
  });

  it("Blur Search Box", () => {
    cy.get("#twotabsearchtextbox").type("About to blur this element").blur();
  });

  it("Text Clear", () => {
    cy.get("#twotabsearchtextbox").type("About to clear this text").clear();
  });

  it("Load Correctly", () => {
    cy.visit("https://www.amazon.com/");
    cy.get("#nav-main").should("be.visible");
    cy.get("#navFooter").should("be.visible");
  });

  it("Right Click", () => {
    cy.get("#nav-xshop").rightclick();
  });

  it("Scrolling", () => {
    cy.scrollTo("bottom", { easing: "linear" });
    cy.scrollTo("top", { duration: 2000 });
  });

  it("Scrolling To A Specific Element", () => {
    cy.get("#nav-swmslot").click();
    cy.contains("h4", "Discount").scrollIntoView().should("be.visible");
  });
});
