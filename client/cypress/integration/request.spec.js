describe("the request", () => {
  it("makes a request and returns results", () => {
    cy.request({
      url: "http://localhost:5000",
      qs: {
        repositoryName: "blue",
        sortBy: "relevance",
      },
    }).then((res) => {
      expect(res.body).to.have.property("response");
      expect(res.body.response).to.have.property("items");
      expect(res.body.response.items).to.be.an("array");
      expect(res.body.response.items).to.have.length(30);
    });
  });
  it("sorts by stars", () => {
    cy.request({
      url: "http://localhost:5000",
      qs: {
        repositoryName: "red",
        sortBy: "stars",
      },
    }).then((res) => {
      expect(res.body).to.have.property("response");
      expect(res.body.response.items[0]["stargazers_count"]).to.be.greaterThan(
        res.body.response.items[1]["stargazers_count"]
      );
    });
  });
});
