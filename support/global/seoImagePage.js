class seoImagePage
{

    seoImagePageLoad(imagepageURL)
    {
      cy.fixture('images').as('alamyImageurls');
        cy.get('@alamyImageurls').then(image => {
            var urlsecond
            urlsecond = image.com[imagepageURL]
            cy.visit(Cypress.env('baseurl')//+ urlsecond,
        {
        headers: {
            'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
          }
          
        });
      })
    }
    
    similarImageCaption(languageUrl)
    {

        if(languageUrl=='com')
        {
        cy.get("#automationSimilarImgCaption1").contains(
            "Portrait of boy wearing cap with friends"
          );
          cy.get("#automationSimilarImgCaption2").contains(
            "Little Girl Wearing Chef's Hat"
          );
          cy.get("#automationSimilarImgCaption3").contains(
            "A cheeky little boy sitting in a cornfield wearing a baseball cap, while out playing with friends"
          );
          cy.get("#automationSimilarImgCaption4").contains(
            "Little Girl Wearing Chef's Hat"
          );
          cy.get("#automationSimilarImgCaption5").contains(
            "A cheeky little boy sitting in a cornfield wearing a baseball cap, while out playing with friends"
          );
          cy.get('#automationSimilarImgCaption6').contains(
            "Portrait of Teenage Girl wearing Baseball Hat Looking at Camera, Standing in the Middle of Group of Teenage Boys and Grils"
          );

          cy.get('#automationSimilarImgCaption12').contains(
            "portrait of beautiful kid boys at happy birthday wearing holiday hat on head and holding ukulele, performing music. friendship, children, birthday con"
          );
          }

        if(languageUrl=='.it')
        {
            cy.get("#automationSimilarImgCaption1").contains(
                "Ritratto di ragazzo che indossa il cappuccio con gli amici"
              );
            cy.get("#automationSimilarImgCaption2").contains(
                "Bambina indossa Chef Hat"
              );
            cy.get("#automationSimilarImgCaption3").contains(
                "Un cheeky poco ragazzo seduto in un cornfield indossando un cappello da baseball, mentre fuori a giocare con gli amici"
              );
            cy.get("#automationSimilarImgCaption4").contains(
                "Bambina indossa Chef Hat"
              );
            cy.get("#automationSimilarImgCaption5").contains(
                "Un cheeky poco ragazzo seduto in un cornfield indossando un cappello da baseball, mentre fuori a giocare con gli amici"
              );
        }
     

    }

    refsInCaptionOne(languageUrl)
    {

        if(languageUrl=='com')
        {
          cy.get("#automationImageDescription").contains(
            "HOLLAND, 18TH CENTURY A family at a table in an interior..jpg - RFGN0J"
          );

        }
        if(languageUrl=='.it')
        {
        cy.get("#automationImageDescription").contains(
        "HOLLAND, XVIII secolo una famiglia a una tabella in un interno..jpg - RFGN0J"
        );
        }


    }
    refsInCaptionSecond(languageUrl)
    {
      
        if(languageUrl=='com')
        {
        
          cy.get("#automationImageDescription").contains(
            "Van Vechten, Carl, 1880-1964, photographer, Portrait of Artur Rubinstein.jpg - RB158X"
          );

        }

        if(languageUrl=='.it')
        {
        cy.get("#automationImageDescription").contains(
            "Van Vechten, Carl, 1880-1964, fotografo, Ritratto di Artur Rubinstein.jpg - RB158X"
        );
        }
        

    }

    refsInCaptionThird(languageUrl)
    {
     
        if(languageUrl=='com')
        {
        cy.get("#automationImageDescription").contains("I am watching you.jpg - R65437");

        }

        if(languageUrl=='.it')
        {
        cy.get("#automationImageDescription").contains(
            "Sto guardando lei.jpg - R65437"
        );
        }


    }

imagepagewithCaption(languageUrl)
{
  if(languageUrl=='com')
        {

        cy.get(".break-words").contains("Fluffy white Maltese dog on a pink studio background.");

        }

  if(languageUrl=='.it')
        {

        cy.get(".break-words").contains("Soffice bianco cane Maltese su una rosa di sfondo per studio.");

        }
}

imageWithoutCaption(languageUrl)
{
  if(languageUrl=='com')
        {

           cy.get(".break-words");

        }

  if(languageUrl=='.it')
        {

          cy.get(".break-words");

        }
}

imagePageWithSimilars(languageUrl)

{

  if(languageUrl=='com' || 'it')
        {

          cy.get("#automationSimilarImgThumb1");
          cy.get("#automationSimilarImgThumb2");
          cy.get("#automationSimilarImgThumb3");
          cy.get("#automationSimilarImgThumb4");
          cy.get("#automationSimilarImgThumb5");
          cy.get("#automationSimilarImgThumb6");
          cy.get("#automationSimilarImgThumb7");
          cy.get("#automationSimilarImgThumb8");
          cy.get("#automationSimilarImgThumb9");
          cy.get("#automationSimilarImgThumb10");
          cy.get("#automationSimilarImgThumb11");
          cy.get("#automationSimilarImgThumb12");

        }

 

}

imagepageWithoutSimilars(languageUrl)
{

  if(languageUrl=='com' || 'it')
        {
          cy.scrollTo(0, 700);
          cy.get("#automationSimilarImgThumb1").should("not.exist");

        }

}

imageWithKeywords(languageUrl)
{
    if(languageUrl=='com')
    {
      cy.get("#automationKeyWord1");
      cy.get("#automationKeyWord2");
      cy.get("#automationKeyWord3");
      cy.get("#automationKeyWord4");
      cy.get("#automationKeyWord5");
      cy.get("#automationKeyWord6");
      cy.get("#automationKeyWord7");
      cy.get("#automationKeyWord8");
      cy.get('#automationShowAll').click()
      cy.get("#automationKeyWord134");
      cy.get("#automationKeyWord135");
    }
    

    if(languageUrl=='.it')
    {
      cy.get("#automationKeyWord1");
      cy.get("#automationKeyWord2");
      cy.get("#automationKeyWord3");
      cy.get("#automationKeyWord4");
      cy.get("#automationKeyWord5");
      cy.get("#automationKeyWord6");
      cy.get("#automationKeyWord7");
      cy.get("#automationKeyWord8");
      cy.get("#automationKeyWord9");
      cy.get("#automationKeyWord10");
    }
   
}

imageWithourKeywords(languageUrl)
{
  if(languageUrl=='com' || 'it')
  cy.get("#automationKeyWord1").should("not.exist");
}

imageWithoutDescription(languageUrl)
{
  if(languageUrl=='com' || 'it')
  cy.get(".description__3Aeuv > :nth-child(4)").should("not.exist");
}

imageWithActualDescription(languageUrl)
{
  if(languageUrl=='com')
  {

    cy.get(".description__3Aeuv > :nth-child(4)").contains(
      "Golden grape vines. Beautiful view on the vineyards, Lavaux region, cloudy sky scape, part of Alps and lake Leman on the background. Canton Vaud, Switzerland"
    );
  }
    if(languageUrl=='.it')
    {
      cy.get(".description__3Aeuv > :nth-child(4) >").click();
      cy.get(".description__3Aeuv > :nth-child(4)").contains(
      "Golden grape vines. Beautiful view on the vineyards, Lavaux region, cloudy sky scape, part of Alps and lake Leman on the background. Canton Vaud, Switzerland"
    );
    }

}

imageWithActualAndHistoricalDesc(languageUrl)
{

  if(languageUrl=='com')
  {
    cy.get(".description__3Aeuv > :nth-child(5)").contains(
      "Task Force Marauder Soldiers with Det. 1, Charlie Company, 2-211th General Support Aviation Battalion, Iowa National Guard, conducted hot and cold load training with United States Marines in Afghanistan. The training covered safe loading and unloading of a medevac helicopter, as well as an overview of the mission and capabilities. Task Force Marauder consists of Soldiers from South Carolina National Guard, Illinois National Guard, Iowa National Guard, as well as active duty component and provides aviation capabilities with AH64 Apaches, UH60 Black Hawks, CH47 Chinooks, and medevac assets in Afghanistan under the 3rd Combat Aviation Brigade while deployed. (Photo provided by Capt. Mollie Marken, Task Force Marauder)"
    );;
  }
  if(languageUrl=='.it')
  {

    cy.get(".description__3Aeuv > :nth-child(5) >").click();
    cy.get(".description__3Aeuv > :nth-child(5)").contains(
      "Task Force Marauder Soldiers with Det. 1, Charlie Company, 2-211th General Support Aviation Battalion, Iowa National Guard, conducted hot and cold load training with United States Marines in Afghanistan. The training covered safe loading and unloading of a medevac helicopter, as well as an overview of the mission and capabilities. Task Force Marauder consists of Soldiers from South Carolina National Guard, Illinois National Guard, Iowa National Guard, as well as active duty component and provides aviation capabilities with AH64 Apaches, UH60 Black Hawks, CH47 Chinooks, and medevac assets in Afghanistan under the 3rd Combat Aviation Brigade while deployed. (Photo provided by Capt. Mollie Marken, Task Force Marauder)"
    );
  }

}

vectorWithCaption(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get(".break-words").contains(
      "AI Artificial intelligence Technology robot is cooking food design element vector illustration eps10"
    );
  }
  if(languageUrl=='.it')
  {
    cy.get(".break-words").contains(
      "AI Artificial Intelligence Technology robot è la cottura di cibo elemento di design illustrazione vettoriale EPS10"
    );
  }
}

vectorWithoutCaption(languageUrl)
{
  if(languageUrl=='com' || '.it')
  {
    cy.get(".break-words");
  }

}

vectorWithSimilars(languageUrl)
{
  if(languageUrl=='com' || '.it')
    cy.get("#automationSimilarImgThumb1");
    cy.get("#automationSimilarImgThumb2");
    cy.get("#automationSimilarImgThumb3");
    cy.get("#automationSimilarImgThumb4");
    cy.get("#automationSimilarImgThumb5");
    cy.get("#automationSimilarImgThumb6");
    cy.get("#automationSimilarImgThumb7");
    cy.get("#automationSimilarImgThumb8");
    cy.get("#automationSimilarImgThumb9");
    cy.get("#automationSimilarImgThumb10");
    cy.get("#automationSimilarImgThumb11");
    cy.get("#automationSimilarImgThumb12");

}

vectorWithoutSimilars(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb1").should("not.exist");
}

vectorWithKeywords(languageUrl)
{
    if(languageUrl=='com' || '.it')
    cy.get("#automationKeyWord1");
    cy.get("#automationKeyWord2");
    cy.get("#automationKeyWord3");
    cy.get("#automationKeyWord4");
    cy.get("#automationKeyWord5");
    cy.get("#automationKeyWord6");
    cy.get("#automationKeyWord7");
    cy.get("#automationKeyWord8");
    cy.get("#automationKeyWord9");
    cy.get("#automationKeyWord10");
    cy.get("#automationKeyWord11");
}

vectorActualDescription(languageUrl)
{

  if(languageUrl=='com')
  {
    cy.get(".description__3Aeuv > :nth-child(4)").contains(
      "Maze. Vector Illustration Of Labyrinth. Can Be Used For Wallpaper, Background, Book Cover."
    );
  }
  if(languageUrl=='.it')
  {
    cy.get(".description__3Aeuv > :nth-child(4) >").click();
    cy.get('.description__3Aeuv > :nth-child(4)').contains(
      "Maze. Vector Illustration Of Labyrinth. Can Be Used For Wallpaper, Background, Book Cover."
    );
  }

}

vectorWithoutDescription(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get(".description__3Aeuv > :nth-child(4)").should("not.exist");
}

threeSixtyWithCaption(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get(".break-words").contains(
      "360 Degree Panoramic: 360° view of Red Car River Park in Los Angeles, California."
    );

  }
  if(languageUrl=='.it')
  {
        cy.get(".break-words").contains(
      "Panoramica a 360 gradi: 360° vista di auto rossa River Park a Los Angeles, California."
    );
  }
}

threeSixtyWithOutCaption(languageUrl)
{

  if(languageUrl=='com')
  {
    cy.get(".break-words").contains("360 Degree Panoramic: Шахматная академия");
  }

  if(languageUrl=='.it')
  {
        cy.get(".break-words").contains(
      "Panoramica a 360 gradi: Шахматная академия"
    );
  }
  
}

threeSixtyWithSimilars(languageUrl)
{
  if(languageUrl=='com' || '.it')
    cy.get('#automationSimilarImgThumb1')
    cy.get('#automationSimilarImgThumb2')
    cy.get('#automationSimilarImgThumb3')
    cy.get('#automationSimilarImgThumb4')
    cy.get('#automationSimilarImgThumb5')
    cy.get('#automationSimilarImgThumb6')
    cy.get('#automationSimilarImgThumb7')
    cy.get('#automationSimilarImgThumb8')
    cy.get('#automationSimilarImgThumb9')
    cy.get('#automationSimilarImgThumb10')
    cy.get('#automationSimilarImgThumb11')
    cy.get('#automationSimilarImgThumb12')
}

threeSixtyWithoutSimilars(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb1").should("not.exist");
}

threeSixtyWithKeywords(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationKeyWord1");
    cy.get("#automationKeyWord2");
    cy.get("#automationKeyWord3");
    cy.get("#automationKeyWord4");
    cy.get("#automationKeyWord5");
    cy.get("#automationKeyWord6");
    cy.get("#automationKeyWord7");
    cy.get("#automationKeyWord8");
    cy.get("#automationKeyWord9");
    cy.get("#automationKeyWord10");
    cy.get("#automationKeyWord11");
    cy.get("#automationKeyWord12");
    cy.get("#automationKeyWord13");
    cy.get("#automationKeyWord14");
    cy.get("#automationKeyWord15");
    cy.get("#automationKeyWord16");
    cy.get("#automationKeyWord17");
    cy.get("#automationKeyWord18");
    cy.get("#automationKeyWord19");
    cy.get("#automationKeyWord20");
    cy.get("#automationKeyWord21");
    cy.get("#automationKeyWord22");
    cy.get("#automationKeyWord23");
    cy.get("#automationKeyWord24");
    //cy.get("#automationKeyWord25");
}
threeSixtyWithoutKeywords(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationKeyWord1").should("not.exist");
}

threeSixtyWithActualDescription(languageUrl)
{
  if(languageUrl=='com')
  cy.get(".description__3Aeuv > :nth-child(4)").contains(
    "Image with 3D spherical panorama with 360 degree viewing angle. Snowy winter in park with trees at the evening. Burning lanterns. Full equirectangular projection. Ready for virtual reality in vr."
  );
  if(languageUrl=='.it')
  {
    cy.get(".description__3Aeuv > :nth-child(4) >").click();
    cy.get(".description__3Aeuv > :nth-child(4)").contains(
      "Image with 3D spherical panorama with 360 degree viewing angle. Snowy winter in park with trees at the evening. Burning lanterns. Full equirectangular projection. Ready for virtual reality in vr."
    );
  }
}
threeSixtyWithOutDescription(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get(".description__3Aeuv > :nth-child(4)").should("not.exist");
}
selfreferSimilar1(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb1").click();
  cy.get('.pb-12.pl-10 > .light-navy')
    .contains("Image ID: FBCC64")
    .should("not.exist");
  
}
selfreferSimilar2(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb2").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar3(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb3").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}

selfreferSimilar4(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb4").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar5(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb5").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar6(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb6").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar7(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb7").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar8(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb8").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar9(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb9").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar10(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb10").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar11(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb11").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
selfreferSimilar12(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationSimilarImgThumb12").click();
    cy.get(".pb-12.pl-10 > .light-navy")
      .contains("Image ID: FBCC64")
      .should("not.exist");
}
twelveSimilars(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get(".imageHolder__39D19").should("have.length", 12);
}
similarsLessthan12(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get(".imageHolder__39D19").should("have.length", 4);
}
headingTagsH1(languageUrl)
{

  if(languageUrl=='com')
  {
    cy.get(".break-words").contains(
      "Dame Judi Dench was presented with a sapling elm tree to launch the re-elming of the British Countryside starting this year. Hillier Nurseries, RHS Chelsea Flower Show, Royal Hospital, London. UK"
    );
  }
  if(languageUrl=='.it')
  {
    cy.get(".break-words").contains(
      "A Dame Judi Dench è stato presentato un albero di alci seghero per lanciare il rielming della campagna britannica a partire da quest'anno. Hillier Nurseries, RHS Chelsea Flower Show, Royal Hospital, Londra."
    );
  }

}
headingTagsH2(languageUrl)
{

  if(languageUrl=='com')
  {
    cy.get(".mb-20 > .text-lg").contains("Search stock photos by tags");
  }
  if(languageUrl=='.it')
  {
    cy.get(".mb-20 > .text-lg").contains(
      "Parole chiave associate all'immagine"
    );
  }

}

headingTagsSimilarImage(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get(".similarImageSectionHeader").contains("Similar stock images");
  }
  if(languageUrl=='.it')
  {
    cy.get(".similarImageSectionHeader").contains("Immagini Simili");
  }
}

fortyKeywords(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get('body span[itemprop="keywords"]').should("have.length", 40);
}

deCheck(pageURL) {
  cy.fixture('images').as('alamyurls');
        cy.get('@alamyurls').then(image => {
            var siteURL
            siteURL = image.url[pageURL]
        
  cy.get("#automationHttpCultureDeutsch").then(function($a) {
    const href = $a.prop("href");
    const nofo = $a.prop("rel");
    expect(href).equal(siteURL);
    expect(nofo).equal("nofollow");
    cy.get(".relative > .Button_btn__1ggBs").click();
  });
})
}

esCheck(pageURL) {
  cy.fixture('images').as('alamyurls');
        cy.get('@alamyurls').then(image => {
            var siteURL
            siteURL = image.url[pageURL]
      cy.get("#automationHttpCultureSpanish").then(function($a) {
        const href = $a.prop("href");
        const nofo = $a.prop("rel");
        expect(href).equal(siteURL);
        expect(nofo).equal("nofollow");
        cy.get(".relative > .Button_btn__1ggBs").click();
      });
    })
    }

   frCheck(pageURL) {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[pageURL]
      cy.get("#automationHttpCultureFrench").then(function($a) {
        const href = $a.prop("href");
        const nofo = $a.prop("rel");
        expect(href).equal(siteURL);
        expect(nofo).equal("nofollow");
        cy.get(".relative > .Button_btn__1ggBs").click();
      });
    })
    }

   itCheck(pageURL) {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[pageURL]
      cy.get("#automationHttpCultureItalian").then(function($a) {
        const href = $a.prop("href");
        const nofo = $a.prop("rel");
        expect(href).equal(siteURL);
        expect(nofo).equal("nofollow");
        cy.get(".relative > .Button_btn__1ggBs").click();
      });
    })
    }
   enCheck(pageURL) {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[pageURL]
      cy.get("#automationHttpCultureEnglish").then(function($a) {
        const href = $a.prop("href");
        const nofo = $a.prop("rel");
        expect(href).equal(siteURL);
        expect(nofo).equal("nofollow");
        cy.get(".relative > .Button_btn__1ggBs").click();
      });
    })
    }

imagehiddenMobile(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get(
    'body a[href="https://c8.alamy.com/comp/E705D8/portrait-of-boy-wearing-cap-with-friends-E705D8.jpg"]'
  ).should("not.exist");
}
headerCheck(languageUrl)
{
  if(languageUrl=='com' || '.it')
  cy.get("#automationAlamyLogo");
  cy.get("#headerlightbox");
  cy.get(
    "#automationShoppingCartGuest > .Header_linksIconWrapper__31jJ1 > .svg-inline--fa"
  );
  cy.get("#automationShoppingCartGuest");
  cy.get(
    "#automationAccount > .Header_linksIconWrapper__31jJ1 > .svg-inline--fa"
  );
  cy.get("#automationAccount");
  cy.get(".Header_headerWrapper__3YFSq");
}

searchBar(languageUrl) {
  if(languageUrl=='com' || '.it')
  cy.get(".ImageSearch_dropDownTrigger__H3_7q");
  cy.get("#txtSearchImage");
  cy.get(".ImageSearch_cameraButtonWrapper__37s9c > .Button_btn__1ggBs");
  cy.get(".right-0 > .Button_btn__1ggBs");
}

imageSection(languageUrl) {
  if(languageUrl=='com' || '.it')
  cy.get(".break-words");
  cy.get(".pr-10 > .text-light-navy-500");
  cy.get('#automationHeroImage')
  cy.get(".mainImage");
  cy.get('#automationEnlargeButton')
  cy.get("#automationImageDescription");
  cy.get('#automationContributorName')
  cy.get('#automationContributor')
  cy.get('#automationImageID')
  cy.get('#automationLocation')
  cy.get(":nth-child(4) > strong");
  cy.get(".description__3Aeuv > :nth-child(4)");
}

keyWordSection(languageUrl) {
  if(languageUrl=='com')
  {
    cy.get('#automationStockPhotoKeywordTitle')
    cy.get('#automationKeyWord1')
    cy.get('#automationKeyWord2')
    cy.get('#automationKeyWord3')
    cy.get('#automationKeyWord4')
    cy.get('#automationKeyWord5')
    cy.get('#automationKeyWord6')
    cy.get('#automationKeyWord7')
    cy.get('#automationKeyWord8')
    cy.get('#automationShowAll').click();
    cy.get('#automationKeyWord73')
  }
  if(languageUrl=='.it')
  {
    cy.get('#automationStockPhotoKeywordTitle')
    cy.get('#automationKeyWord1')
    cy.get('#automationKeyWord2')
    cy.get('#automationKeyWord3')
    cy.get('#automationKeyWord4')
    cy.get('#automationKeyWord5')
    cy.get('#automationKeyWord6')
    cy.get('#automationKeyWord7')
    cy.get('#automationKeyWord8')
    cy.get('#automationShowAll').click();
    cy.get("#automationKeyWord68");
  }
 
}

similarStockImages(languageUrl) {

  if(languageUrl=='com' || '.it')
  cy.get(".similarImageSectionHeader")
  cy.get("#automationSimilarImgThumb1")
  cy.get("#automationSimilarImgThumb2")
  cy.get("#automationSimilarImgThumb3")
  cy.get("#automationSimilarImgThumb4")
  cy.get("#automationSimilarImgThumb5")
  cy.get("#automationSimilarImgThumb6")
  cy.get("#automationSimilarImgThumb7")
  cy.get("#automationSimilarImgThumb8")
  cy.get("#automationSimilarImgThumb9")
  cy.get("#automationSimilarImgThumb10")
  cy.get("#automationSimilarImgThumb11")
  cy.get("#automationSimilarImgThumb12")
}

footerSection(languageUrl) {

  if(languageUrl=='com')
  {
  cy.get('#automationFooterTagline')
  cy.get('#automationBuyingfromAlamy')
  cy.get('#automationSellingWithAlamy')
  cy.get('#automationCompany')
  cy.get('#automationGetInTouch')
  cy.get("#automationLicenseAndPricing");
  cy.get("#automationImageCategories");
  cy.get("#automationFreshPicks");
  cy.get("#automationFootageGallery");
  cy.get("#automationLiveNewsFeed");
  cy.get("#automationCustomerHelp");
  cy.get("#automationGetCreditAccount");
  cy.get("#automationBecomeContributor");
  cy.get("#automationContributorHomepage");
  cy.get("#automationStockimo");
  cy.get("#automationContributorContract");
  cy.get("#automationAboutUs");
  cy.get("#automationMeetTheTeam");
  cy.get("#automationWorkforUs");
  cy.get("#automationOurAffiliateProgram");
  cy.get("#automationContactUs");
  cy.get(".mt-8");
  cy.get("#lblTel");
  cy.get("#lblmail");
  cy.get(".relative > .Button_btn__1ggBs");
  cy.get("#footer_Normal > .py-2");
  cy.get(".Footer_fb__KTbkH");
  cy.get(".Footer_youtube__xxxWP");
  cy.get(".Footer_instagram__B4lJw");
  cy.get(".Footer_linkedin__3QK2m");
  cy.get(".Footer_pinterest__3qnJ9");
  cy.get(".Footer_twitter__3bst1");
  cy.get("#mastercard");
  cy.get("#visa");
  cy.get("#americanexpress");
  cy.get("#paypal");
  cy.get("#applepay");
  cy.get("#googlepay");
  cy.get("#automationTermsAndCondition");
  cy.get("#automationCopyrights");
  cy.get("#automationSitemap");
  cy.get(".mb-4 > .text-light-navy-500");
  }
  if(languageUrl=='.it')
  {
    cy.get('#automationFooterTagline')
  cy.get('#automationBuyingfromAlamy')
  cy.get('#automationSellingWithAlamy')
  cy.get('#automationCompany')
  cy.get('#automationGetInTouch')
    cy.get("#automationLicenseAndPricing");
    cy.get("#automationImageCategories");
    cy.get("#automationFreshPicks");
    cy.get("#automationGetCreditAccount");
    cy.get('#automationBecomeContributor')
    cy.get("#automationAboutUs");
    cy.get("#automationContactUs");
    cy.get("#lblTel");
    cy.get("#lblmail");
    cy.get(".relative > .Button_btn__1ggBs");
    cy.get(".Footer_fb__KTbkH > a");
    cy.get(".Footer_youtube__xxxWP");
    cy.get(".Footer_instagram__B4lJw");
    cy.get(".Footer_linkedin__3QK2m");
    cy.get(".Footer_pinterest__3qnJ9");
    cy.get(".Footer_twitter__3bst1");
    cy.get("#mastercard");
    cy.get("#visa");
    cy.get("#americanexpress");
    cy.get("#paypal");
    cy.get("#applepay");
    cy.get("#googlepay");
    cy.get("#automationTermsAndCondition");
    cy.get("#automationCopyrights");
    cy.get("#automationSitemap");
    cy.get(".mb-4 > .text-light-navy-500");
       
  }
}

threezerooneredirect(redirecturl,redirectedurl)
{
  cy.fixture('images').as('alamyImageurls');
        cy.get('@alamyImageurls').then(image => {
            var urlredirect
            urlredirect = image.com[redirecturl]
            console.log("urlredirect",urlredirect)
            var urlredirected
            urlredirected= image.com[redirectedurl]
            console.log("urlredirected",urlredirected)
        
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url:urlredirect,
    followRedirect: false
  }).then(resp => {
    expect(resp.status).to.eq(301);
    expect(resp.redirectedToUrl).to.eq(urlredirected);
  });
})
}

threezerooneredirectde(redirecturl,redirectedurl)
{
  cy.fixture('images').as('alamyImageurls');
        cy.get('@alamyImageurls').then(image => {
            var urlredirect
            urlredirect = image.com[redirecturl]
            console.log("urlredirect",urlredirect)
            var urlredirected
            urlredirected= image.com[redirectedurl]
            console.log("urlredirected",urlredirected)
        
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url:urlredirect,
    followRedirect: false
  }).then(resp => {
    expect(resp.status).to.eq(301);
    expect(resp.redirectedToUrl).to.eq(urlredirected);
  });
})
}

deletedImagefourTenEn(deletedImage)
{
  
  cy.fixture('images').as('alamyImageurls');
  cy.get('@alamyImageurls').then(image => {
      var deletedImageUrl
      deletedImageUrl = image.com[deletedImage]
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url: deletedImageUrl,
    failOnStatusCode: false
  }).then(resp => {
    expect(resp.status).to.eq(410);
  });
})
}
deletedImagefourTenIT(deletedImageIT)
{
  
  cy.fixture('images').as('alamyImageurls');
  cy.get('@alamyImageurls').then(image => {
      var deletedImageUrlIT
      deletedImageUrlIT = image.com[deletedImageIT]
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url: deletedImageUrlIT,
    failOnStatusCode: false
  }).then(resp => {
    expect(resp.status).to.eq(410);
  });
})
}


trailingslashen(trailingSlashesurlsen)
{
  cy.fixture('images').as('alamyImageurls');
  cy.get('@alamyImageurls').then(image => {
      var trailingSlashesurlen
      trailingSlashesurlen = image.com[trailingSlashesurlsen]
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url:trailingSlashesurlen,
    failOnStatusCode: false
  }).then(resp => {
    expect(resp.status).to.eq(404);
  });
})
}

trailingslashit(trailingSlashesurlsIt)
{
  cy.fixture('images').as('alamyImageurls');
  cy.get('@alamyImageurls').then(image => {
      var trailingSlashesurlit
      trailingSlashesurlit = image.com[trailingSlashesurlsIt]
  cy.request({
    headers:{
      'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    },
    url:trailingSlashesurlit,
    failOnStatusCode: false,
    
    

  })
  .then(resp => {
    expect(resp.status).to.eq(404);
  });
})
}
linkedUrlsKeywordsFirst(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get('#automationKeyWord1').click();
    cy.url().should("include", "stock-photo/10-to-13-years.html");
  }

  if(languageUrl=='.it')
  {
    cy.get('#automationKeyWord1').click();
    cy.url().should("include", "fotos-immagini/10-a-13-anni.html");
  }
  
}

linkedUrlsKeywordsFirst(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get('#automationShowAll').click();
    cy.get("#automationKeyWord73").click();
    cy.url().should("include", "/stock-photo/youths.html");
  }
  if(languageUrl=='.it')
  {
    cy.get('#automationShowAll').click();
    cy.get("#automationKeyWord68").click();
    cy.url().should("include", "fotos-immagini/vicino.html");
  }
}

linkedUrlsSimilarsfirst(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get("#automationSimilarImgThumb1").click();
    cy.url().should(
      "include",
      "portrait-of-boy-wearing-cap-with-friends-image279310504.html"
    );
  }
  if(languageUrl=='.it')
  {
    cy.get("#automationSimilarImgThumb1").click();
    cy.url().should(
      "include",
      "ritratto-di-ragazzo-che-indossa-il-cappuccio-con-gli-amici-image279310504.html"
    );
  }

  
  
}

linkedUrlsSimilarslast(languageUrl)
{
  if(languageUrl=='com')
  {
    cy.get("#automationSimilarImgThumb12").click();
    cy.url().should(
      "include",
      "portrait-of-beautiful-kid-boys-at-happy-birthday-wearing-holiday-hat-on-head-and-holding-ukulele-performing-music-friendship-children-birthday-con-image369116855.html"
      );
  }
  if(languageUrl=='.it')
  {
    cy.get("#automationSimilarImgThumb12").click();
    cy.url().should(
      "include",
      "ritratto-di-bei-ragazzi-di-compleanno-felice-indossando-cappello-di-vacanza-sulla-testa-e-tenendo-ukulele-esecuzione-di-musica-amicizia-bambini-con-compleanno-image369116855.html"
    );
  }
}

footerLicenseAndPricing(footerLicenseAndPricingen)
{
  
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerLicenseAndPricingen]
    cy.get("#automationLicenseAndPricing").click();
    cy.url().should("include", siteURL);
    })
  
  
    
  
}


footerLicenseAndPricingit(footerLicenseAndPricingit)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerLicenseAndPricingit]
    cy.get("#automationLicenseAndPricing").click();
    cy.url().should("include", siteURL);
    })
}

footerCategoryen(footerCategorysen)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerCategorysen]
    cy.get("#automationImageCategories").click();
    cy.url().should("include", siteURL);
    })
}

footerCategoryit(footerCategorysit)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerCategorysit]
    cy.get("#automationImageCategories").click();
    cy.url().should("include", siteURL);
    })
}

footerFreshpicksen(footerFreshpickssen)
{

  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerFreshpickssen]
    cy.get("#automationFreshPicks").click();
    cy.url().should("include", siteURL);
    })

}

footerFreshpicksIt(footerFreshpicksIt)
{

  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerFreshpicksIt]
    cy.get("#automationFreshPicks").click();
    cy.url().should("include", siteURL);
    })

}


footerFootageGalleryen(footerFootageGalleryeng)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerFootageGalleryeng]
    cy.get("#automationFootageGallery").click();
    cy.url().should("include", siteURL);
    })
}

footerLiveNews(footerLiveNewsfeed)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerLiveNewsfeed]
    cy.get("#automationLiveNewsFeed").click();
    cy.url().should("include", siteURL);
    })
}

footerCustomerhelp(footerCustomerhelp)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerCustomerhelp]
    cy.get("#automationCustomerHelp").click();
    cy.url().should("include", siteURL);
    })
}

footerBecomeContributoren(footerBecomeContributoren)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerBecomeContributoren]
    cy.get("#automationBecomeContributor").click();
    cy.url().should("include", siteURL);
    })
}

footerBecomeContributorit(footerBecomeContributorit)
{
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerBecomeContributorit]
    cy.get("#automationBecomeContributor").click();
    cy.url().should("include", siteURL);
    })
}

footerContributorHomepage(footerContributorHomepage)
{
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerContributorHomepage]
    cy.get("#automationContributorHomepage").click();
    cy.url().should("include", siteURL);
    })
}
footerStockimo(footerStockimo)
{
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerStockimo]
    cy.get("#automationStockimo").click();
    cy.url().should("include", siteURL);
    })
}
footerContributorContract(footerContributorContract)
{
  
  cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[footerContributorContract]
    cy.get("#automationContributorContract").click();
    cy.url().should("include", siteURL);
    })
}

footerAboutUsen(footerAboutUsen)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerAboutUsen]
  cy.get("#automationAboutUs").click();
  cy.url().should("include", siteURL);
  })
}

footerAboutUsIt(footerAboutUsIt)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerAboutUsIt]
  cy.get("#automationAboutUs").click();
  cy.url().should("include", siteURL);
  })
}

footerMeetTheTeam(footerMeetTheTeam)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerMeetTheTeam]
  cy.get("#automationMeetTheTeam").click();
  cy.url().should("include", siteURL);
  })
}
footerWorkforUs(footerWorkforUs)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerWorkforUs]
  cy.get("#automationWorkforUs").click();
  cy.url().should("include", siteURL);
  })
}
footerOurAffiliateProgram(footerOurAffiliateProgram)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerOurAffiliateProgram]
  cy.get("#automationOurAffiliateProgram").click();
  cy.url().should("include", siteURL);
  })
}

footerContactUsen(footerContactUsen)
{
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerContactUsen]
  cy.get("#automationContactUs").click();
  cy.url().should("include", siteURL);
  })
}

footerContactUsit(footerContactUsit)
{
  Cypress.on("uncaught:exception", () => {
    return false;
  });
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerContactUsit]
  cy.get("#automationContactUs").click();
  cy.url().should("include", siteURL);
  })
}

footerConditionsen(footerConditionsen)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerConditionsen]
  cy.get("#automationTermsAndCondition").click();
  cy.url().should("include", siteURL);
  })
}

footerConditionsit(footerConditionsit)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerConditionsit]
  cy.get("#automationTermsAndCondition").click();
  cy.url().should("include", siteURL);
  })
}

footerCopyrightsen(footerCopyrightsen)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerCopyrightsen]
  cy.get("#automationCopyrights").click();
  cy.url().should("include", siteURL);
  })
}

footerCopyrightsit(footerCopyrightsit)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerCopyrightsit]
  cy.get("#automationCopyrights").click();
  cy.url().should("include", siteURL);
  })
}

footerSitemapen(footerSitemapen)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerSitemapen]
  cy.get("#automationSitemap").click();
  cy.url().should("include", siteURL);
  })
}

footerSitemapit(footerSitemapit)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[footerSitemapit]
  cy.get("#automationSitemap").click();
  cy.url().should("include", siteURL);
  })
}
socialMediaFB()
{
  cy.get('a[href*="facebook"]').then(function($a) {
    const href = $a.prop("href");
    cy.request(href).then(resp => {
      expect(resp.status).to.eq(200);
})

  })
}

socialMediaYoutube()
{
  cy.get('a[href*="youtube"]').then(function($a) {
    const href = $a.prop("href");
    cy.request(href).then(resp => {
      expect(resp.status).to.eq(200);
})

  })
}

socialMediaInstagram()
{
  cy.get('a[href*="instagram"]').then(function($a) {
    const href = $a.prop("href");
    cy.request(href).then(resp => {
      expect(resp.status).to.eq(200);
})

  })
}

socialMediaLinkedin()
{
  cy.get('a[href*="linkedin"]').then(function($a) {
    const href = $a.prop("href");
    cy.request({
      url: href,
      failOnStatusCode: false
    })

      .its("body")
      .should("include", "</html>");
  });
}

socialMediaPinterest()
{
  cy.get('a[href*="pinterest"]').then(function($a) {
    const href = $a.prop("href");
    cy.request(href).then(resp => {
      expect(resp.status).to.eq(200);
})

  })
}

socialMediaTwitter()
{
  cy.get('a[href*="twitter"]').then(function($a) {
    const href = $a.prop("href");
    cy.request(href).then(resp => {
      expect(resp.status).to.eq(200);
})

  })
}

headerAlamyicon(headerAlamyicon,headerAlamyiconit,languageUrl)
{
  if(languageUrl=='com')
  {
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[headerAlamyicon]
  cy.get("#automationAlamyLogo").click();
  cy.url().should("include", siteURL);
  })
}

if(languageUrl=='.it')
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[headerAlamyiconit]
  cy.get("#automationAlamyLogo").click();
  cy.url().should("include", siteURL);
  })
}

}

headerCart(headerCart,headerCartit,languageUrl)
{

  if(languageUrl=='com')
  {
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[headerCart]
  cy.get("#automationShoppingCartGuest").click();
  cy.url().should("include", siteURL);
  })
}

if(languageUrl=='.it')
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[headerCartit]
  cy.get("#automationShoppingCartGuest").click();
  cy.url().should("include", siteURL);
  })
}

}


contributorSearch(contributorSearch)
{
  cy.fixture('images').as('alamyurls');
  cy.get('@alamyurls').then(image => {
      var siteURL
      siteURL = image.url[contributorSearch]
  cy.get(
    'a[href*="cid=6SLCYM46F3JVF6TTNWEAPJQFJZ4R3N35E4G7K373CCTVK8GQFL83YCKD4XRNUHMG"]'
  ).then(function($a) {
    const href = $a.prop("href");
    cy.visit(href);
    cy.url().should(
      "include",
      siteURL
    );
  });
})
}

hreflangAndCanonical(languageUrl)
{
  let href1;
  let href2;
  cy.document();
  if(languageUrl=='com')
  {
    cy.get('head link[rel="canonical"]').then($myElement => {
      href1 = $myElement.prop("href");
      cy.get('head link[hreflang="en"]').then($myElement => {
        href2 = $myElement.prop("href");
        expect(href1).equal(href2);
      });
    });
  }

  if(languageUrl=='.it')
  {
    cy.get('head link[rel="canonical"]').then($myElement => {
      href1 = $myElement.prop("href");
      cy.get('head link[hreflang="it"]').then($myElement => {
        href2 = $myElement.prop("href");
        expect(href1).equal(href2);
      });
    });
  }

  
}
truncationHeroimageL(truncationHeroimageL,truncationHeroimageLit,languageUrl)
{
  if(languageUrl=='com')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[truncationHeroimageL]
    cy.get(".mainImage").then($myElement => {
      const href = $myElement.prop("src");
      expect(href).equal(siteURL);
    });
  })
  }
  if(languageUrl=='.it')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[truncationHeroimageLit]
    cy.get(".mainImage").then($myElement => {
      const href = $myElement.prop("src");
      expect(href).equal(siteURL);
    });
  })
  }

  }
  
truncationHeroimageG(truncationHeroimageG,truncationHeroimageGIT,languageUrl)
{
  if(languageUrl=='com')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[truncationHeroimageG]
    cy.get(".mainImage").then($myElement => {
      const href = $myElement.prop("src");
      expect(href).equal(siteURL);
    });
  })
  }
  if(languageUrl=='.it')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[truncationHeroimageGIT]
    cy.get(".mainImage").then($myElement => {
      const href = $myElement.prop("src");
      expect(href).equal(siteURL);
    });
  })
  }
}

vectorTitleTagCheck(vectorTitleTagCheck,vectorTitleTagCheckIt,languageUrl)
{

  cy.document();
  if(languageUrl=='com')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorTitleTagCheck]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
  }

  if(languageUrl=='.it')
  {
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorTitleTagCheckIt]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
  }
   
}
vectorTitleTagTrunction(vectorTitleTagTrunction,vectorTitleTagTrunctionIt,languageUrl)
{
    cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorTitleTagTrunction]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorTitleTagTrunctionIt]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
    }

}

vectorTitleTagTrunctionGreat(vectorTitleTagTrunctionGreat,vectorTitleTagTrunctionGreatIt,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorTitleTagTrunctionGreat]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorTitleTagTrunctionGreatIt]
    cy.get("head title").should(
      "have.text",
      siteURL
    );
    })
    }
}


vectorMetaDesc(vectorMetaDesc,vectorMetaDescIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDesc]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDescIT]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorMetaTrunctaionLess(vectorMetaTrunctaionLess,vectorMetaTrunctaionLessIt,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionLess]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionLessIt]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorMetaTrunctaionGreat(vectorMetaTrunctaionGreat,vectorMetaTrunctaionIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionGreat]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionIT]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorOGTitle(vectorOGTitle,vectorOGTitleIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitle]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitleIT]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorOGTitleTruncationL(vectorOGTitleTruncationL,vectorOGTitleTruncationLIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitleTruncationL]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitleTruncationLIT]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}
vectorOGTitleTruncationG(vectorOGTitleTruncationG,vectorOGTitleTruncationGIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitleTruncationG]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorOGTitleTruncationGIT]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorTwittertitle(vectorTwittertitle,vectorTwittertitleIT,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorTwittertitle]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
  if(languageUrl=='.it')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorTwittertitleIT]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
}

vectorTwittertitleTruncL(vectorOGTitleTruncationL,vectorOGTitleTruncationLIT,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorOGTitleTruncationL]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
  if(languageUrl=='.it')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorOGTitleTruncationLIT]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
}



vectorTwittertitleTruncG(vectorOGTitleTruncationG,vectorOGTitleTruncationGIT,languageUrl)

{
  cy.document();
  if(languageUrl=='com')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorOGTitleTruncationG]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          console.log("Dewsc",desc)
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
  if(languageUrl=='.it')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorOGTitleTruncationGIT]
        cy.get('head meta[name="twitter:title"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
}

vectorOGDesc(vectorMetaDesc,vectorMetaDescIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDesc]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDescIT]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorOGdescTr(vectorMetaTrunctaionLess,vectorMetaTrunctaionLessIt,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionLess]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaTrunctaionLessIt]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorogdescLess(vectorogdescLess,vectorogdescLessIt,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorogdescLess]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorogdescLessIt]
          cy.get('head meta[property="og:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorTwitterDesc(vectorMetaDesc,vectorMetaDescIT,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDesc]
          cy.get('head meta[name="twitter:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorMetaDescIT]
          cy.get('head meta[name="twitter:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

vectorTwitterdescLess(vectorMetaTrunctaionLess,vectorMetaTrunctaionLessIt,languageUrl)

{
  cy.document();
  if(languageUrl=='com')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorMetaTrunctaionLess]
        cy.get('head meta[name="twitter:description"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
  if(languageUrl=='.it')
  { 
    cy.fixture('images').as('alamyurls');
    cy.get('@alamyurls').then(image => {
        var siteURL
        siteURL = image.url[vectorMetaTrunctaionLessIt]
        cy.get('head meta[name="twitter:description"]').then($myelement => {
          const desc = $myelement.prop("content");
          expect(desc).equal(
            siteURL
          );
        });
  })
  }
}

vectorogTwittergreat(vectorogdescLess,vectorogdescLessIt,languageUrl)
{
  cy.document();
    if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorogdescLess]
          cy.get('head meta[name="twitter:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[vectorogdescLessIt]
          cy.get('head meta[name="twitter:description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
    })
    }
}

threeSixtyTitle(threeSixtyTitle,threeSixtyTitleIT,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyTitle]
      cy.get("head title").should(
        "have.text",
        siteURL
      );
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyTitleIT]
      cy.get("head title").should(
        "have.text",
        siteURL
      );
      })
    }


  }

titleTrG(titleTren,titleTrit,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[titleTren]
      cy.get("head title").should(
        "have.text",
        siteURL
      );
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[titleTrit]
      cy.get("head title").should(
        "have.text",
        siteURL
      );
      })
    }
}

threesixtyMeta(threesixtyMeta,threesixtyMetaIt,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threesixtyMeta]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threesixtyMetaIt]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
}

threeSixtyMetatruc(threeSixtyMetdaTru,threeSixtyMetdaTruIt,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyMetdaTru]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyMetdaTruIt]
          cy.get('head meta[name="description"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
}
threeSixtyOG(threeSixtyOg,threeSixtyOgIt,languageUrl)

{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyOg]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyOgIt]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
}

threesixtyOgTitlL(threesixtyOgTitlL,threesixtyOgTitlLIt,languageUrl)
{
  cy.document();
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threesixtyOgTitlL]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threesixtyOgTitlLIt]
          cy.get('head meta[property="og:title"]').then($myelement => {
            const desc = $myelement.prop("content");
            expect(desc).equal(
              siteURL
            );
          });
      })
    }
}

threeSixtyCaption(threeSixtyCaption,threeSixtyCaptionIt,languageUrl)
{
  if(languageUrl=='com')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyCaption]
          cy.get(".break-words").contains(siteURL);
      })
    }
    if(languageUrl=='.it')
    { 
      cy.fixture('images').as('alamyurls');
      cy.get('@alamyurls').then(image => {
          var siteURL
          siteURL = image.url[threeSixtyCaptionIt]
          cy.get(".break-words").contains(siteURL);
      })
    }
}
imageCountCheck(desc)
{
  
    cy.get(
      'body div[class="Footer_footerRibbon__1regZ w-full text-center py-5 text-white text-2xl font-bold border-b border-light-navy-500 "]'
    )
      .find("p")
      .invoke("text")
      .then(text => {
        expect(text.trim()).equal(desc);
      });
  
}

contactNumber(homepageContactWithoutSpace)
{
  cy.get('#automationAccount').click()
  cy.get('#lblTelHeadr')
      .invoke("text")
      .then(text => {
      const imagepageContact = text;
      const imagepageContactWithoutSpace =imagepageContact.replace(/\s/g, "")
      console.log('homepageContactWithoutSpace',homepageContactWithoutSpace)
      console.log('imagepageContactWithoutSpace',imagepageContactWithoutSpace)
      expect(imagepageContactWithoutSpace.trim()).equal(homepageContactWithoutSpace)
      })
}




}
export default seoImagePage