class CreateAccountPage
{
    
    createaccountlinkclick()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
            {
                const createaccountlinkclick=cy.get(loc.com.createAccountlink)
                createaccountlinkclick.click({force: true})
            })
    }

    buyimageclick()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
            {
                const buyimageclick=cy.get(loc.com.buyerSignup)
                buyimageclick.click({force: true})
            })
      
    }

    emailentryforcreateuser(username)
    {
        cy.fixture('credentials').as('alamyCredentials');
        cy.get('@alamyCredentials').then(user => {

            cy.get('@alamyLocator').then(loc=>
                {
                    cy.get(loc.com.emailField).type(user.com[username]); 
                    cy.get(loc.com.PasswordField).type(user.alamy_password);; 
                    cy.get(loc.com.createAccountbutton).click({force: true});
            }) 
        })
    }
    alamylogoclick()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
            {
                const alamylogoclick=cy.get(loc.com.alamyLogo)
                alamylogoclick.click({force: true})
            })
        
    }

    clickoversignin()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            const menuSignInClick=cy.get(loc.com.menu_login)
            menuSignInClick.click({force: true})
        })
    }

    clickOverForgotPassword()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            const passwordClick=cy.get(loc.com.forgotPassword)
            passwordClick.click({force: true})
        })       
    }

    clickOverSendResetEmail()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            const resetEmailClick=cy.get(loc.com.sendResetButton)
            resetEmailClick.click({force: true})
        })        
    }

    ConfirmEmailWarningMessage(warningMessage)
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            cy.get(loc.com.validationMesaage).should('have.text', warningMessage)
        })
    }

    InvalidEmailCheck(email)
    {
        cy.get('#txtBoxEmailaddress').type(email)
    }

    ClearEmailAddress()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc=>
        {
            const resetEmailClick=cy.get(loc.com.emailField)
            resetEmailClick.clear({force: true})
        })        
    }

    PageElementConfirmation(element)
    {
       cy.get(element).should('be.visible')
    }

    SEO_Checking(url, imagePath, imagepath1, page)
    {
        var isLanguageCodePresent = 0
        var isHeaderImagePresent = 0
        var isWhiteLogoPresent = 0
        var isCanonicalPresent = 0
        var isEnHrefPresent = 0
        var isDeHrefPresent = 0
        var isEsHrefPresent = 0
        var isFrHrefPresent = 0
        var isItHrefPresent = 0
        const url2 = url;
        cy.request({
            url: url,
            encoding: 'binary',
        }).then((response) => 
        {
            var base64Content = response.body
            var res = base64Content.split(">");
            for (var i = 0; i < res.length; i++)
            {
                const s = res[i]
                if(res[i].includes("lang=\"en\""))
                {
                    isLanguageCodePresent = 1  
                }
                if(res[i].includes("safari-pinned-tab.svg"))
                {
                    isHeaderImagePresent = 1                  
                }
                if(res[i].includes("automationAlamyLogo"))
                {
                    const imageUrl = res[i]                             
                    const url1 = imageUrl.split("src=")[1].split("title")[0].trim()
                    const compare  = url + imagePath
                    expect(url1.includes(compare))
                    const altCheck = imageUrl.split("alt=")[1].split("class")[0].trim()
                    expect(altCheck.includes("Alamy logo white"))	                   
				    isWhiteLogoPresent = 1
                }
                if(res[i].includes("canonical"))
			    {
				    const imageUrl = res[i]
				    const url1 = imageUrl.split("href=")[1].split("/>")[0].trim()
				    var compare1 = ""
                    if(page == "1")
                    {
                        compare1  = url2 + "log-in/"
                    }
                    if(page == "2")
                    {
                        compare1  = url2 + "forgot-password/"
                    }
                    if(page == "3")
                    {
                        compare1  = url2 + "create-customer-account/"
                    }
                    expect(url1.includes(compare1))
				    isCanonicalPresent = 1
                }
                if(res[i].includes("alternate"))
			    {
                    const imageUrl = res[i];
                    const hrefLang1 = imageUrl.split("hreflang=")[1].split("href")[0].trim();
                    const url1 = imageUrl.split("href=")[1].split("/>")[0].trim();
                    if(hrefLang1.includes("en"))
                    {
                        var compare=""
                        if(page == 1)
                        {
                            compare  = url2 + "log-in/";
                        }
                        if(page == 2)
                        {
                            compare  = url2 + "forgot-password/";
                        }
                        if(page == 3)
                        {
                            compare  = url2 + "create-customer-account/";
                        }
                        expect(url1.includes(compare))
                        isEnHrefPresent = 1;
                    }               
                    if(hrefLang1.includes("de"))
				    {
                        url = url2;
                        url = url.replaceAll("com", "de");
                        var compare = ""
                        if(page == 1)
                        {
                            compare  = url + "log-in/";
                        }
                        if(page == 2)
                        {
                            compare  = url + "forgot-password/";
                        }
                        if(page == 3)
                        {
                            compare  = url + "create-customer-account/";
                        }
                        expect(url1.includes(compare))
                        isDeHrefPresent = 1;
                    }
                    if(hrefLang1.includes("es"))
				    {
                        url = url.replaceAll("de", "es");
                        var compare = ""
                        if(page == 1)
                        {
                            compare  = url + "log-in/";
                        }
                        if(page == 2)
                        {
                            compare  = url + "forgot-password/";
                        }
                        if(page == 3)
                        {
                            compare  = url + "create-customer-account/";
                        }
                        expect(url1.includes(compare))                       
                        isEsHrefPresent = 1;
				    }				
                    if(hrefLang1.includes("fr"))
                    {
                        url = url.replace("alamy", "alamyimages").replace(".es/", ".fr/");
                        var compare = ""
                        if(page == 1)
                        {
                            compare  = url + "log-in/";
                        }
                        if(page == 2)
                        {
                            compare  = url + "forgot-password/";
                        }
                        if(page == 3)
                        {
                            compare  = url + "create-customer-account/";
                        }
                        expect(url1.includes(compare))
                        isFrHrefPresent = 1;					
                    }
                    if(hrefLang1.includes("it"))
                    {
                        url = "";
                        url = url2;
                        url = url.replaceAll("com", "it");
                        var compare = ""
                        if(page == 1)
                        {
                            compare  = url + "log-in/";
                        }
                        if(page == 2)
                        {
                            compare  = url + "forgot-password/";
                        }
                        if(page == 3)
                        {
                            compare  = url + "create-customer-account/";
                        }
                        expect(url1.includes(compare))
                        isItHrefPresent = 1;
                    }
                }
            }
            expect(isLanguageCodePresent).to.equal(1)
            expect(isHeaderImagePresent).to.equal(1)
            expect(isWhiteLogoPresent).to.equal(1)
            expect(isCanonicalPresent).to.equal(1)
            expect(isEnHrefPresent).to.equal(1)
            expect(isDeHrefPresent).to.equal(1)
            expect(isEsHrefPresent).to.equal(1)
            expect(isFrHrefPresent).to.equal(1)
            expect(isItHrefPresent).to.equal(1)
        })
    }

    ClickOverBadge(badgeId)
    {
        const BadgeImage=cy.get(badgeId)
        BadgeImage.click({force: true})       
    }

    AddToCart()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            cy.get(loc.com.cartPageAddToCart).click({force:true})
            cy.wait(3000)
        })       
    }

    signinmenuclick()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc => {

            cy.get(loc.com.userSignin).click({force:true})
        })        
    }

    signindetails(username)
    {       
        cy.fixture('credentials').as('alamyCredentials');
        cy.get('@alamyCredentials').then(user => 
        {
            cy.fixture('locator').as('alamyLocator');
            cy.get('@alamyLocator').then(loc =>
            {
                cy.get(loc.com.emailField).type(user.com[username]);
                cy.get(loc.com.PasswordField).type(user.alamy_password);
                const btn = cy.get(loc.com.signinButton)
                btn.click({force:true});
            })            
        })
    }

    signinemptypassword(username,pwdmsg)
    {
        cy.fixture('credentials').as('alamyCredentials');
        cy.get('@alamyCredentials').then(user =>
        {            
            cy.fixture('locator').as('alamyLocator');
            cy.get('@alamyLocator').then(loc =>
            {
                cy.get(loc.com.emailField).type(user.com[username]);
                cy.get(loc.com.signinButton).click({force:true});
            })   
        })
        cy.fixture('validationmsgs').as('alamyValidationmsgs');
        cy.get('@alamyValidationmsgs').then(msg => 
        {
            cy.fixture('locator').as('alamyLocator');
            cy.get('@alamyLocator').then(loc =>
            {
                cy.get(loc.com.errorWarningmsg).should('have.text',msg.com[pwdmsg]);
            }) 
                       
        })       
    }

    signinemptyemail(emailmsg)
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
        {
            cy.get(loc.com.signinButton).click({force:true});
            cy.get(loc.com.signinButton).click({force:true});
        })
        cy.fixture('validationmsgs').as('alamyValidationmsgs');
        cy.get('@alamyValidationmsgs').then(msg => 
        {
            cy.fixture('locator').as('alamyLocator');
            cy.get('@alamyLocator').then(loc =>
            {
                cy.get(loc.com.errorWarningmsg).should('have.text',"Please enter a valid email address")
            }) 
        })   
    }

    signininvalidemail(username,emailmsg)
    {
        cy.fixture('credentials').as('alamyCredentials');
        cy.get('@alamyCredentials').then(user => 
        {
            cy.fixture('locator').as('alamyLocator');
            cy.get('@alamyLocator').then(loc =>
            {
                cy.get(loc.com.emailField).type(user.com[username]);
                cy.get(loc.com.PasswordField).type(user.alamy_password);
            })          
            cy.fixture('validationmsgs').as('alamyValidationmsgs');
            cy.get('@alamyValidationmsgs').then(msg => 
            {
                cy.fixture('locator').as('alamyLocator');
                cy.get('@alamyLocator').then(loc =>
                {
                    cy.get(loc.com.errorWarningmsg).should('have.text',msg.com[emailmsg]);
                })         
            })           
        })
    }

    CaptchaLogin(userName, passWord, url, captchaUrl, languageCode)
    {
        const CaptchaUrl = captchaUrl+"Alamyuser.asmx/Login?CaptchaResponse=8D9EDDAF-D469-48E6-9C97-2539721E165C&Email="+userName+"&password="+passWord+languageCode
        cy.visit(CaptchaUrl)
    }
}
export default CreateAccountPage
