describe("Speakers", () => {
  beforeEach(() => {
    cy.visit("https://www.testcon.lt/speakers/")
  })
  
  it("displays all speakers", () => {
    cy.contains("SPEAKERS LINE-UP");
    cy.get(".et_pb_row > .et_pb_column").should("have.length", 63);
  });
})