/// <reference types="cypress" />

describe('Test Login Functionality', () => {
  it('Open Login Page', () => {
    cy.visit("https://devstory-portal.herokuapp.com/login")
  })
})