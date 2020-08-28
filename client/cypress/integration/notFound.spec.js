describe("the not found page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/bluewave");
  });

  it("displays the not found page and allows user to nav home", () => {
    cy.get('[data-cy="notFound"]');
    cy.get('[data-cy="navHome"]').click();
    cy.location("pathname")
      .should("not.include", "bluewave")
      .should("to.equal", "/");
  });
});
