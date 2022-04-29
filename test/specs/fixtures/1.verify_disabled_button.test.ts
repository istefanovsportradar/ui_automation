import LoginPage from '../../pageobjects/login.page';
import HomePage from '../../pageobjects/home.page';
import OrganizationsPage from '../../pageobjects/organizations.page'
import FixturesPage from '../../pageobjects/fixtures.page'
import HelperPage from '../../pageobjects/helper.page';
const customData = require("../../../data.conf.json");
require('dotenv').config()

describe('Disabled game button', () => {
    beforeEach(async () => {
        await LoginPage.open(process.env.BASE_URL);
    })

    it('This test should check if game button is disabled', async () => {

        const fixtures = customData.fixtures

        await HelperPage.waitUntilElement(LoginPage.inputUsername, 60000)

        await LoginPage.login(await $(LoginPage.inputUsername), await $(LoginPage.inputPassword), await $(LoginPage.btnSubmit), process.env.VALID_USERNAME_CA, process.env.VALID_PASSWORD_CA);

        //<--- CLICK SELECT BUTTON --->

        await HelperPage.waitUntilElement(HomePage.btnSelect, 60000)

        await $(await HomePage.btnSelect).click()

        //<--- SELECT ORGANIZATION --->

        await HelperPage.waitUntilElement(OrganizationsPage.organizationId, 60000)

        await OrganizationsPage.selectOrganizationByXpath(process.env.ORGANIZATION_ID)

        //<--- NAVIGATE TO CA WEBSITE --->
        await LoginPage.open(process.env.ALTERNATIVE_URL_CA);
        await HelperPage.waitUntilElement(FixturesPage.addNewFixtureBtn, 60000)

        await $(await FixturesPage.addNewFixtureBtn).click()

        await HelperPage.waitUntilElement(FixturesPage.firstTableRow, 60000)

        //<--- POPULATE FIXTURE --->
        let getDate = await FixturesPage.addNewFixture(
            5,
            1,
            fixtures.homeTeamDropdownValue,
            fixtures.awayTeamDropdownValue,
            fixtures.venueDropdownValue,
            fixtures.startDatePickerValue,
            fixtures.typeDropdownValue,
            fixtures.statusDropdownValue)
        await $(await FixturesPage.successBtn).click()
        await browser.pause(4000)

        await LoginPage.open(process.env.ALTERNATIVE_URL_IG);
        await HelperPage.waitUntilElement(LoginPage.inputUsername_Ig, 60000)
        await HelperPage.waitUntilElement(LoginPage.inputPassword_Ig, 60000)
        await HelperPage.waitUntilElement(LoginPage.btnSubmit, 60000)

        //<--- VERIFY THAT GAME BUTTON IS DISABLED --->
        const igDateAndTimeElementDisabled = '//*/tbody/tr/td[2]/span[1][contains(text(),"' + getDate.getHours.year + '-' + getDate.getHours.month + '-' + getDate.getHours.day + '")]/../span[2][contains(text(),"' + getDate.getHours.hour + ':' + getDate.getMinutes.minute + '")]/../../td/div'
        const elem = await $(igDateAndTimeElementDisabled)
            .getAttribute('class')
        await expect(elem).toContain('enabled-false')
    })
})