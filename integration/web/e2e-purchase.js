/// <reference types="cypress" />

describe('e2e purchase', () => {
    beforeEach(() => {
        cy.clearCookies()
    })

    it('Test 01', () => {
        cy.setCookie('AlamyUserID', '{B9AEBB7B-E162-4B8E-A075-25E418A4888D}')
        cy.reload()
        cy.visit('https://stagingweb.alamy.com/alamy-test-image-not-for-purchase-image353304678.html')
        cy.get('#editorial-royalty-free').click()
        cy.get('#editorial-royalty-free-tab li:nth-child(5) div:nth-child(2)').click()
        cy.get('[class=\'mb-4\'] button:nth-child(1)').click()
        cy.wait(5000)

        cy.get("body").then($body => {
            if ($body.find('#global-modal-wrapper').length > 0) {
                cy.log('Confirm password modal appeared')
                cy.get('#txtPwd').type('qatest123$$')
                cy.get('#passwordCon').click()
            } else {
                cy.log('Confirm password modal did not appear')
            }
        });

        cy.get('input[type=\'tel\'][pattern=\'[0-9]*\'][inputmode=\'numeric\']').type('4111111111111111', { force: true })
        cy.get('#automationMonthYear').type('1230')
        cy.get('#fake_pass').type('1111')
        cy.get('#order-submit').click()
        //cy.get('.approved-content .no-auto-submit').invoke('attr', 'target', '_self');
        cy.wait(5000)

    })
    window.close()
})