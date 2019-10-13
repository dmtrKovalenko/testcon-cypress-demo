describe("Speakers", () => {
  beforeEach(() => {
    cy.visit("https://www.testcon.lt");
  });

  it.skip("displays counter value", () => {
    cy.contains("span.percent-value", "5", { timeout: 10000 });
  });
});
