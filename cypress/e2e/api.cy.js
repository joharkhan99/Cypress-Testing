describe("API Test Cases For json placeholder", () => {
  it("Making A Request to get all", () => {
    cy.request("https://jsonplaceholder.typicode.com/users/").should(
      (response) => {
        console.log(`All:`);
        console.log(response.body);
      }
    );
  });

  it("Get User Data By Id", () => {
    cy.request("https://jsonplaceholder.typicode.com/users/2").should(
      (response) => {
        console.log(`Single User:`);
        console.log(response.body);
      }
    );
  });
});
