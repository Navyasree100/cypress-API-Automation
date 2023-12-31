import ImagePage from '../../support/global/imagePage'
import imagePackInImagePage from '../../support/global/imagePackInImagePage.js'
describe('Go to image page in .it',function()
{

it('Image page assertions RM',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_RM('it')
    ip.imagePage_license_personalUse_RM('it')
    ip.imagePage_license_personalUse_price_check_RM('it')
    ip.imagePage_license_presentation_RM('it')
    ip.imagePage_license_presentation_price_check_RM('it')
    ip.imagePage_license_website_RM('it')
    ip.imagePage_license_website_price_check_RM('it')
    ip.imagePage_license_Magazines_and_books_RM('it')
    ip.imagePage_license_Magazines_and_books_price_check_RM('it')
    ip.imagePage_license_Marketing_package_Small_business_RM('it')
    ip.imagePage_license_Marketing_package_Small_business_price_check_RM('it')
    ip.imagePage_license_Marketing_package_Large_business_RM('it')
    ip.imagePage_license_Marketing_package_Large_business_price_check_RM('it')
})

it('Image page assertions RF',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_RF('it')
    ip.imagePage_license_personalUse_RF('it')
    ip.imagePage_license_personalUse_price_check_RF('it')
    ip.imagePage_license_presentation_RF('it')
    ip.imagePage_license_presentation_price_check_RF('it')
    ip.imagePage_license_website_RF('it')
    ip.imagePage_license_website_price_check_RF('it')
    ip.imagePage_license_Magazines_and_books_RF('it')
    ip.imagePage_license_Magazines_and_books_price_check_RF('it')
    ip.imagePage_license_Marketing_package_Small_business_RF('it')
    ip.imagePage_license_Marketing_package_Small_business_price_check_RF('it')
    ip.imagePage_license_Marketing_package_Large_business_RF('it')
    ip.imagePage_license_Marketing_package_Large_business_price_check_RF('it')
})

it('Image page assertions vector',function()
{
    const ip = new ImagePage('it')
    ip.imagePage_visit_vector('it')
    ip.imagePage_license_vector('it')
    ip.imagePage_license_vector_price_check('it')
})

it('Image page assertions 360',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_360('it')
    ip.imagePage_license_Website_or_social_media_site_360('it')
    ip.imagePage_license_Website_or_social_media_site_price_check_360('it')
    ip.imagePage_license_VR_or_game_apps_360('it')
    ip.imagePage_license_VR_or_game_apps_price_check_360('it')
    ip.imagePage_license_Digital_publishing_360('it')
    ip.imagePage_license_Digital_publishing_price_check_360('it')
    ip.imagePage_license_TV_program_360('it')
    ip.imagePage_license_TV_program_price_check_360('it')
    ip.imagePage_license_Marketing_package_Small_business_360('it')
    ip.imagePage_license_Marketing_package_Small_business_price_check_360('it')
    ip.imagePage_license_Marketing_package_Large_business_360('it')
    ip.imagePage_license_Marketing_package_Large_business_price_check_360('it')
})

/*it('Image page assertions packs',function()
{
    const imp = new imagePackInImagePage()
    const ip = new ImagePage()
    imp.login_packUser('it')
    ip.imagePage_visit_RM('it')
    imp.imagePage_license_personalUse_pack('it')
    imp.imagePage_license_presentation_pack('it')
    imp.imagePage_license_website_pack('it')
    imp.imagePage_license_Marketing_package_Small_business_pack('it')
    imp.imagePage_license_Marketing_package_Large_business_pack('it')
})*/

/*17 Restriction test cases in image page are written below
Parameters passing with flag=0 for licenses to show
Parameters passing with flag=1 for licenses to show and disable
Parameters passing with flag=2 for licenses to hide
*/

it('Image page restrictions logic 1',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_1('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 2',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_2('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_Editorial_Website_Restriction(0)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_Editorial_presentation_Restriction(0)
    ip.imagePage_license_Editorial_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 3',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_3('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 4',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_4('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 5',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_5('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_Editorial_Website_Restriction(0)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_Editorial_presentation_Restriction(0)
    ip.imagePage_license_Editorial_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 6',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_6('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 7',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_7('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 8',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_8('it')
    ip.imagePage_license_PersonalUse_Editorial_Restriction(0)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_Editorial_presentation_Restriction(0)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_Editorial_Website_Restriction(0)
    ip.imagePage_license_Editorial_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 9',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_9('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_presentation_Restriction(1)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(1)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 10',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_10('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 11',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_11('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_Editorial_presentation_Restriction(0)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_Editorial_Website_Restriction(0)
    ip.imagePage_license_Editorial_magazine_Restriction(0)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 12',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_12('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_presentation_Restriction(0)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(0)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(0)
    ip.imagePage_marketingLargeBusiness_Restriction(0)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 13',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_13('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_presentation_Restriction(1)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(1)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 14',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_14('it')
    ip.imagePage_personalUse_Restriction(0)
    ip.imagePage_presentation_Restriction(1)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(1)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 15',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_15('it')
    ip.imagePage_personalUse_Restriction(1)
    ip.imagePage_presentation_Restriction(1)
    ip.imagePage_license_Editorial_presentation_Restriction(2)
    ip.imagePage_website_Restriction(1)
    ip.imagePage_license_Editorial_Website_Restriction(2)
    ip.imagePage_magazine_Restriction(1)
    ip.imagePage_marketingSmallBusiness_Restriction(1)
    ip.imagePage_marketingLargeBusiness_Restriction(1)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(2)
})

it('Image page restrictions logic 16',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_16('it')
    ip.imagePage_personalUse_Restriction(2)
    ip.imagePage_license_PersonalUse_Editorial_Restriction(0)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_Editorial_presentation_Restriction(0)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_Editorial_Website_Restriction(0)
    ip.imagePage_magazine_Restriction(2)
    ip.imagePage_license_Editorial_magazine_Restriction(0)
    ip.imagePage_license_marketingSmallBusiness_Editorial_Restriction(0)
    ip.imagePage_license_marketingLargeBusiness_Editorial_Restriction(0)
})

it('Image page restrictions logic 17',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_17('it')
    ip.imagePage_personalUse_Restriction(2)
    ip.imagePage_license_personalUse_Editorial_RF_Restriction(0)
    ip.imagePage_presentation_Restriction(2)
    ip.imagePage_license_presentation_Editorial_RF_Restriction(0)
    ip.imagePage_website_Restriction(2)
    ip.imagePage_license_website_Editorial_RF_Restriction(0)
    ip.imagePage_magazine_Restriction(2)
    ip.imagePage_license_magazine_Editorial_RF_Restriction(0)
    ip.imagePage_license_marketingSmallBusiness_Editorial_Restriction(0)
    ip.imagePage_license_marketingLargeBusiness_Editorial_Restriction(0)
})
})