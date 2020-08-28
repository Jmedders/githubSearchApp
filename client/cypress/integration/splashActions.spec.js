describe("the form actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("allows user to type enter input in the search element", () => {
    cy.get("[data-cy=input]").type("react").should("have.value", "react");
  });

  it("allows user to utilize language filter", () => {
    cy.get("[data-cy=filter]")
      .select("typescript")
      .should("have.value", "typescript");
  });
  it("allows user to utilize sort dropdown", () => {
    cy.get("[data-cy=sort]")
      .should("have.value", "relevance")
      .select("stars")
      .should("have.value", "stars");
  });
});
