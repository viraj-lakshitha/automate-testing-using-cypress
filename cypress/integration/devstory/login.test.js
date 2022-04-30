/// <reference types="cypress" />

describe('Test Login Functionality', () => {
  beforeEach(() => {
    // Navigate to URL
    cy.visit("https://devstory-portal.herokuapp.com/login")
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
  })

  it('Check the login functionality', () => {
    // Verify URL
    cy.url().should('include', '/login')

    // Get the Username field
    cy.get("input#username.login-right-container-form-item-input").type("user")

    // Get the Password field
    cy.get("input#password.login-right-container-form-item-input").type("Password@12#$")

    // Click on Login Button
    // cy.get("button.login-right-container-form-action").click() // TODO : Not implement on UI yet
  })

  it('Check the navigation and validate the page', () => {
    // Set the viewport as custom dimension or specify the mobile application
    // cy.viewport(1280,720) 
    // cy.viewport('iphone-x') // set the dimension as IphoneX
    
    // Check the word exist or not (This step pass when context partially or fully matched)
    cy.contains("Welcome Back !").should('exist')

    // Get the elements or selectors
    // You define the inside class names as => div > input > .password-field
    // cy.get("input#password.login-right-container-form-item-input")
    cy.get("a > p.login-right-container-signup").click() // click on the selected item
    cy.url().should('include', '/signup') // verify the URL
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
    
    // Go back to login page
    // cy.get("a > p.signup-right-container-login").click() // click on the selected item
    cy.go('back') // go back on browser to previous url
    cy.url().should('include', '/login') // verify the URL
    cy.url().then(value => {
      cy.log("Current URL", value)
    })
  })
})