describe("Visual regression", () => {
  it("Shows main page", () => {
    cy.visit("https://www.testcon.lt/")
    cy.percySnapshot('Main')
  })
})