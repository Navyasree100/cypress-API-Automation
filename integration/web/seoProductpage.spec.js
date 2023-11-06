import seoImagePage from '../../support/global/seoImagePage'
const imagePage = new seoImagePage()
var baseurl=Cypress.env('baseurl')
var languageUrl = baseurl.slice(-3);

describe('Check caption is shown below the similar images', () => {
    it("Check caption is shown below the similar images", () => {
    
        imagePage.seoImagePageLoad('similarImageCaption')
        imagePage.similarImageCaption(languageUrl)
   
})
})

// describe("Check image with REFS in caption first image", () => {
//     it("Check image with REFS in caption", () => {

//         imagePage.seoImagePageLoad('refsInCaptionOne')
//         imagePage.refsInCaptionOne(languageUrl)
        
//     });
//   });

//   describe("Check image with REFS in caption second image", () => {
//     it("Check image with REFS in caption", () => {

//         imagePage.seoImagePageLoad('refsInCaptionSecond')
//         imagePage.refsInCaptionSecond(languageUrl)
        
//     });
//   });

//   describe("Check image with REFS in caption third image", () => {
//     it("Check image with REFS in caption", () => {

//         imagePage.seoImagePageLoad('refsInCaptionThird')
//         imagePage.refsInCaptionThird(languageUrl)
//     });
//   });

// describe("Check image page with caption", () => {
//   it("Check image page with caption", () => {

//     imagePage.seoImagePageLoad('imagepagewithCaption')

//     imagePage.imagepagewithCaption(languageUrl)
    
//   });
// });

// describe("Check image page without caption", () => {
//   it("Check image page without caption", () => {
//     imagePage.seoImagePageLoad('imageWithoutCaption')
//     imagePage.imageWithoutCaption(languageUrl)

//   });
// });

// describe("Check image page with similars", () => {
//   it("Check image page with similars", () => {
//     imagePage.seoImagePageLoad('imagePageWithSimilars')
//     imagePage.imagePageWithSimilars(languageUrl)
    
//   });
// });

// describe("Check image page without similars", () => {
//   it("Check image page with similars", () => {
//     imagePage.seoImagePageLoad('imagepageWithoutSimilars')
//     imagePage.imagepageWithoutSimilars(languageUrl)
//   });
// });

// describe("Check image page with keywords", () => {
//   it("Check image page with keywords", () => {
//     imagePage.seoImagePageLoad('imageWithKeywords')
//     imagePage.imageWithKeywords(languageUrl)
    
//   });
// });


// describe("Check image page without keywords", () => {
//   it("Check image page without keywords", () => {
//     imagePage.seoImagePageLoad('imageWithourKeywords')
//     imagePage.imageWithourKeywords(languageUrl)
    
//   });
// });

// describe("Check image page with more info (without deswcription)", () => {
//   it("Check image page with more info (without description)", () => {
//     imagePage.seoImagePageLoad('imageWithoutDescription')
//     imagePage.imageWithoutDescription(languageUrl)
//   });
// });

// describe("Check image page with more info (actual description)", () => {
//   it("Check image page with more info (actual description)", () => {
//    imagePage.seoImagePageLoad('imageWithActualDescription')
//    imagePage.imageWithActualDescription(languageUrl)
//   });
// });

// describe("Check image page with more info (actual & historical desc.)", () => {
//   it("Check image page with more info (actual & historical desc.)", () => {
//     imagePage.seoImagePageLoad('imageWithActualAndHistoricalDesc')
//     imagePage.imageWithActualAndHistoricalDesc(languageUrl)
//   });
// });

// describe("Check Vector page with caption", () => {
//   it("Check Vector page with caption", () => {
//     imagePage.seoImagePageLoad('vectorWithCaption')
//     imagePage.vectorWithCaption(languageUrl)
    
//   });
// });

// describe("Check Vector page without caption", () => {
//   it("Check Vector page without caption", () => {
//     imagePage.seoImagePageLoad('vectorWithoutCaption')
//     imagePage.vectorWithoutCaption(languageUrl)
//   });
// });

// describe("Check Vector page with similars", () => {
//   it("Check Vector page with similars", () => {
//     imagePage.seoImagePageLoad('vectorWithSimilars')
//     imagePage.vectorWithSimilars(languageUrl)
//   });
// });

// describe("Check Vector page without similars", () => {
//   it("Check Vector page without similars", () => {
//     imagePage.seoImagePageLoad('vectorWithoutSimilars')
//     imagePage.vectorWithoutSimilars(languageUrl)
    
//   });
// });


// describe("Check Vector page with keywords", () => {
//   it("Check Vector page with keywords", () => {
//     imagePage.seoImagePageLoad('vectorWithKeywords')
//     imagePage.vectorWithKeywords(languageUrl)

    
//   });
// });


// describe("Check Vector page with more info (actual description)", () => {
//   it("Check Vector page with more info (actual description)", () => {
//    imagePage.seoImagePageLoad('vectorActualDescription')
//    imagePage.vectorActualDescription(languageUrl)
    
//   });
// });

// describe("Check Vector page with more info (without description)", () => {
//   it("Check Vector page with more info (without description)", () => {
//     imagePage.seoImagePageLoad('vectorWithoutDescription')
//     imagePage.vectorWithoutDescription(languageUrl)
   
//   });
// });

// describe("Check 360 page with caption", () => {
//   it("Check 360 page with caption", () => {
//     imagePage.seoImagePageLoad('360WithCaption')
//     imagePage.threeSixtyWithCaption(languageUrl)
//   });
// });

// describe("Check 360 page without caption", () => {
//   it("Check 360 page without caption", () => {
//     imagePage.seoImagePageLoad('360WithoutCaption')
//     imagePage.threeSixtyWithOutCaption(languageUrl)
    
//   });
// });

// describe("Check 360 page with similars", () => {
//   it("Check 360 page with similars", () => {
//     imagePage.seoImagePageLoad('360WithSimilars')
//     imagePage.threeSixtyWithSimilars(languageUrl)
//   });
// });

// describe("Check 360 page without similars", () => {
//   it("Check 360 page without similars", () => {
//     imagePage.seoImagePageLoad('360WithoutSimilars')
//     imagePage.threeSixtyWithoutSimilars(languageUrl)
//   });
// });

// describe("Check 360 page with keywords", () => {
//   it("Check 360 page with keywords", () => {
//     imagePage.seoImagePageLoad('360WithKeywords')
//     imagePage.threeSixtyWithKeywords(languageUrl)
    
//   });
// });

// describe("Check 360 page without keywords", () => {
//   it("Check 360 page without keywords", () => {
//     imagePage.seoImagePageLoad('360WithoutKeywords')
//     imagePage.threeSixtyWithoutKeywords(languageUrl)
    
//   });
// });

// describe("Check 360 page with more info (actual description))", () => {
//   it("Check 360 page with more info (actual description)", () => {
//    imagePage.seoImagePageLoad('360WithActualDescription')
//    imagePage.threeSixtyWithActualDescription(languageUrl)
    
//   });
// });

// describe("Check 360 page with more info (without description))", () => {
//   it("Check 360 page with more info (without description)", () => {
//     imagePage.seoImagePageLoad('360WithoutDescription')
//     imagePage.threeSixtyWithOutDescription(languageUrl)
    
//   });
// });

// describe("Verify exclude the self-referencing similar result", () => {
//   it("Check to verify exclude the self-referencing similar result", () => {
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar1(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar2(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar3(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar4(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar5(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar6(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar7(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar8(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar9(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar10(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar11(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
//     imagePage.selfreferSimilar12(languageUrl)
//     imagePage.seoImagePageLoad('selfreferSimilar')
    
//   });
// });


// describe("Check 12 similars maximum are shown ", () => {
//   it("Check 12 similars maximum are shown", () => {
//     imagePage.seoImagePageLoad('12Similars')
//     imagePage.twelveSimilars(languageUrl)
    
//   });
// });

// describe("Check similars less than 12", () => {
//   it("Check similars less than 12", () => {
//     imagePage.seoImagePageLoad('similarsLessthan12')
//     imagePage.similarsLessthan12(languageUrl)
    
//   });
// });

// describe("Check Heading Tags H1", () => {
//   it("Check Heading Tags H1", () => {
//     imagePage.seoImagePageLoad('headingTagsH1')
//     imagePage.headingTagsH1(languageUrl)
    
//   });
// });

// describe("Check Heading Tags H2", () => {
//   it("Check Heading Tags H2", () => {
//     imagePage.seoImagePageLoad('headingTagsH1')
//     imagePage.headingTagsH2(languageUrl)
//   });
// });


// describe("Check Heading Tags similar images", () => {
//   it("Check Heading Tags similar images", () => {
//     imagePage.seoImagePageLoad('headingTagsH1')
//     imagePage.headingTagsSimilarImage(languageUrl)
//   });
// });

// describe("Check ImageObject schema keywords (first 40 keywords))", () => {
//   it("Check ImageObject schema keywords (first 40 keywords)", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.fortyKeywords(languageUrl)
//   });
// });

// describe("Check Language selector in footer should be nofollowed and check its linked urls", () => {
//   it("Check Language selector in footer URLs", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.deCheck('de');
//     imagePage.esCheck('es');
//     imagePage.frCheck('fr');
//     if(languageUrl=='com')
//     {
//       imagePage.itCheck('it');
//     }
    
//     if(languageUrl=='.it')
//     {
//       imagePage.enCheck('en');
//     }
    
//   });
// });

// if (Cypress.env("isMobile")) {
//   describe(
//     "Check Save preview image link on 1300 image is hidden in mobile",
//     {},
//     () => {
//       it("Save preview image link on 1300 image is hidden in mobile", () => {
//       imagePage.seoImagePageLoad('similarImageCaption')
//       imagePage.imagehiddenMobile(languageUrl)

      
//       });
//     }
//   );
// }

////if (Cypress.env('isDesktop')) {
// describe("Check to confirm all components are loaded", () => {
//   it("Verfiy all components are loaded)", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.headerCheck(languageUrl);
//     imagePage.searchBar(languageUrl);
//     imagePage.imageSection(languageUrl);
//     imagePage.keyWordSection(languageUrl)
//     imagePage.similarStockImages(languageUrl)
//     imagePage.footerSection(languageUrl)
     
//   });
// });
////}

// describe("301 redirection is implemented correctly", () => {
//   it("301 redirection is implemented correctly", () => {
//     if(languageUrl=='com')
//     {
//       imagePage.threezerooneredirect('301redirect','redirectedurl')
//     }
//     if(languageUrl=='.it')
//     {
//     imagePage.threezerooneredirectde('301redirectde','redirectedurlde')
//     }
//   });
// });

// describe("410 status is served for deleted image pages", () => {
//   it("410 status is served for deleted image pages", () => {
//     if(languageUrl=='com')
//     {
//     imagePage.deletedImagefourTenEn('deletedImage410')
//     }
//     if(languageUrl=='.it')
//     {
//       imagePage.deletedImagefourTenIT('deletedImage410IT')
//     }
    
//   });
// });

// describe("Check trailing slashes in urls", () => {
//   it("Check trailing slashes in urls", () => {
//     imagePage.trailingslashen('trailingSlashesurlsen')
//     imagePage.trailingslashit('trailingSlashesurlsIt')
//   });
// });

// describe("Check all linked URLs-keywordfirst", () => {
//   it("Check keywordfirst", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.linkedUrlsKeywordsFirst(languageUrl)
//   });
// });

// describe("Check all linkedF URLs-keywordlast", () => {
//   it("Check keywordlast", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.linkedUrlsKeywordsFirst(languageUrl)
    
//   });
// });

// describe("Check all similars-similarsfirst", () => {
//   it("Check similarsfirst", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.linkedUrlsSimilarsfirst(languageUrl)
    
    
//   });
// });


// describe("Check all similars-similarslast", () => {
//   it("Check similarslast", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.linkedUrlsSimilarslast(languageUrl)
    
//   });
// });

// describe("Check footer url LicenseAndPricing", () => {
//   it("Check LicenseAndPricing", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerLicenseAndPricing('footerLicenseAndPricingen')
//     if(languageUrl=='.it')
//     imagePage.footerLicenseAndPricingit('footerLicenseAndPricingit')
    
//   });
// });

// describe("Check footer url Browse by category", () => {
//   it("Check Browse by category", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerCategoryen('footerCategorysen')
//     if(languageUrl=='.it')
//     imagePage.footerCategoryit('footerCategorysit')
    
//   });
// });

// describe("Check footer url fresh-picks", () => {
//   it("Check fresh-picks", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerFreshpicksen('footerFreshpickssen')
//     if(languageUrl=='.it')
//     imagePage.footerFreshpicksIt('footerFreshpicksIt')
    
//   });
// });

// if(languageUrl=='com')
// describe("Check footer url footage-gallery", () => {
//   it("Check footage-gallery", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerFootageGalleryen('footerFootageGalleryeng')
    
    
//   });
// });

// if(languageUrl=='com')
// describe("Check footer url Live news feed", () => {
//   it("Check Live news feed", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerLiveNews('footerLiveNewsfeed')
    
//   });
// });
// if(languageUrl=='com')
// describe("Check footer url Customer help", () => {
//   it("Check Customer help", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerCustomerhelp('footerCustomerhelp')
    
//   });
// });

// describe("Check footer url BecomeContributor", () => {
//   it("Check BecomeContributor", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerBecomeContributoren('footerBecomeContributoren')
//     if(languageUrl=='.it')
//     imagePage.footerBecomeContributorit('footerBecomeContributorit')
    
//   });
// });
// if(languageUrl=='com')
// describe("Check footer url ContributorHomepage", () => {
//   it("Check ContributorHomepage", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerContributorHomepage('footerContributorHomepage')
    
//   });
// });
// if(languageUrl=='com')
// describe("Check footer url Stockimo", () => {
//   it("Check Stockimo", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerStockimo('footerStockimo')
    
//   });
// });
// if(languageUrl=='com')
// describe("Check footer url ContributorContract", () => {
//   it("Check ContributorContract", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerContributorContract('footerContributorContract')
//     cy.get("#automationContributorContract").click();
//     cy.url().should("include", "https://www.alamy.com/terms/contributor.aspx");
//   });
// });

// describe("Check footer url AboutUs", () => {
//   it("Check AboutUs", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerAboutUsen('footerAboutUsen')
//     if(languageUrl=='.it')
//     imagePage.footerAboutUsIt('footerAboutUsIt')
    
//   });
// });

// if(languageUrl=='com')
// describe("Check footer url MeetTheTeam", () => {
//   it("Check MeetTheTeam", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerMeetTheTeam('footerMeetTheTeam')
    
//   });
// });

// if(languageUrl=='com')
// describe("Check footer url WorkforUs", () => {
//   it("Check WorkforUs", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerWorkforUs('footerWorkforUs')
//   });
// });

// if(languageUrl=='com')
// describe("Check footer url OurAffiliateProgram", () => {
//   it("Check OurAffiliateProgram", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.footerOurAffiliateProgram('footerOurAffiliateProgram')
//   });
// });

// describe("Check footer url ContactUs", () => {
//   it("Check ContactUs", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerContactUsen('footerContactUsen')
//     if(languageUrl=='.it')
//     imagePage.footerContactUsit('footerContactUsit')
   
//   });
// });

// describe("Check footer url Terms and Conditions", () => {
//   it("Check Terms and Conditions", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerConditionsen('footerConditionsen')
//     if(languageUrl=='.it')
//     imagePage.footerConditionsit('footerConditionsit')
    
//   });
// });

// describe("Check footer url Copyrights", () => {
//   it("Check Copyrights", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerCopyrightsen('footerCopyrightsen')
//     if(languageUrl=='.it')
//     imagePage.footerCopyrightsit('footerCopyrightsit')
    
//   });
// });


// describe("Check footer url Sitemap", () => {
//   it("Check Sitemap", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     if(languageUrl=='com')
//     imagePage.footerSitemapen('footerSitemapen')
//     if(languageUrl=='.it')
//     imagePage.footerSitemapit('footerSitemapit')
    
//   });
// });

// describe("Check footer url Socialmedia", () => {
//   it("Check Socialmedia", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.socialMediaFB()
//     imagePage.socialMediaYoutube()
//     imagePage.socialMediaInstagram()
//     imagePage.socialMediaLinkedin()
//     imagePage.socialMediaPinterest()
//     imagePage.socialMediaTwitter()
    
//     });
//   })


// describe("Check header url-Alamyicon,Cart", () => {
//   it("Check Alamyicon,Cart", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.headerAlamyicon('headerAlamyicon','headerAlamyiconit',languageUrl)
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.headerCart('headerCart','headerCartit',languageUrl)
    
// });
// })

// describe("Check contributor search", () => {
//   it("Check contributor search", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.contributorSearch('contributorSearch')
    
//   });
// });
 

// describe("Check language hreflang tag should match the canonical tag", () => {
//   it("Check language hreflang tag should match the canonical tag", () => {
//     imagePage.seoImagePageLoad('similarImageCaption')
//     imagePage.hreflangAndCanonical(languageUrl)
    
//   });
// });


// describe("Check truncation is applied for hero image URL for seq < 177648959 ", () => {
//   it("Check truncation is applied   for hero image URL for seq < 177648959", () => {
//     imagePage.seoImagePageLoad('truncationHeroimageLess')
//     imagePage.truncationHeroimageL('truncationHeroimageL','truncationHeroimageLit',languageUrl)
    
//   });
// });

// describe("Check truncation is not applied for hero image URL for seq > 177648959", () => {
//   it("Check truncation is not for hero image URL for seq > 177648959", () => {
//     imagePage.seoImagePageLoad('truncationHeroimageGreat')
//     imagePage.truncationHeroimageG('truncationHeroimageG','truncationHeroimageGIT',languageUrl)
  
//   });
// });


// describe("Check vector Title Tag - <EN caption> Stock Vector Image & Art - Alamy", () => {
//   it("Check Title Tag - <EN caption> Stock Vector Image & Art - Alamy", () => {
//     imagePage.seoImagePageLoad('vectorTitleTag')
//     imagePage.vectorTitleTagCheck('vectorTitleTagCheck','vectorTitleTagCheckIt',languageUrl)
    
//   });
// });

// describe("Check vector Title Tag truncation with seq < 177648959", () => {
//   it("Check Title Tag truncation with seq < 177648959", () => {

//     imagePage.seoImagePageLoad('vectorTitleTagTrunc')
//     imagePage.vectorTitleTagTrunction('vectorTitleTagTrunction','vectorTitleTagTrunctionIt',languageUrl)
    
    
//   });
// });

// describe("Check vector Title Tag is not truncated with seq > 177648959", () => {
//   it("Check Title Tag is not truncated with seq > 177648959", () => {

//     imagePage.seoImagePageLoad('vectorTitleTagTruncGreat')
//     imagePage.vectorTitleTagTrunctionGreat('vectorTitleTagTrunctionGreat','vectorTitleTagTrunctionGreatIt',languageUrl)
   
//   });
// });

// describe("Check vector Meta description", () => {
//   it("Check vector Meta description", () => {

//     imagePage.seoImagePageLoad('vectorMeta')
//     imagePage.vectorMetaDesc('vectorMetaDesc','vectorMetaDescIT',languageUrl)
    
   
//   });
// });

// describe("Check vector Meta description truncation with seq < 177648959", () => {
//   it("Check vector Meta description truncation with seq < 177648959", () => {

//     imagePage.seoImagePageLoad('vectorMetaTrunctaionL')
//     imagePage.vectorMetaTrunctaionLess('vectorMetaTrunctaionLess','vectorMetaTrunctaionLessIt',languageUrl)
    
   
//   });
// });


// describe("Check vector Meta description is not truncated with seq > 177648959", () => {
//   it("Check vector Meta description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTruncGreat')
//     imagePage.vectorMetaTrunctaionGreat('vectorMetaTrunctaionGreat','vectorMetaTrunctaionIT',languageUrl)
    
//   });
// });


// describe("Check vector OG title", () => {
//   it("Check vector OG title", () => {
//     imagePage.seoImagePageLoad('vectorTitleTag')
//     imagePage.vectorOGTitle('vectorOGTitle','vectorOGTitleIT',languageUrl)
    
//   });
// });

// describe("Check vector OG title truncation with seq < 177648959", () => {
//   it("Check vector OG title truncation with seq < 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTrunc')
//     imagePage.vectorOGTitleTruncationL('vectorOGTitleTruncationL','vectorOGTitleTruncationLIT',languageUrl)
    
//   });
// });


// describe("Check vector OG title is not truncated with seq > 177648959", () => {
//   it("Check vector OG title is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTruncG')
//     imagePage.vectorOGTitleTruncationG('vectorOGTitleTruncationG','vectorOGTitleTruncationGIT',languageUrl)
   
//   });
// });


// describe("Check vector twitter title", () => {
//   it("Check vector twitter title", () => {
//     imagePage.seoImagePageLoad('vectorTitleTag')
//     imagePage.vectorTwittertitle('vectorTwittertitle','vectorTwittertitleIT',languageUrl)
    
//   });
// });

// describe("Check vector twitter title truncation with seq < 177648959", () => {
//   it("Check vector twitter title truncation with seq < 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTrunc')
//     imagePage.vectorTwittertitleTruncL('vectorOGTitleTruncationL','vectorOGTitleTruncationLIT',languageUrl)
    
//   });
// });

// describe("Check vector twitter title is not truncated with seq > 177648959", () => {
//   it("Check vector twitter title is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTruncG')
//     imagePage.vectorTwittertitleTruncG('vectorOGTitleTruncationG','vectorOGTitleTruncationGIT',languageUrl)
    
//   });
// });


// describe("Check vector OG description", () => {
//   it("Check vector OG description", () => {
//     imagePage.seoImagePageLoad('vectorTitleTag')
//     imagePage.vectorOGDesc('vectorMetaDesc','vectorMetaDescIT',languageUrl)
//     //cy.document();
   
//   });
// });

// describe("Check vector OG description truncation with seq < 177648959", () => {
//   it("Check vector OG description truncation with seq < 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTrunc')
//     imagePage.vectorOGdescTr('vectorMetaTrunctaionLess','vectorMetaTrunctaionLessIt',languageUrl)
    
    
//   });
// });


// describe("Check vector OG description is not truncated with seq > 177648959", () => {
//   it("Check vector OG description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTruncG')
//     imagePage.vectorogdescLess('vectorogdescLess','vectorogdescLessIt',languageUrl)
    
//   });
// });

// describe("Check vector twitter description", () => {
//   it("Check vector twitter description", () => {
//     imagePage.seoImagePageLoad('vectorTitleTag')
//     imagePage.vectorTwitterDesc('vectorMetaDesc','vectorMetaDescIT',languageUrl)
    
//   });
// });

// describe("Check vector twitter description truncation with seq < 177648959", () => {
//   it("Check vector twitter description truncation with seq < 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTrunc')
//     imagePage.vectorTwitterdescLess('vectorMetaTrunctaionLess','vectorMetaTrunctaionLessIt',languageUrl)
    
//   });
// });


// describe("Check vector twitter description is not truncated with seq > 177648959", () => {
//   it("Check vector twitter description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('vectorTitleTagTruncG')
//     imagePage.vectorogTwittergreat('vectorogdescLess','vectorogdescLessIt',languageUrl)
    
//   });
// });

// describe("Check Title tag - 360° View of <EN caption> - Alamy", () => {
//   it("Check Title tag - 360° View of <EN caption> - Alamy", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threeSixtyTitle('threeSixtyTitle','threeSixtyTitleIT',languageUrl)
    
//   });
// });

// describe("Check 360 Title Tag is not truncated with seq > 177648959", () => {
//   it("Check 360 Title Tag is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.titleTrG('titleTren','titleTrit',languageUrl)
    
//   });
// });

// describe("Check 360 Meta description", () => {
//   it("Check 360 Meta description", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threesixtyMeta('threesixtyMeta','threesixtyMetaIt',languageUrl)
//     cy.document();
  
//    });
// });

// describe("Check 360 Meta description is not truncated with seq > 177648959", () => {
//   it("Check 360 Meta description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threeSixtyMetatruc('threeSixtyMetdaTru','threeSixtyMetdaTruIt',languageUrl)
    
//   });
// });

// describe("Check 360 OG title", () => {
//   it("Check 360 OG title", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threeSixtyOG('threeSixtyOg','threeSixtyOgIt',languageUrl)
    
//   });
// });

// describe("Check 360 OG title is not truncated with seq > 177648959", () => {
//   it("Check 360 OG title is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threesixtyOgTitlL('threesixtyOgTitlL','threesixtyOgTitlLIt',languageUrl)
    
//   });
// });

// describe("Check 360 twitter title", () => {
//   it("Check 360 twitter title", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threeSixtyOG('threeSixtyOg','threeSixtyOgIt',languageUrl)
    
//   });
// });

// describe("Check 360 twitter title truncation with seq > 177648959", () => {
//   it("Check 360 twitter title truncation with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threesixtyOgTitlL('threesixtyOgTitlL','threesixtyOgTitlLIt',languageUrl)
    
//   });
// });

// describe("Check 360 OG description", () => {
//   it("Check 360 OG description", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threesixtyMeta('threesixtyMeta','threesixtyMetaIt',languageUrl)
    
//   });
// });

// describe("Check 360 OG description is not truncated with seq > 177648959", () => {
//   it("Check 360 OG description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threeSixtyMetatruc('threeSixtyMetdaTru','threeSixtyMetdaTruIt',languageUrl)
    
//   });
// });

// describe("Check 360 twitter description", () => {
//   it("Check 360 twitter description", () => {
//     imagePage.seoImagePageLoad('threesixtyImage')
//     imagePage.threesixtyMeta('threesixtyMeta','threesixtyMetaIt',languageUrl)
    
//   });
// });

// describe("Check 360 twitter description is not truncated with seq > 177648959", () => {
//   it("Check 360 twitter description is not truncated with seq > 177648959", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threeSixtyMetatruc('threeSixtyMetdaTru','threeSixtyMetdaTruIt',languageUrl)
    
//   });
// });

// describe("Check 360 Caption", () => {
//   it("Check 360 Caption", () => {
//     imagePage.seoImagePageLoad('threesistyTitleTr')
//     imagePage.threeSixtyCaption('threeSixtyCaption','threeSixtyCaptionIt',languageUrl)

//   });
// });


// describe("Check to verify image count", () => {
//   it("Check to verify image count", () => {
//     cy.visit(Cypress.env('baseurl'))
//     cy.document();
//     cy.get('body div[class="tagline-text white h3-size"]')
//       .invoke("text")
//       .then(text => {
//         const desc = text;
//         if(languageUrl=='com')
//         {
//           imagePage.seoImagePageLoad('imageCountFooter')

//         }
//         if(languageUrl=='.it')
//         {

//           imagePage.seoImagePageLoad('imageCountFooterIt')

//         }
        
//         imagePage.imageCountCheck(desc)
        
//       });
//   });
// });


// describe('Check contact number', () => {
//     it("Check contact number", () => {
//     cy.visit(Cypress.env('baseurl'))
//     cy.get('#lblTelHeadr')
//       .invoke("text")
//       .then(text => {
//        const homepageContact = text;
//        const homepageContactWithoutSpace =homepageContact.replace(/\s/g, "")
//        imagePage.seoImagePageLoad('similarImageCaption')
//        imagePage.contactNumber(homepageContactWithoutSpace)
    
        
       
//       })
   
// })
// })
