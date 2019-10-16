describe("Advanced", () => {
  context("Navigation", () => {
    before(() => {
      cy.visit("https://www.testcon.lt")
    })

    it("opens home page", () => {
      cy.contains("TestCon Europe 2019")
    })

    it("opens schedule page", () => {
      cy.contains("#top-menu a", "Schedule").click()
      cy.contains("h1", "Schedule")
    })

    it("opens confirmed talks", () => {
      cy.contains("#top-menu a", "Confirmed Talks").click()
      cy.contains("h1", "Confirmed Talks");

      [1, 2, 3, 4, 5].forEach((index) => {
        cy.get("a.page-numbers").eq(index - 1).click()
      })
    })
  })

  context("Feedback", () => {
    before(() => {
      cy.server()
      cy.visit("https://www.testcon.lt/contact-us/")
    })  

    it("Shows validation errors", () => {
      cy.get("#wpforms-submit-130395").click()
      cy.get("label.wpforms-error").should("have.length", 3)
    })

    it("Sends feedback", () => {
      cy.get("#wpforms-130395-field_0").type("Dmitriy")
      cy.get("#wpforms-130395-field_1").type("me@cypress.io")
      cy.get("#wpforms-130395-field_2").type("This conference is awesome")
    })
  }) 
})