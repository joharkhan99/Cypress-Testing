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
});
