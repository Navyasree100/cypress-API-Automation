describe('Browser actions',()=>{
    it('Load Book store',()=>{
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include','index.html', setTimeout(10000))
    })

    it('Go to Travel page',()=>{
        cy.get('a')
        .contains('Travel')
        .click()
        cy.get(h1).contains('Travel')

    })

    it('Click on Poetry Item and Go to Poetry Page',()=>{
        cy.get(a).contains('Poetry').click()
        cy.get('h1').contains('Poetry')
    })

    it('Click on the Olio item',()=>{
        cy.get('img').contains('Olio').click()
    })
})