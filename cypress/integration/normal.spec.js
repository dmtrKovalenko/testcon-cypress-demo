describe("Counters", () => {
  beforeEach(() => {
    cy.visit("https://www.bigdataconference.lt/")
  });

  it.skip('displays counter value', () => {
    cy.contains('span.percent-value', '800', { timeout: 10000 })
  })
});
