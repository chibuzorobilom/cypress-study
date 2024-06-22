


Cypress.Commands.add('clickAnyElement', (element)=>{
    cy.get(element).should('exist').click();
})


Cypress.Commands.add('typeAnyText', (field, text) => {
    cy.get(field).should('exist').fill(text)
})

