import HomePage from '../../support/global/HomePage'
import AlamyHeader from '../../support/global/alamyHeader'
describe('Go to image page',function()
{  
it('keyword search tool',function()
{
    const hp = new HomePage()
    const ah = new AlamyHeader()
    for(var i=9000;i<18000;i++)
    {
        ah.visit()
        hp.homePageImageSearchKeywordFromJson(i)

    }
})
})
