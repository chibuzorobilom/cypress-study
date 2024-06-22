import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

let home
let basic
let social
let otpPage
let inboxId


Before(/^User is on Mima page$/, () => {
  cy.fixture('selectors').then((element) => {
    home = element.homePage
    basic = element.basicDetails
    social = element.socialDetails
    otpPage = element.otpPage
  })

});



Given(/^User is on trymima page$/, () => {
  cy.visit('/')
});

Then(/^User sees the OTP page$/, () => {
  cy.verifyOTPPage()
});

When(/^User inserts OTP code$/, () => {
  cy.insertOTP()
});

Then(/^User sees the Dashboard$/, () => {
  cy.get('div.CountDown_main__4rPJL').should('contain.text', 'You are currently on your Free Trial, subscribe now to get one extra month free.')
});


Then(/^The following on the sidebar of the dashboard$/, (datatable) => {
  datatable.hashes().forEach((row) => {
    cy.get('.Sidebar_sb_nav_item__OJG2Q').contains(row.side_item).should('exist').and('contain.text', row.side_item)
  })
});


When(/^User clicks the "([^"]*)" button$/, (button_text) => {
  cy.clickButton(button_text)
});

When(/^User inserts the "([^"]*)"$/, (field) => {
  cy.insertInfo(field)
});


When(/^User selects "([^"]*)" as info source$/, (media_source) => {
  cy.infoSource(media_source)
});

// When(/^User inputs the OTP they receive in the OTP field$/, () => {
//   cy.insertOTP()
// });

// When(/^User clicks the Sign Up button on the Home Page$/, () => {
//   cy.clickAnyElement(home.homeSignUpButton)
// });

// When("User inputs their Full Name into the {string} field", function (string) {
//   return "pending";
// });

// When(/^User inputs their Full Name into the Full Name field$/, () => {
//   cy.typeAnyText(basic.fullNameField, faker.person.fullName())
// });

// When(/^User inputs their Business Name into the Business Name field$/, () => {
//   cy.typeAnyText(basic.bizNameField, faker.company.buzzVerb())
// });

// When(/^User inputs their Business Email into the Business Email field$/, () => {
//   cy.insertEmail()
// });

// When(/^User inputs their Business Phone Number into the Business Phone Number field$/, () => {
//   cy.typeAnyText(basic.bizPhoneField, faker.phone.number('+23481########'))
// });

// When(/^User inputs their Business Registration Number into the Business Registration Number field$/, () => {
//   cy.typeAnyText(basic.bizRegNumField, 'RC-0987')
// });

// When(/^User clicks on the Next button$/, () => {
//   cy.clickAnyElement(basic.nextButton)
// });

// When(/^User inputs their Website into the Website field$/, () => {
//   cy.typeAnyText(social.websiteField, faker.internet.domainName())
// });

// When(/^User inputs their Instagram Handle into the Instagram field$/, () => {
//   cy.typeAnyText(social.instagramField, faker.internet.displayName())
// });

// When(/^User inputs their Twitter Handle into the Twitter field$/, () => {
//   cy.typeAnyText(social.twitterField, faker.internet.displayName())
// });

// When(/^User selects an information source$/, () => {
//   cy.clickAnyElement(social.infoSourceField)
//   cy.clickAnyElement(social.infoOptionDropdown)
// });

// When(/^User inputs their Password into the Password field$/, () => {
//   cy.typeAnyText(social.passwordField, 'Pa$$w0rd!')
// });

// When(/^User clicks on the Sign Up Button$/, () => {
//   cy.clickAnyElement(social.signUpButton)
// });





// describe('Sign Up Test Scenarios with Unique Details', () => {
//     it('User should sign up successfully after filling all required and optional fields', () => {
//       cy.clickHomePageSignUpButton()
//       cy.insertBasicDetails()
//       cy.insertSocialDetails()
//       cy.inputPasswordCompleteSignUp()
//       cy.verifyOTPPage()
//       cy.insertOTP()
//     });
//   });