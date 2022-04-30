/// <reference types="cypress" />

describe("Testing Homepage functionality", () => {
  beforeEach(() => {
    cy.visit('https://devstory-portal.herokuapp.com/')
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
  })

  it('Check the header links', () => {
    cy.get("div.header-brand > p > a").click()
    cy.url().then(value => {
      cy.log("Navigate to home page")
    })
  })

  // --- Temporary Implementation --- //
  // Login Page
  it('Navigation Buttons - Login', () => {
    cy.contains("Login!").click()
    cy.url().should('include', '/login')
    cy.go('back')
  })

  // Signup page
  it('Navigate Buttons - Signup', () => {
    cy.contains("SignUp!").click()
    cy.url().should('include', '/signup')
    cy.go('back')
  })
})