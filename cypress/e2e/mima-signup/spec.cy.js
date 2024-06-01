

// Tests for Signing Up on Mima Staging (Used Sign Up details)
import { faker } from '@faker-js/faker'

describe('Sign Up Test Scenarios with Unique Details', () => {
    it('User should sign up successfully after filling all required and optional fields', () => {
      // Load the fixture file
      cy.fixture('selectors').then((data) => {

        cy.get(data.fullNameField).should('be.visible').type(faker.name.fullName());
        cy.get(data.bizNameField).should('be.visible').type(faker.company.name());
        cy.get(data.bizEmailField).should('be.visible').type(faker.internet.email({ provider: 'yopmail.com' }));
        cy.get(data.bizPhoneField).should('be.visible').type(faker.phone.number('+23481########'));
        cy.get(data.bizRegNumField).should('be.visible').type(faker.number.int({ max: 1000000 }));
        cy.get('button[type="button"]').should('be.visible').click();
        cy.get(data.websiteField).should('be.visible').type(faker.internet.domainName());
        cy.get(data.instagramField).should('be.visible').type(faker.internet.displayName());
        cy.get(data.twitterField).should('be.visible').type(faker.internet.displayName());
        cy.get('div[placeholder]').click();
        cy.get(data.infoOptionDropdown).should('be.visible').click();
        cy.get(data.passwordField).should('be.visible').type('Pa$$w0rd!');
        cy.get('button[type="submit"]').should('be.visible').click();
        cy.contains('Thank you for Signing up with Mima.').should('be.visible');
      });
    });
  });

