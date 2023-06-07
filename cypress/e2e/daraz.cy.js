DarazTestSuite: before(() => {
  cy.viewport(1920, 1080);
  cy.visit("https://www.daraz.pk/");
});

// it("search using the expect function", () => {
//   cy.get("#q").type("Computers");
//   cy.get(".search-box__button--1oH7").click();
// });

// it("search changing filter", () => {
//   cy.get("#q").type("Computers");
//   cy.get(".search-box__button--1oH7").click();

//   cy.get(".icon-list").click();
//   cy.get(".ant-select-selection__rendered").click();
//   cy.contains("Price low to high").click();
// });

it("Trying Fixtures to Login", () => {
  cy.get("#anonLogin > .grey").click();
  cy.fixture("credentials.json").then((credentials) => {
    cy.get('[placeholder = "Please enter your Phone Number or Email"]').type(
      credentials.email
    );
    cy.get('[placeholder = "Please enter your password"]').type(
      credentials.password
    );
    cy.contains("LOGIN").click();
  });
});

describe("Add to Cart", () => {
  it("should add a product to the cart", () => {
    cy.wait(6000);
    cy.visit("https://www.daraz.pk/");

    cy.get("#q").type("shirt");
    cy.get(".search-box__button--1oH7").click();
    cy.get(".box--pRqdD").first().click();
    cy.wait(6000);
    cy.get(".pdp-button_theme_orange").click();
    // cy.get(".sc-AykKC").should("contain", "Product Name");
  });
});
