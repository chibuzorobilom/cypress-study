import { faker } from '@faker-js/faker'

let home
let basic
let social
let otpPage
let inboxId

before('Load Element Locators', () => {
    cy.fixture('selectors').then((element) => {
        home = element.homePage
        basic = element.basicDetails
        social = element.socialDetails
        otpPage = element.otpPage
    })
})


// Cypress.Commands.add('clickHomePageSignUpButton', () => {
//     cy.clickAnyElement(home.homeSignUpButton)

// })


// Cypress.Commands.add('insertBasicDetails', () => {
//     cy.typeAnyText(basic.fullNameField, faker.person.fullName())
//     cy.typeAnyText(basic.bizNameField, faker.company.buzzVerb())
//     cy.insertEmail()
//     cy.typeAnyText(basic.bizPhoneField, faker.phone.number('+23481########'))
//     cy.typeAnyText(basic.bizRegNumField, 'RC-0987')
//     cy.clickAnyElement(basic.nextButton)

// })

// Cypress.Commands.add('insertSocialDetails', () => {
//     cy.typeAnyText(social.websiteField, faker.internet.domainName())
//     cy.typeAnyText(social.instagramField, faker.internet.displayName())
//     cy.typeAnyText(social.twitterField, faker.internet.displayName())
// })


// Cypress.Commands.add('inputPasswordCompleteSignUp', () => {
//     cy.clickAnyElement(social.infoSourceField)
//     cy.clickAnyElement(social.infoOptionDropdown)
//     cy.typeAnyText(social.passwordField, 'Pa$$w0rd!')
//     cy.clickAnyElement(social.signUpButton)
// })

Cypress.Commands.add('verifyOTPPage', () => {
    cy.get(otpPage.thankYouHeader).should('be.visible').and('have.text', 'Thank you for Signing up with Mima.')
})


Cypress.Commands.add('insertEmail', () => {
    cy.mailslurp().then(emailCreator => emailCreator.createInbox().then(inbox => {
        inboxId = inbox.id
        const emailAddress = inbox.emailAddress
        cy.typeAnyText(basic.bizEmailField, emailAddress)

        const loginDetails = `
                {
                    "email": "${emailAddress}",
                    "password": "Pa$$w0rd!"
                }
        
        `

        cy.writeFile('cypress/fixtures/login-details.json', loginDetails)
    }))

})


Cypress.Commands.add('insertOTP', () => {
    cy.mailslurp().then(emailExtractor => emailExtractor.waitForLatestEmail(inboxId, 30000, true)).then(email => {
        const emailBody = email.body
        const docParser = new DOMParser()
        const document = docParser.parseFromString(emailBody, "text/html")
        const otpCode = document.querySelector('tr:nth-child(2) p:nth-child(3)').textContent
        const otpValue = otpCode.trim()

        cy.get('input').each(($el, index) => {
            cy.wrap($el).should('exist').fill(otpValue[index])
        })
        cy.log(otpValue)
    })
})

// Method 1: to check text and find the corresponding element to click using If Statements
// Cypress.Commands.add('clickButton', (text) => {
//     if(text==="Sign Up"){
//         cy.clickAnyElement(home.homeSignUpButton)
//     }else if(text === 'Next'){
//         cy.clickAnyElement(basic.nextButton)
//     }else if(text==='Sign Up'){
//         cy.clickAnyElement(social.signUpButton)
//     }
// })


// Method 2: to check text and click based on corresponding elements using 'switch'
// Cypress.Commands.add('clickButton', (text) => {
//     switch(text){
//         case 'Sign Up':
//             cy.clickAnyElement(home.homeSignUpButton)
//             break
//         case 'Next':
//             cy.clickAnyElement(basic.nextButton)
//             break 
//         case 'Sign Up': 
//         cy.clickAnyElement(social.signUpButton)
//     } 
// })


Cypress.Commands.add('clickButton', (text) => {
    cy.contains(text).should('exist').click()
})


Cypress.Commands.add('insertInfo', (text) => {
    switch(text){
        case 'fullname':
            cy.typeAnyText(basic.fullNameField, faker.person.fullName())
            break
        case 'business name':
            cy.typeAnyText(basic.bizNameField, faker.company.buzzVerb())
            break
        case 'business email':
            cy.insertEmail()
            break
        case 'business phone number':
            cy.typeAnyText(basic.bizPhoneField, faker.phone.number('+23481########'))
            break
        case 'business registration number':
            cy.typeAnyText(basic.bizRegNumField, 'RC-0987')
            break
        case 'website':
            cy.typeAnyText(social.websiteField, faker.internet.domainName())
            break
        case 'instagram handle':
            cy.typeAnyText(social.instagramField, faker.internet.displayName())
            break
        case 'twitter handle':
            cy.typeAnyText(social.twitterField, faker.internet.displayName())
            break
        case 'password':
            cy.typeAnyText(social.passwordField, 'Pa$$w0rd!')
            break
    }
})


Cypress.Commands.add('infoSource', (text) => {
    cy.clickAnyElement(social.infoSourceField)
    cy.get(social.infoOptionDropdown).contains(text).should('exist').click()
})
