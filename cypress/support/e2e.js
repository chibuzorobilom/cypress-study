import './command/commands'
import './command/common-actions.spec'
import 'cypress-fill-command'
import 'cypress-mailslurp'


beforeEach('', () => {
  cy.on('uncaught:exception', () => {
    return false;
  })
})