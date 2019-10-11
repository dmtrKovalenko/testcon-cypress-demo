describe("Visual regression", () => {
  it("Shows speakers page", () => {
    cy.visit("https://www.testcon.lt/speakers/")
    cy.percySnapshot('Speakers')
  })

  it("Shows main page", () => {
    cy.visit("https://www.testcon.lt/")
    cy.percySnapshot('Main')
  })
})