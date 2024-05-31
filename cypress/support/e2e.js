// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

// ***********************************************************

/*   before('Testing Before All', () => {
    cy.log('Start BEFORE ALL tests')
  }) */

beforeEach('Testing Before Each', () => {
    // cy.log('Start BEFORE EACH test')
    Cypress.on('uncaught:exception', () => {
        return false;
    })
    cy.visit('/')
    cy.get('.Header2_header__nav__btn__wRKfY div:nth-child(2) button').should('be.visible').click()
})

/*   after('Testing After All', () => {
    cy.log('Start AFTER ALL tests end')
  }) */

/*   afterEach('Testing After Each', () => {
    cy.log('Start AFTER EACH test ends')
  }) */

// ***********************************************************

// Alternatively you can use CommonJS syntax:
// require('./commands')