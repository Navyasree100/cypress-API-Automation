import ImagePage from '../../support/global/imagePage'
import imagePackInImagePage from '../../support/global/imagePackInImagePage.js'
describe('Go to image page in .es',function()
{

it('Image page assertions RM',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_RM('es')
    ip.imagePage_license_personalUse_RM('es')
    ip.imagePage_license_personalUse_price_check_RM('es')
    ip.imagePage_license_presentation_RM('es')
    ip.imagePage_license_presentation_price_check_RM('es')
    ip.imagePage_license_website_RM('es')
    ip.imagePage_license_website_price_check_RM('es')
    ip.imagePage_license_Magazines_and_books_RM('es')
    ip.imagePage_license_Magazines_and_books_price_check_RM('es')
    ip.imagePage_license_Marketing_package_Small_business_RM('es')
    ip.imagePage_license_Marketing_package_Small_business_price_check_RM('es')
    ip.imagePage_license_Marketing_package_Large_business_RM('es')
    ip.imagePage_license_Marketing_package_Large_business_price_check_RM('es')
})

it('Image page assertions RF',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_RF('es')
    ip.imagePage_license_personalUse_RF('es')
    ip.imagePage_license_personalUse_price_check_RF('es')
    ip.imagePage_license_presentation_RF('es')
    ip.imagePage_license_presentation_price_check_RF('es')
    ip.imagePage_license_website_RF('es')
    ip.imagePage_license_website_price_check_RF('es')
    ip.imagePage_license_Magazines_and_books_RF('es')
    ip.imagePage_license_Magazines_and_books_price_check_RF('es')
    ip.imagePage_license_Marketing_package_Small_business_RF('es')
    ip.imagePage_license_Marketing_package_Small_business_price_check_RF('es')
    ip.imagePage_license_Marketing_package_Large_business_RF('es')
    ip.imagePage_license_Marketing_package_Large_business_price_check_RF('es')
})

it('Image page assertions vector',function()
{
    const ip = new ImagePage('es')
    ip.imagePage_visit_vector('es')
    ip.imagePage_license_vector('es')
    ip.imagePage_license_vector_price_check('es')
})

it('Image page assertions 360',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_360('es')
    ip.imagePage_license_Website_or_social_media_site_360('es')
    ip.imagePage_license_Website_or_social_media_site_price_check_360('es')
    ip.imagePage_license_VR_or_game_apps_360('es')
    ip.imagePage_license_VR_or_game_apps_price_check_360('es')
    ip.imagePage_license_Digital_publishing_360('es')
    ip.imagePage_license_Digital_publishing_price_check_360('es')
    ip.imagePage_license_TV_program_360('es')
    ip.imagePage_license_TV_program_price_check_360('es')
    ip.imagePage_license_Marketing_package_Small_business_360('es')
    ip.imagePage_license_Marketing_package_Small_business_price_check_360('es')
    ip.imagePage_license_Marketing_package_Large_business_360('es')
    ip.imagePage_license_Marketing_package_Large_business_price_check_360('es')
})

/*it('Image page assertions packs',function()
{
    const imp = new imagePackInImagePage()
    const ip = new ImagePage()
    imp.login_packUser('es')
    ip.imagePage_visit_RM('es')
    imp.imagePage_license_personalUse_pack('es')
    imp.imagePage_license_presentation_pack('es')
    imp.imagePage_license_website_pack('es')
    imp.imagePage_license_Marketing_package_Small_business_pack('es')
    imp.imagePage_license_Marketing_package_Large_business_pack('es')
})*/

/*17 Restriction test cases in image page are written below
Parameters passing with flag=0 for licenses to show
Parameters passing with flag=1 for licenses to show and disable
Parameters passing with flag=2 for licenses to hide
*/

it('Image page restrictions logic 1',function()
{
    const ip = new ImagePage()
    ip.imagePage_visit_Restriction_Logic_1('es')
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
    ip.imagePage_visit_Restriction_Logic_2('es')
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
    ip.imagePage_visit_Restriction_Logic_3('es')
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
    ip.imagePage_visit_Restriction_Logic_4('es')
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
    ip.imagePage_visit_Restriction_Logic_5('es')
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
    ip.imagePage_visit_Restriction_Logic_6('es')
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
    ip.imagePage_visit_Restriction_Logic_7('es')
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
    ip.imagePage_visit_Restriction_Logic_8('es')
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
    ip.imagePage_visit_Restriction_Logic_9('es')
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
    ip.imagePage_visit_Restriction_Logic_10('es')
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
    ip.imagePage_visit_Restriction_Logic_11('es')
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
    ip.imagePage_visit_Restriction_Logic_12('es')
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
    ip.imagePage_visit_Restriction_Logic_13('es')
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
    ip.imagePage_visit_Restriction_Logic_14('es')
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
    ip.imagePage_visit_Restriction_Logic_15('es')
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
    ip.imagePage_visit_Restriction_Logic_16('es')
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
    ip.imagePage_visit_Restriction_Logic_17('es')
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