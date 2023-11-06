

class GlobalFunction
{
    CheckIfCaptchaPopupCame()
    { 
        var present = 0
        cy.window().then(win => 
        {
            try
            {
                win.document.querySelector("iframe[src*='recaptcha']").click();
                present = 1 
            }
            catch(e)
            {
                cy.log("Captcha not came")
            }                         
            cy.log("present1 : "+ present)        
        });
        cy.log("present2 : "+ present)
        return present
    }

    CaptchaLogin(userName, passWord, url, languageCode)
    {
        const CaptchaUrl = url+"/Alamyuser.asmx/Login?CaptchaResponse=8D9EDDAF-D469-48E6-9C97-2539721E165C&Email="+userName+"&password="+passWord+languageCode
        cy.request(CaptchaUrl)
    }
}
export default GlobalFunction