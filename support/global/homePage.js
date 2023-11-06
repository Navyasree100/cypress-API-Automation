require('cypress-xpath')
class homePage
{
    homePageImageSearch()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
               const srchbox = cy.get(loc.com.homePageSearch);
               srchbox.type('alamytestimage')
               cy.get(loc.com.searchButton).click({force:true});
            })
    }

    toUnicode = function(input){
        var result = "";
        for(var i = 0; i < this.length; i++){
            // Assumption: all characters are < 0xffff
            result += "\\u" + ("000" + this[input].charCodeAt(0).toString(16)).substr(-4);
        }
        return result;
    };

    homepageImageSearchKeywordFromJson(i)
    {
        
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
                
                {
                cy.fixture('SearchKeywordGermanMismatch').as('germanmismatch');
                cy.get('@germanmismatch').then(loc1 =>
                    {
                            var searchWord=loc1.germanmismatch[i]

                            cy.get(loc.com.homePageSearch).type(searchWord)       
                            //cy.visit("https://www.alamy.com/search/"+searchWord +".html",{failOnStatusCode: false})
                              
                    
                    cy.get(loc.com.searchButton).click({force:true}); 
                    cy.xpath("//*[@id='automationHeaderSearchResults']/text()").then(($span) => {
                        var imagecount = $span.text();
                        imagecount=imagecount.replace("(","")
                        imagecount=imagecount.replace(")","")
                        imagecount=imagecount.replace(" ","")
                       
               if(imagecount==0)
                    {
                        console.log("if:",searchWord)  
                    cy.writeFile('cypress/fixtures/GermanMismatchLog.json',searchWord+":"+imagecount+"\n",{ flag: 'a+' })                                        
                    }
                    else
                    {
                        console.log("else:",searchWord)  
                        cy.writeFile('cypress/fixtures/GermanMismatchLog.json',searchWord+":"+imagecount+"\n",{ flag: 'a+' })
                    }
                
                })

                })                                      
        }
    })
    }
    
    homepageloggedinchk()
    {
        cy.fixture('locator').as('alamyLocator');
        cy.get('@alamyLocator').then(loc =>
            {
              
               cy.get(loc.com.myAccountLoggedHeader).should('be.visible')
            })
           
        
    }
   
}
export default homePage