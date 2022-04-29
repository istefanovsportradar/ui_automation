import LoginPage from '../../pageobjects/login.page';
import HomePage from '../../pageobjects/home.page';
import OrganizationsPage from '../../pageobjects/organizations.page'
import FixturesPage from '../../pageobjects/fixtures.page'
import HelperPage from '../../pageobjects/helper.page';
import TeamSetupPage from '../../pageobjects/teamsetup.page'
import GamePage from '../../pageobjects/game.page'
import DetailsPage from '../../pageobjects/details.page'
const customData = require("../../../data.conf.json");
require('dotenv').config()

describe('Full game', () => {
    beforeEach(async () => {
        await LoginPage.open(process.env.BASE_URL);
    })

    it('This test should populate full game', async () => {

        //<--- MAKE LOGIN --->
        const fixtures = customData.fixtures
        const game = customData.game
        const position = customData.game.homeTeam.player.position
        const homeTeam = customData.game.homeTeam
        const awayTeam = customData.game.awayTeam

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
            fixtures.hoursNumber,
            fixtures.minutesNumber,
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

        await LoginPage.login(await $(LoginPage.inputUsername_Ig), await $(LoginPage.inputPassword_Ig), await $(LoginPage.btnSubmit), process.env.VALID_USERNAME_IG, process.env.VALID_PASSWORD_IG);
        await HelperPage.insertValue(await $(FixturesPage.searchField), fixtures.homeTeamDropdownValue)

        //<--- VERIFY THAT GAME BUTTON IS ENABLED --->
        const igDateAndTimeElementEnabled = '//*/tbody/tr/td[2]/span[1][contains(text(),"' + getDate.getHours.year + '-' + getDate.getHours.month + '-' + getDate.getHours.day + '")]/../span[2][contains(text(),"' + getDate.getHours.hour + ':' + getDate.getMinutes.minute + '")]/../../td/a'
        await HelperPage.waitUntilElement(igDateAndTimeElementEnabled, 60000)
        const gameSuccessBtn = await $(igDateAndTimeElementEnabled)
            .getAttribute('class')
        await expect(gameSuccessBtn).toContain('btn-success')
        await await $(igDateAndTimeElementEnabled).click()

        //<--- ADD DETAILS --->
        await DetailsPage.populateOfficials()

        await HelperPage.pageUrlId()

        //<--- ADD ROSTER - SELECT 9 ACTIVE PLAYERS, 5 STARTERS AND 1 CAPT --->
        await HelperPage.waitUntilElement(TeamSetupPage.homeTeamRosterBtn, 60000)
        await browser.pause(4000)
    });
});