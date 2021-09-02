context('when a user visits the application the page', () => {
    
    it('is expected to display the header', () => {
        Cy.visit('/')
         Cy.get('h1').should('contain.text','Address Book')

    })
})

