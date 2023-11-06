import CreateAccountPage from '../../support/global/alamycreateaccount_forgot_signin'
import alamyHeader from '../../support/global/alamyHeader'
import homePage from '../../support/global/homePage'
import SearchPage from '../../support/global/SearchPage'
import cartPage from '../../support/global/cartPage'
import lightboxPage from '../../support/global/lightboxPage'

describe('Create account, Forgot password and SignIn functionality check',function()
{
    it('create user assertion',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        ca.emailentryforcreateuser('ocduser')
        ah.loginConfirm()
    })

    it('Email textbox validation',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        ca.emailentryforcreateuser('wrongemail1')
        cy.fixture('variable').as('alamyVariable');
        cy.get('@alamyVariable').then(variables =>
        {
            ca.ConfirmEmailWarningMessage(variables.com.login_page_email_validation_msg_txt) 
        })  
    })

    it('Password text validation', function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            cy.get(loc.com.emailField).type('testocduser1@alamyHeader.com')
            cy.get(loc.com.PasswordField).type('wqer')
            cy.get(loc.com.createAccountbutton).click({force: true})
            cy.fixture('variable').as('alamyVariable');
            cy.get('@alamyVariable').then(variables =>
            {
                ca.ConfirmEmailWarningMessage(variables.com.weak_password_message) 
            })                    
        })    
    })

    it('close button validation', function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            cy.get(loc.com.closeButton).click()   
        }) 
        ah.homePageRedirectionValidation()
    })

    it('login link click', function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            cy.get(loc.com.logIn).click()
        }) 
    })

    it('guest purchase create account', function()
    {
        const ca = new CreateAccountPage()
        const ah = new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        ca.emailentryforcreateuser('guestuserp')  
    })

    it('alamylogo click and redriect to home page', function()
    {
       const ca = new CreateAccountPage()
       const ah = new alamyHeader()
       ah.visit()
       ah.accountsclickheader()
       ca.createaccountlinkclick()
       ca.buyimageclick()
       ca.alamylogoclick()
       ah.homePageRedirectionValidation()
    })

    it('Forgot Password validation check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.clickoversignin()
        ca.clickOverForgotPassword()
        ca.clickOverSendResetEmail()
        cy.fixture('variable').as('alamyVariable');
        cy.get('@alamyVariable').then(variables =>
        {
            ca.ConfirmEmailWarningMessage(variables.com.email_warning_message) 
        })
        cy.get('@alamyVariable').then(variables =>
        {
            ca.InvalidEmailCheck(variables.com.alamy_test_keyword) 
        })
        ca.clickOverSendResetEmail() 
        cy.get('@alamyVariable').then(variables =>
        {
            ca.ConfirmEmailWarningMessage(variables.com.email_warning_message) 
        })
        ca.ClearEmailAddress()  
        cy.get('@alamyVariable').then(variables =>
        {
            ca.InvalidEmailCheck(variables.com.imvalid_email_address) 
        })
        ca.clickOverSendResetEmail() 
        cy.get('@alamyVariable').then(variables =>
        {
            ca.ConfirmEmailWarningMessage(variables.com.email_warning_message) 
        })    
    })

    it('Successful Reset Password and Back to signin',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.clickoversignin()
        ca.clickOverForgotPassword()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.sendResetButton)
        })
        cy.fixture('credentials').as('alamyCredential');
        cy.get('@alamyCredential').then(credential =>
        {
            ca.InvalidEmailCheck(credential.com.AlamyContributorExecution_email) 
        })
        ca.clickOverSendResetEmail()  
        cy.get('@alamyLocator').then(loc =>
        {      
            ca.PageElementConfirmation(loc.com.Successful_Reset)
        })
        ca.clickOverForgotPassword()
        ca.ClearEmailAddress()
    })

    it('Forgot Page Badge Image check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.clickoversignin()
        ca.clickOverForgotPassword()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.sendResetButton)
        })
        cy.log('Reached Forgot password page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.forgotBadgeImage)
            ca.PageElementConfirmation(loc.com.savePreview)
        })  
    }) 

    it('Forgot Password Page Badge Contributor check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.clickoversignin()
        ca.clickOverForgotPassword()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.sendResetButton)
        })
        cy.log('Reached Forgot password page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.forgotBadgeContributor)
            ca.PageElementConfirmation(loc.com.searchContributorName)
        })  
    })

    it('Create Account Page Badge Image check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.emailField)
        })
        cy.log('Reached Create Account page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.createAccountBadgeImage)
            ca.PageElementConfirmation(loc.com.savePreview)
        })  
    }) 

    it('Create Account Page Badge Contributor check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.emailField)
        })
        cy.log('Reached Forgot password page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.createAccountBadgeContributor)
            ca.PageElementConfirmation(loc.com.searchContributorName)
        })  
    })

    it('SignIn Page Badge Image check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const homepg = new homePage()
        ah.visit()
        homepg.homepageimagesearch()
        ah.accountsclickheader()
        ca.signinmenuclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.emailField)
        })
        cy.log('Reached SignIn page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.signInBadgeImage)
            ca.PageElementConfirmation(loc.com.savePreview)
        })  
    }) 

    it('SignIn Page Badge Contributor check',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const homepg = new homePage()
        ah.visit()
        homepg.homepageimagesearch()
        ah.accountsclickheader()
        ca.signinmenuclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.emailField)
        })
        cy.log('Reached signIn page')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.ClickOverBadge(loc.com.signInBadgeContributor)
            ca.PageElementConfirmation(loc.com.searchContributorName)
        })  
    })  

    it('Forgot Password page SEO checking', function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.clickoversignin()
        ca.clickOverForgotPassword()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.sendResetButton)
        })
        cy.log('Reached Forgot password page')  
        cy.fixture('variable').as('alamyVariable');
        cy.get('@alamyVariable').then(variable => 
        {
            ca.SEO_Checking(Cypress.env('baseurl'),variable.com.SEO_White_logo_path,variable.com.SEO_Black_logo_path,"2")
        })       
    })

    it('Create Account page SEO checking', function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.createaccountlinkclick()
        ca.buyimageclick()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.emailField)
        })
        cy.log('Reached Create Account page')  
        cy.fixture('variable').as('alamyVariable');
        cy.get('@alamyVariable').then(variable => 
        {
            ca.SEO_Checking(Cypress.env('baseurl'),variable.com.SEO_White_logo_path,variable.com.SEO_Black_logo_path,"3")
        })       
    })

    it('SignIn page SEO checking', function()
    {
        const ah =  new alamyHeader()
        const homepg = new homePage()
        const ca = new CreateAccountPage()
        ah.visit()
        homepg.homepageimagesearch()
        ah.accountsclickheader()
        ca.signinmenuclick()
        cy.log('Reached SignIn page')  
        cy.fixture('variable').as('alamyVariable');
        cy.get('@alamyVariable').then(variable => 
        {
            ca.SEO_Checking(Cypress.env('baseurl'),variable.com.SEO_White_logo_path,variable.com.SEO_Black_logo_path,"1")
        })       
    })

    //User Sign in from Homepage Header
    it('User sign in - Home page',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const homepg = new homePage()
        ah.visit()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signindetails('ocduser')
        homepg.homepageloggedinchk()   
    })

    //User login from Search page
    it('User sign in - Search page',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const homepg = new homePage()
        ah.visit()
        homepg.homepageimagesearch()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signindetails('ocduser')
        ah.visit()
    })

    //User login from Image page
    it('User sign in - Image page',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const homepg = new homePage()
        const sp = new SearchPage() 
        ah.visit()
        homepg.homepageimagesearch()
        sp.firstimageclick()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signindetails('ocduser')
        homepg.homepageloggedinchk()
    })

    //Empty Password field  validation
    it('User Sign in with Empty password',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signinemptypassword('ocduser','signinpwdemptymsg')       
    })

    //Empty Email field validation
    it('User Sign in with Empty Email',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signinemptyemail('ocduser','signinemailemptymsg')    
    })

    //Invalid Email field validation
    it('User Sign in with Invalid Email',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        ah.visit()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signininvalidemail('invalidemailid','signinemailemptymsg')   
    })

    it('User Sign in From Lightbox',function()
    {
        const ca = new CreateAccountPage()
        const ah =  new alamyHeader()
        const lb = new lightboxPage()
        ah.visit()
        ah.lightboxclickheader()
        lb.createlb()
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signindetails('ocduser')
        lb.verifylbpage()   
    })

    it('User Sign in From Shopping Cart',function()
    {
        const ah =  new alamyHeader()
        const cp = new cartPage()
        const homepg = new homePage()
        const sp = new SearchPage()
        const ca = new CreateAccountPage()
        ah.visit()
        homepg.homepageimagesearch()
        sp.firstimageclick()
        ca.AddToCart()       
        ah.cartclickheader()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.cartCheckOut)
        })
        ah.accountsclickheader()
        ca.signinmenuclick()
        ca.signindetails('ocduser')
        homepg.homepageloggedinchk()
    })

    it('Sign in From Purchase path page',function()
    {
        const ah =  new alamyHeader()
        const cp = new cartPage()
        const homepg = new homePage()
        const sp = new SearchPage() 
        const ca = new CreateAccountPage()
        ah.visit()
        homepg.homepageimagesearch()
        sp.firstimageclick()
        ca.AddToCart()       
        ah.cartclickheader()
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.cartCheckOut)
        })
        cp.guestcartaddpersonaluselic()
        cp.guestcartcheckoutclick()
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.purchasePageRemoveImage)
        })
        cp.signfrompurchasepath('ocduser')
        cy.get('@alamyLocator').then(loc =>
        {
            ca.PageElementConfirmation(loc.com.purchasePageRemoveImage)
        })
    })
})
