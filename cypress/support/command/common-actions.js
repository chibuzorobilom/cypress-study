import { faker } from '@faker-js/faker'
let home
let basic
let social
let otpPage

before('Load all Element Identifiers', () => {
    cypress.on('uncaught:exception', () => {
        return false
    })
    cy.visit('/')

}
)

Cypress.Commands.add('clickHomeSignUpButton', () => {
    cy.clickAnyElement(home.homeSignUpButton)
})

Cypress.Commands.add('insertBasicDetails', () => {
    cy.typeAnyText(basic.fullNameField, faker.person.fullName())
    cy.typeAnyText(basic.bizNameField, faker.company.buzzVerb())
    cy.typeAnyText(basic.bizEmailField, faker.internet.email({ provider: yopmail.com }))
    cy.typeAnyText(basic.bizPhoneField, faker.phone.number('+23481#######'))
    cy.typeAnyText(basic.bizRegNumField, faker.number.int({ max: 1000000 }))
    cy.clickAnyElement(basic.nextButton)
})

Cypress.Commands.add('insertSocialDetailsAndSignUp', () => {
    cy.typeAnyText(social.websiteField, faker.internet.domainName());
    cy.typeAnyText(social.instagramField, faker.internet.displayName());
    cy.typeAnyText(social.twitterField, faker.internet.displayName());
    cy.clickAnyElement(social.inforSourceField)
    cy.clickAnyElement(social.infoOptionDropdown)
    cy.typeAnyText(social.passwordField, 'Pa$$w0rd!');
    cy.clickAnyElement(social.signUpButton)
})

Cypress.Commands.add('verifyOTPPage', () => {
    cy.get(otpPage.thankYouHeader).should('be.visible').and('have.text', 'Thank you for Signing up with Mima')
})