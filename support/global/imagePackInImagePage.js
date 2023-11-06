class imagePackInImagePage
{
    login_packUser(domain)
    {
    cy.request('https://intwebbrown.alamy.'+domain+'/Alamyuser.asmx/Login?CaptchaResponse=8D9EDDAF-D469-48E6-9C97-2539721E165C&Email=depack@alamy.com&password=qatest123$$&langCode=en')
    }

    imagePage_license_personalUse_pack(domain)
    {
        cy.wait(500)
        cy.fixture('locator').as('alamyLocator');
        cy.fixture('validationmsgs').as('validmsgs');
        cy.get('@validmsgs').then(msgs=>
            {
            cy.get('@alamyLocator').then(loc=>
              {
                 const personalUseIdPack=cy.get(loc.com.personalUseIdPack)
                 const personalTitlePack=msgs[domain].personalTitlePack
                 personalUseIdPack.click({force: true}).contains(personalTitlePack)

                 const personalUseTittleXpathPack=cy.xpath(loc.com.personalUseTittleXpathPack)
                 const personalDescPack=msgs[domain].personalDescPack
                 personalUseTittleXpathPack.contains(personalDescPack)

                 const licenseToolTipXpathPath=cy.xpath(loc.com.licenseToolTipXpathPath)
                 licenseToolTipXpathPath.trigger('mouseover')

                 const licenseToolTipWrapperId=cy.get(loc.com.licenseToolTipWrapperId)
                 licenseToolTipWrapperId.contains(personalDescPack)

                 const personalUseCountXpathPack=cy.xpath(loc.com.personalUseCountXpathPack)
                 const personalUseCountPack=msgs[domain].personalUseCountPack
                 personalUseCountXpathPack.contains(personalUseCountPack)
              })
            })
        return this
    }

    imagePage_license_presentation_pack(domain)
    {
        cy.fixture('locator').as('alamyLocator');
        cy.fixture('validationmsgs').as('validmsgs');
        cy.get('@validmsgs').then(msgs=>
            {
            cy.get('@alamyLocator').then(loc=>
              {
                 const presentationUseIdPack=cy.get(loc.com.presentationUseIdPack)
                 const presentationTitlePack=msgs[domain].presentationTitlePack
                 presentationUseIdPack.click({force: true}).contains(presentationTitlePack)

                 const presentationTittleXpathPack=cy.xpath(loc.com.presentationTittleXpathPack)
                 const presentationDescPack=msgs[domain].presentationDescPack
                 presentationTittleXpathPack.contains(presentationDescPack)

                 const presentationToolTipXpathPath=cy.xpath(loc.com.presentationToolTipXpathPath)
                 presentationToolTipXpathPath.trigger('mouseover')

                 const licenseToolTipWrapperId=cy.get(loc.com.licenseToolTipWrapperId)
                 licenseToolTipWrapperId.contains(presentationDescPack)

                 const presentationCountXpathPack=cy.xpath(loc.com.presentationCountXpathPack)
                 const personalUseCountPack=msgs[domain].personalUseCountPack
                 presentationCountXpathPack.contains(personalUseCountPack)
              })
            })
        return this
    }

    imagePage_license_website_pack(domain)
    {
        cy.fixture('locator').as('alamyLocator');
        cy.fixture('validationmsgs').as('validmsgs');
        cy.get('@validmsgs').then(msgs=>
            {
            cy.get('@alamyLocator').then(loc=>
              {
                 const websiteIdPack=cy.get(loc.com.websiteIdPack)
                 const websiteTitlePack=msgs[domain].websiteTitlePack
                 websiteIdPack.click({force: true}).contains(websiteTitlePack)

                 const websiteTittleXpathPack=cy.xpath(loc.com.websiteTittleXpathPack)
                 const websiteDescPack=msgs[domain].websiteDescPack
                 websiteTittleXpathPack.contains(websiteDescPack)

                 const websiteToolTipXpathPath=cy.xpath(loc.com.websiteToolTipXpathPath)
                 websiteToolTipXpathPath.trigger('mouseover')

                 const licenseToolTipWrapperId=cy.get(loc.com.licenseToolTipWrapperId)
                 licenseToolTipWrapperId.contains(websiteDescPack)

                 const websiteCountXpathPack=cy.xpath(loc.com.websiteCountXpathPack)
                 const personalUseCountPack=msgs[domain].personalUseCountPack
                 websiteCountXpathPack.contains(personalUseCountPack)
              })
            })
        return this
    }

    imagePage_license_Marketing_package_Small_business_pack(domain)
    {
        cy.wait(500)
        cy.fixture('locator').as('alamyLocator');
        cy.fixture('validationmsgs').as('validmsgs');
        cy.get('@validmsgs').then(msgs=>
            {
            cy.get('@alamyLocator').then(loc=>
              {
                 const marketingPackageSmallBusinessIdPack=cy.get(loc.com.marketingPackageSmallBusinessIdPack)
                 const marketingPackageSmallBusinessTitlePack=msgs[domain].marketingPackageSmallBusinessTitlePack
                 marketingPackageSmallBusinessIdPack.click({force: true}).contains(marketingPackageSmallBusinessTitlePack)

                 const marketingPackageSmallBusinessTittleXpathPack=cy.xpath(loc.com.marketingPackageSmallBusinessTittleXpathPack)
                 const marketingPackageSmallBusinessDescPack=msgs[domain].marketingPackageSmallBusinessDescPack
                 marketingPackageSmallBusinessTittleXpathPack.contains(marketingPackageSmallBusinessDescPack)

                 const marketingPackageSmallBusinessToolTipXpathPath=cy.xpath(loc.com.marketingPackageSmallBusinessToolTipXpathPath)
                 marketingPackageSmallBusinessToolTipXpathPath.trigger('mouseover')

                 const licenseToolTipWrapperId=cy.get(loc.com.licenseToolTipWrapperId)
                 licenseToolTipWrapperId.contains(marketingPackageSmallBusinessDescPack)

                 const marketingPackageSmallBusinessCountXpathPack=cy.xpath(loc.com.marketingPackageSmallBusinessCountXpathPack)
                 const personalUseCountPack=msgs[domain].personalUseCountPack
                 marketingPackageSmallBusinessCountXpathPack.contains(personalUseCountPack)
              })
            })
        return this
    }

    imagePage_license_Marketing_package_Large_business_pack(domain)
    {
        cy.fixture('locator').as('alamyLocator');
        cy.fixture('validationmsgs').as('validmsgs');
        cy.get('@validmsgs').then(msgs=>
            {
            cy.get('@alamyLocator').then(loc=>
              {
                 const marketingPackageLargeBusinessIdPack=cy.get(loc.com.marketingPackageLargeBusinessIdPack)
                 const marketingPackageLargeBusinessTitlePack=msgs[domain].marketingPackageLargeBusinessTitlePack
                 marketingPackageLargeBusinessIdPack.click({force: true}).contains(marketingPackageLargeBusinessTitlePack)

                 const marketingPackageLargeBusinessTittleXpathPack=cy.xpath(loc.com.marketingPackageLargeBusinessTittleXpathPack)
                 const marketingPackageLargeBusinessDescPack=msgs[domain].marketingPackageLargeBusinessDescPack
                 marketingPackageLargeBusinessTittleXpathPack.contains(marketingPackageLargeBusinessDescPack)

                 const marketingPackageLargeBusinessToolTipXpathPath=cy.xpath(loc.com.marketingPackageLargeBusinessToolTipXpathPath)
                 marketingPackageLargeBusinessToolTipXpathPath.trigger('mouseover')

                 const licenseToolTipWrapperId=cy.get(loc.com.licenseToolTipWrapperId)
                 licenseToolTipWrapperId.contains(marketingPackageLargeBusinessDescPack)

                 const marketingPackageLargeBusinessCountXpathPack=cy.xpath(loc.com.marketingPackageLargeBusinessCountXpathPack)
                 const personalUseCountPack=msgs[domain].personalUseCountPack
                 marketingPackageLargeBusinessCountXpathPack.contains(personalUseCountPack)
              })
            })
        return this
    }

}
export default imagePackInImagePage