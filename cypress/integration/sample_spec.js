describe('Cypress', () => {
    it('visits the app and check that submit button exist', () => {
        cy.visit('http://localhost:3001')
        cy.get('.submit-button').should('exist');
    })
})
