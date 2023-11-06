import HomePage from '../../support/global/HomePage'
import SearchPage from '../../support/global/SearchPage';
import ImagePage from '../../support/global/imagePage';
import Header from '../../support/global/Header'

describe('Go to image page',function()
{
it('imagepage assertion',function()
{
    const hp = new HomePage()
    const searchpage=new SearchPage()
    const imagepage=new ImagePage()
    hp.visit()
    hp.searchoptionarrowclick()
    hp.searchingkeyword('car')
    hp.searchbuttonclcik()
    searchpage.firstimageclick()
    imagepage.imagedesccheck() 
})

it('loginfromhomepage',function()
{
    const hp = new HomePage()
    hp.visit()
    hp.accountsclickheader()
    hp.signinlinkclick()
    hp.emailentryforlogin('ocduser')

})

window.close()
})
