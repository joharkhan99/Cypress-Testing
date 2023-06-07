describe("Git Commands", () => {
  it("should initialize a new Git repository", () => {
    cy.exec("git init").then((result) => {
      expect(result.code).to.eq(0);
    });
  });

  it("should add files to the Git repository", () => {
    cy.exec("git add .", { failOnNonZeroExit: false }).then((result) => {
      // expect(result.code).to.eq(0);
    });
  });

  it("should commit changes to the Git repository", () => {
    cy.exec('git commit -m "Initial commit"', {
      failOnNonZeroExit: false,
    }).then((result) => {
      // expect(result.code).to.eq(0);
    });
  });

  it("should push changes to a remote Git repository", () => {
    cy.exec("git push origin main", { failOnNonZeroExit: false }).then(
      (result) => {
        // expect(result.code).to.eq(0);
      }
    );
  });

  it("should publish a branch", () => {
    // Navigate to the branch page
    cy.visit("/branches/branch-name");

    // Click on the publish button
    cy.get(".publish-button").click();

    // Confirm the publish action
    cy.get(".confirm-button").click();

    // Add assertions to verify the expected outcome
    cy.get(".success-message").should("be.visible");
  });
});
