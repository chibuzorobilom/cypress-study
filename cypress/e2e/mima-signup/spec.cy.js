

// Tests for Signing Up on Mima Staging (Used Sign Up details)
// import { faker } from '@faker-js/faker'

// let basic
describe('Sign Up Test Scenarios with Unique Details', () => {
  // before('Load all Element Identifiers', () => {

  //   cy.fixture('selectors').then(select) => {
  //     basic = select.basicDetails

  //   }

  // })
    it('User should sign up successfully after filling all required and optional fields', () => {
      cy.clickHomeSignUpButton()
      cy.insertBasicDetails()
      cy.insertSocialDetailsAndSignUp()
      cy.verifyOTPPage()
    });
  });

