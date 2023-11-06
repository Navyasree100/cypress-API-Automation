describe('.net API for User Details', function () {
    it('GetUserDetails', () => {
        var userId;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => {
            cy.request(
                {
                    method: 'GET',
                    url: Cypress.env('baseurl') + '/microservices/OrderProcessing/OrderProcessing.asmx/RecordCommerceToolPurchase?userId=' + user.getUserDetails_userId,
                }).then(function (Response) {
                    expect(Response.status).equal(200)
                    expect(Response).to.have.property('headers')
                    //expect(Response.body.data.user).to.have.property('userId',user.getUserDetails_userId)
                    cy.fixture('variables').as('alamyvariable');
                    cy.get('@alamyvariable').then(variable => {
                        expect(Response.body.data).to.have.property('title', variable.com.Title)
                        expect(Response.body.data).to.have.property('firstName', variable.com.firstName)
                        expect(Response.body.data).to.have.property('lastName', variable.com.lastName)
                        expect(Response.body.data).to.have.property('email', variable.com.email)
                        expect(Response.body.data).to.have.property('countryCode', variable.com.countryCode)
                        expect(Response.body.data).to.have.property('isCustomer', variable.com.isCustomer)
                        expect(Response.body.data).to.have.property('isContributor', variable.com.isContributor)
                    })
                })
        })
    })

    it('GetCustomerDetails', () => {
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => {
            cy.request(
                {
                    method: 'GET',
                    url: Cypress.env('baseurl') + '/microservices/customers/managecustomerdetails.asmx/GetCustomerDetails?customerid=' + user.GetCustomerDetails_userId + '&langcode=' + user.langcode,
                }).then(function (Response) {
                    expect(Response.status).equal(200)
                    expect(Response).to.have.property('headers')
                    cy.fixture('variables').as('alamyvariable');
                    cy.get('@alamyvariable').then(variable => {
                        expect(Response.body.data).to.have.property('iqDisplayName', variable.com.GetCustomerDetails_iqDisplayName)
                        expect(Response.body.data).to.have.property('territorySelectionEnabled', variable.com.GetCustomerDetails_userId)
                        expect(Response.body.data).to.have.property('userId', variable.com.GetCustomerDetails_userId)
                        expect(Response.body.data).to.have.property('email', variable.com.GetCustomerDetails_email)
                        expect(Response.body.data).to.have.property('isDeleted', variable.com.GetCustomerDetails_isDeleted)
                        expect(Response.body.data).to.have.property('audienceType', variable.com.GetCustomerDetails_audienceType)
                        expect(Response.body.data).to.have.property('countryId', variable.com.GetCustomerDetails_countryId)
                        expect(Response.body.data).to.have.property('billingCountryId', variable.com.GetCustomerDetails_billingCountryId)
                        expect(Response.body.data).to.have.property('territoryId', variable.com.GetCustomerDetails_territoryId)
                        expect(Response.body.data.currency).to.have.property('code', variable.com.GetCustomerDetails_code)
                        expect(Response.body.data.currency).to.have.property('symbol', variable.com.GetCustomerDetails_symbol)
                        expect(Response.body.data.currency).to.have.property('exchangeRate', variable.com.GetCustomerDetails_exchangeRate)
                        expect(Response.body.data).to.have.property('loginState', variable.com.GetCustomerDetails_loginState)
                        expect(Response.body.data).to.have.property('isContributor', variable.com.GetCustomerDetails_isContributor)
                        expect(Response.body.data).to.have.property('isIQUser', variable.com.GetCustomerDetails_isIQUser)
                        expect(Response.body.data).to.have.property('isDistributor', variable.com.GetCustomerDetails_isDistributor)
                        expect(Response.body.data).to.have.property('isSuperUser', variable.com.GetCustomerDetails_isSuperUser)
                        expect(Response.body.data).to.have.property('isPopupUser', variable.com.GetCustomerDetails_isPopupUser)
                        expect(Response.body.data).to.have.property('isDiscountIQUser', variable.com.GetCustomerDetails_isDiscountIQUser)
                        expect(Response.body.data).to.have.property('isFreeImageUser', variable.com.GetCustomerDetails_isFreeImageUser)
                        expect(Response.body.data).to.have.property('companyType', variable.com.GetCustomerDetails_companyType)
                        expect(Response.body.data).to.have.property('accountExec', variable.com.GetCustomerDetails_accountExec)
                        expect(Response.body.data).to.have.property('isSolr', variable.com.GetCustomerDetails_isSolr)
                        expect(Response.body.data).to.have.property('isWatermarkDisabled', variable.com.GetCustomerDetails_isWatermarkDisabled)
                        expect(Response.body.data).to.have.property('hidePA', variable.com.GetCustomerDetails_hidePA)
                        expect(Response.body.data).to.have.property('hideDataco', variable.com.GetCustomerDetails_hideDataco)
                        expect(Response.body.data).to.have.property('hasPurchase', variable.com.GetCustomerDetails_hasPurchase)
                        expect(Response.body.data).to.have.property('ukVatRate', variable.com.GetCustomerDetails_ukVatRate)
                        expect(Response.body.data).to.have.property('superUserPrivileges', variable.com.GetCustomerDetails_superUserPrivileges)
                        expect(Response.body.data).to.have.property('superUserAccess', variable.com.GetCustomerDetails_superUserAccess)
                        expect(Response.body.data.easyDownload).to.have.property('isEnabled', variable.com.GetCustomerDetails_isEnabled)
                        expect(Response.body.data.easyDownload).to.have.property('additionalDetails', variable.com.GetCustomerDetails_additionalDetails)
                        //expect(Response.body.data.easyDownload.image).to.have.property('isEnabled', variable.com.GetCustomerDetails_isEnabled)
                        //expect(Response.body.data.easyDownload.video).to.have.property('additionalDetails', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.discount).to.have.property('basicDiscountRate', variable.com.GetCustomerDetails_basicDiscountRate)
                        expect(Response.body.data.discount).to.have.property('licenseType', variable.com.GetCustomerDetails_licenseType)
                        expect(Response.body.data.discount).to.have.property('bulkDiscountRate', variable.com.GetCustomerDetails_bulkDiscountRate)
                        expect(Response.body.data.discount).to.have.property('minNumberOfItems', variable.com.GetCustomerDetails_minNumberOfItems)
                        expect(Response.body.data.imagePack).to.have.property('isCustomPackUser', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.imagePack).to.have.property('purchasedPackCount', variable.com.GetCustomerDetails_additionalDetails1)
                        expect(Response.body.data.imagePack).to.have.property('hasExpiredPacks', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.imagePack).to.have.property('showConfirmWindow', variable.com.GetCustomerDetails_isEnabled)
                        expect(Response.body.data.imagePack).to.have.property('hasGroupPack', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.account).to.have.property('number', variable.com.GetCustomerDetails_number)
                        expect(Response.body.data.account).to.have.property('noOfAccounts', variable.com.GetCustomerDetails_noOfAccounts)
                       /*  expect(Response.body.data.iq.group).to.have.property('id', variable.com.GetCustomerDetails_id)
                        expect(Response.body.data.iq.group).to.have.property('isEditorial', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('isGeoRestricted', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('indemnification', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('collectionType', variable.com.GetCustomerDetails_collectionType)
                        expect(Response.body.data.iq.group).to.have.property('isAdGroup', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('customSchemeKey', variable.com.GetCustomerDetails_licenseType)
                        expect(Response.body.data.iq.group).to.have.property('saveExtraDetailsPerSession', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('showExtraDetailsOnPurchase', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('showAdditionalDetails', variable.com.GetCustomerDetails_additionalDetails)
                        expect(Response.body.data.iq.group).to.have.property('groupContactDetails', variable.com.GetCustomerDetails_groupContactDetails)
                        expect(Response.body.data.iq.group).to.have.property('contactName', variable.com.GetCustomerDetails_contactName)
                        expect(Response.body.data.iq.group).to.have.property('contactNumber', variable.com.GetCustomerDetails_contactNumber) */
                        expect(Response.body.data.iq).to.have.property('hasRFLicense', variable.com.GetCustomerDetails_isEnabled)
                        expect(Response.body.data.iq).to.have.property('masterLicenseId', variable.com.GetCustomerDetails_masterLicenseId)
                        
                    })
                })
        })
    })

    it('VerifyUserPasswordWithUserId', () => {
        var userdata;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => {
            userdata =
            {
                "userId": user.userforpwdverify,
                "cid": null,
                "password": user.password,
                "downloadType": user.downloadType,
            }
            cy.request('POST', Cypress.env('baseurl') + '/microservices/users/manageusers.asmx/VerifyUserPassword', userdata).then((response) => {
                expect(response.status).equal(200)
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => {
                    expect(response.body.data.cookies[0].name).equals(variable.com.nameAuthocd)
                    expect(response.body.data.cookies[0]).to.have.property('value')
                    expect(response.body.data.cookies[0].path).equals(variable.com.path)
                    expect(response.body.data.cookies[0].expires).equals(variable.com.expires1)
                    expect(response.body.data.cookies[0].secure).equals(variable.com.secure)
                    expect(response.body.data.cookies[1].name).equals(variable.com.nameAlamyUserId)
                    expect(response.body.data.cookies[1]).to.have.property('value')
                    expect(response.body.data.cookies[1].path).equals(variable.com.path)
                    expect(response.body.data.cookies[1].expires).equals(variable.com.expires2)
                    expect(response.body.data.cookies[1].secure).equals(variable.com.secure)
                    expect(response.body.data.cookies[2].name).equals(variable.com.nameCID)
                    expect(response.body.data.cookies[2]).to.have.property('value')
                    expect(response.body.data.cookies[2].path).equals(variable.com.path)
                    expect(response.body.data.cookies[2].expires).equals(variable.com.expires1)
                    expect(response.body.data.cookies[2].secure).equals(variable.com.secure)
                })
            })
        })
    })

    it('VerifyUserPasswordWIthoutUserId', () => {
        var passwordVerify;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => {
            passwordVerify =
            {
                "userId": "",
                "cid": user.cid,
                "password": user.password,
                "downloadType": user.downloadType
            }
            cy.request('POST', Cypress.env('baseurl') + '/microservices/users/manageusers.asmx/VerifyUserPassword', passwordVerify).then((Response => {
                expect(Response.status).equal(200)
                expect(Response).to.have.property('headers')
                //expect(Response.body.data.cookie).to.have.property('secretKey')
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => {
                    expect(Response.body.data.cookies[0].expires).equals(variable.com.expires3)
                    expect(Response.body.data.cookies[0].secure).equals(variable.com.secureFalse)
                    //expect(Response.body.data.cookie).to.have.property('expires',variable.com.GetCustomerDetails_superUserPrivileges)
                    //expect(Response.body.data.cookie).to.have.property('secure',variable.com.GetCustomerDetails_isContributor)
                    expect(Response.body.data.cookies[0]).to.have.property('secretKey')
                })
            }))
        })
    })

    it('showPasswordPromptValid', () => {
        var userdata;
        cy.fixture('apivariable').as('alamyapivariable');
        cy.get('@alamyapivariable').then(user => {
            userdata =
            {

                "userId": user.userId2,
                "authOcd": user.authOcd2,
                "downloadType": user.downloadType,
                "isIntranet": user.isIntranetYes
            }
            cy.request('POST', Cypress.env('baseurl') + '/microservices/users/manageusers.asmx/ShowPasswordPrompt', userdata).then((response) => {
                expect(response.status).equal(200)
                cy.fixture('variables').as('alamyvariable');
                cy.get('@alamyvariable').then(variable => {
                    expect(response.body.data).to.have.property('showPasswordPrompt', variable.com.isFalse)
                })
            })
        })


        it('showPasswordPromptInvalid', () => {
            var InvalidUserData;
            cy.fixture('apivariable').as('alamyapivariable');
            cy.get('@alamyapivariable').then(user => {
                InvalidUserData =
                {
                    "userId": "",
                    "authOcd": user.authOcd2,
                    "downloadType": user.downloadType,
                    "isIntranet": user.isIntranetNo
                }
                cy.request('POST', Cypress.env('baseurl') + '/microservices/users/manageusers.asmx/ShowPasswordPrompt', InvalidUserData).then((Response => {
                    expect(Response.status).equal(200)
                    cy.fixture('variables').as('alamyvariable');
                    cy.get('@alamyvariable').then(variable => {
                        expect(Response.body.data).to.have.property('showPasswordPrompt', variable.com.isTrue)
                    })
                }))
            })
        })
    })
})
