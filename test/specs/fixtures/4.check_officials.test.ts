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
        const turnover = customData.game.turnover
        const jumpBallTypes = customData.game.jumpBallTypes
        const token = await HelperPage.getToken()

        // const playByPlayResponse = await HelperPage.getPlayByPlay(process.env.API_URL, token)

        // await expect(playByPlayResponse.response.status).toEqual(200)
        // await expect(playByPlayResponse.objectRows).toEqual(20890)
        // await expect(playByPlayResponse.homeTeamPbpScore).toEqual(81)
        // await expect(playByPlayResponse.awayTeamPbpScore).toEqual(95)

        // const rolesResponse = await HelperPage.getRoles(process.env.API_URL, token)
        // await expect(rolesResponse.response.status).toEqual(200)
        // await expect(rolesResponse.response.role1).toBe("REFEREE_ASSISTANT_RESERVE")
        // await expect(rolesResponse.response.role2).toBe("REFEREE_RESERVE")
        // await expect(rolesResponse.response.role3).toBe("SCOREKEEPER")
        // await expect(rolesResponse.response.role4).toBe("SCOREKEEPER_ASSISTANT")
        // await expect(rolesResponse.response.role5).toBe("STATISTICIAN")
        // await expect(rolesResponse.response.role6).toBe("TIMEKEEPER")
        // await expect(rolesResponse.response.role7).toBe("UMPIRE")
        // await expect(rolesResponse.response.role8).toBe("COACH")
        // await expect(rolesResponse.response.role9).toBe("COACH_ASSISTANT")
        // await expect(rolesResponse.response.role10).toBe("COACH_ASSISTANT")

        // const fixturesResponse = await HelperPage.getFixtures(process.env.API_URL, token)
        // await expect(fixturesResponse.response.status).toEqual(200)
        // await expect(fixturesResponse.response.data.data[0].status).toBe("CONFIRMED")
        // await expect(fixturesResponse.response.data.data[0].attendance).toEqual(13768)
        // await expect(fixturesResponse.response.data.data[0].competitors[0].score).toBe("116")
        // await expect(fixturesResponse.response.data.data[0].competitors[1].score).toBe("97")

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
        await HelperPage.waitUntilElement(FixturesPage.firstTableRow, 60000)
        await $(await FixturesPage.firstTableRow).waitForClickable({ timeout: 60000 })
        await browser.pause(5000)
        await $(await FixturesPage.addNewFixtureBtn).click()
        await HelperPage.waitUntilElement(FixturesPage.firstTableRow, 60000)
        await $(await FixturesPage.firstTableRow).waitForClickable({ timeout: 60000 })
        await browser.pause(5000)

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

        await HelperPage.waitUntilElement(FixturesPage.successBtn, 60000)
        await $(await FixturesPage.successBtn).click()
        await browser.pause(5000)

        await LoginPage.open(process.env.ALTERNATIVE_URL_IG);
        await HelperPage.waitUntilElement(LoginPage.inputUsername_Ig, 60000)
        await HelperPage.waitUntilElement(LoginPage.inputPassword_Ig, 60000)
        await HelperPage.waitUntilElement(LoginPage.btnSubmit, 60000)

        await LoginPage.login(await $(LoginPage.inputUsername_Ig), await $(LoginPage.inputPassword_Ig), await $(LoginPage.btnSubmit), process.env.VALID_USERNAME_IG, process.env.VALID_PASSWORD_IG);
        await HelperPage.insertValue(await $(FixturesPage.searchField), fixtures.homeTeamDropdownValue)

        //<--- VERIFY THAT GAME BUTTON IS ENABLED --->
        const igDateAndTimeElementEnabled = '//*/tbody/tr/td[2]/span[1][contains(text(),"' + getDate.getHours.year + '-' + getDate.getHours.month + '-' + getDate.getHours.day + '")]/../span[2][contains(text(),"' + getDate.getHours.hour + ':' + getDate.getMinutes.minute + '")]/../../td/a'
        await HelperPage.waitUntilElement(igDateAndTimeElementEnabled, 60000)
        await browser.pause(1000)
        const gameSuccessBtn = await $(igDateAndTimeElementEnabled)
            .getAttribute('class')
        await expect(gameSuccessBtn).toContain('btn-success')
        await await $(igDateAndTimeElementEnabled).click()

        //<--- ADD DETAILS --->

        await DetailsPage.populateOfficials()

        let fixtureDetails = await HelperPage.pageUrlId()

        //<--- ADD ROSTER - SELECT 9 ACTIVE PLAYERS, 5 STARTERS AND 1 CAPT --->
        await HelperPage.waitUntilElement(TeamSetupPage.homeTeamRosterBtn, 60000)
        await HelperPage.clickRosterMultipleCheckboxes(11, 1, 6) // Select Capt
        await HelperPage.clickRosterMultipleCheckboxes(10, 5, 6) // Select 5 Starters
        await HelperPage.clickRosterMultipleCheckboxes(39, 4, 6) // Select 9 Active players
        await HelperPage.waitUntilElement(TeamSetupPage.awayTeamSortByDronDown, 60000)

        const awayTeamActivePlayersNumber = await HelperPage.returnArrayElementsTextFunction(await TeamSetupPage.awayTeamActivePlayersNumberLabel)
        const awayTeamStarterPlayersNumber = await HelperPage.returnArrayElementsTextFunction(await TeamSetupPage.awayTeamStarterPlayersNumberLabel)

        //<--- VERIFY THAT THERE ARE 9 ACTIVE AND 5 STARTER PLYERS --->
        await expect(awayTeamActivePlayersNumber[0]).toContain("9")
        await expect(awayTeamStarterPlayersNumber[0]).toContain("5")

        //<--- SELECT EACH OPTION IN THE SORT BY DROP DOWN --->
        await $(await TeamSetupPage.awayTeamSortByDronDown).selectByVisibleText(game.sortBy.playerName)
        await $(await TeamSetupPage.awayTeamSortByDronDown).selectByVisibleText(game.sortBy.active)
        await $(await TeamSetupPage.awayTeamSortByDronDown).selectByVisibleText(game.sortBy.starting)
        await $(await TeamSetupPage.awayTeamSortByDronDown).selectByVisibleText(game.sortBy.playerNumber)

        //<--- ADD STAFF --->
        await TeamSetupPage.populateStaff('away')

        //<--- SELECT EACH OPTION IN THE HOME SORT BY DROP DOWN --->
        await HelperPage.waitUntilElement(TeamSetupPage.homeTeamSortByDronDown, 60000)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerName)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.active)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.starting)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerNumber)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerName)

        //<--- POPULATE HOME ROSTER --->
        await TeamSetupPage.populateHomeRoster()

        await HelperPage.waitUntilElement(TeamSetupPage.homeTeamPlayer1PositionDropDown, 60000)
        await $(await TeamSetupPage.homeTeamPlayer1PositionDropDown).selectByVisibleText(position.guard)
        await $(await TeamSetupPage.homeTeamPlayer2PositionDropDown).selectByVisibleText(position.pointGuard)
        await $(await TeamSetupPage.homeTeamPlayer3PositionDropDown).selectByVisibleText(position.shootingGuard)
        await $(await TeamSetupPage.homeTeamPlayer4PositionDropDown).selectByVisibleText(position.forward)
        await $(await TeamSetupPage.homeTeamPlayer5PositionDropDown).selectByVisibleText(position.smallForward)
        await $(await TeamSetupPage.homeTeamPlayer6PositionDropDown).selectByVisibleText(position.powerForward)
        await $(await TeamSetupPage.homeTeamPlayer7PositionDropDown).selectByVisibleText(position.guardForward)
        await $(await TeamSetupPage.homeTeamPlayer8PositionDropDown).selectByVisibleText(position.forwardGuard)
        await $(await TeamSetupPage.homeTeamPlayer9PositionDropDown).selectByVisibleText(position.forwardCenter)

        const homeTeamActivePlayersNumber = await HelperPage.returnArrayElementsTextFunction(await TeamSetupPage.homeTeamActivePlayersNumberLabel)
        const homeTeamStarterPlayersNumber = await HelperPage.returnArrayElementsTextFunction(await TeamSetupPage.homeTeamStarterPlayersNumberLabel)

        //<--- VERIFY THAT THERE ARE 9 ACTIVE AND 5 STARTER PLYERS --->
        await expect(homeTeamActivePlayersNumber[0]).toContain("9")
        await expect(homeTeamStarterPlayersNumber[0]).toContain("5")

        //<--- POPULATE HOME STAFF --->
        await TeamSetupPage.populateStaff('home')

        await HelperPage.waitUntilElement(TeamSetupPage.nextBtn, 60000)
        await $(await TeamSetupPage.nextBtn).click()

        console.log(fixtureDetails)

        const rolesResponse = await HelperPage.getRoles(process.env.API_URL, token)
        await expect(rolesResponse.response.status).toEqual(200)
        await expect(rolesResponse.response.role1).toBe("REFEREE_ASSISTANT_RESERVE")
        await expect(rolesResponse.response.role2).toBe("REFEREE_RESERVE")
        await expect(rolesResponse.response.role3).toBe("SCOREKEEPER")
        await expect(rolesResponse.response.role4).toBe("SCOREKEEPER_ASSISTANT")
        await expect(rolesResponse.response.role5).toBe("STATISTICIAN")
        await expect(rolesResponse.response.role6).toBe("TIMEKEEPER")
        await expect(rolesResponse.response.role7).toBe("UMPIRE")
        await expect(rolesResponse.response.role8).toBe("COACH")
        await expect(rolesResponse.response.role9).toBe("COACH_ASSISTANT")
        await expect(rolesResponse.response.role10).toBe("COACH_ASSISTANT")

        await browser.pause(4000)
    });
});