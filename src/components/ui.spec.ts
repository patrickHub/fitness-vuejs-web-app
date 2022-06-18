/// <reference types="cypress" />

describe('first tests', () => {
  // very first two tests
  it('loads the app', () => {
    cy.visit('http://localhost:8081/#')
    cy.get('#app').should('be.visible')
  })
})
