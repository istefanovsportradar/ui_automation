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

describe('Turnover game buttons', () => {
    beforeEach(async () => {
        await LoginPage.open(process.env.BASE_URL);
    })

    it('This test should check turover buttons', async () => {

        const fixtures = customData.fixtures
        const game = customData.game
        const position = customData.game.homeTeam.player.position
        const homeTeam = customData.game.homeTeam
        const awayTeam = customData.game.awayTeam
        const turnover = customData.game.turnover

        await HelperPage.waitForElement(LoginPage.inputUsername)
        await expect(LoginPage.inputUsername).toBeExisting()
        await expect(LoginPage.inputPassword).toBeExisting()
        await expect(LoginPage.btnSubmit).toBeExisting()
        await LoginPage.login(LoginPage.inputUsername, LoginPage.inputPassword, LoginPage.btnSubmit, process.env.VALID_USERNAME_CA, process.env.VALID_PASSWORD_CA);

        //<--- CLICK SELECT BUTTON --->
        await HelperPage.waitForElement(HomePage.btnSelect)
        await expect(HomePage.btnSelect).toBeExisting()
        await $(await HomePage.btnSelect).click()

        //<--- SELECT ORGANIZATION --->
        await HelperPage.waitForElement(OrganizationsPage.organizationId)
        await expect(OrganizationsPage.organizationId).toBeExisting()
        await OrganizationsPage.selectOrganizationByXpath(process.env.ORGANIZATION_ID)

        //<--- NAVIGATE TO CA WEBSITE --->
        await LoginPage.open(process.env.ALTERNATIVE_URL_CA);

        await $(await FixturesPage.addNewFixtureBtn).click()
        await browser.pause(1000)

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
        await expect(FixturesPage.successPopUp).toBeDisplayed()
        await browser.pause(2000)

        await LoginPage.open(process.env.ALTERNATIVE_URL_IG);
        await HelperPage.waitForElement(LoginPage.inputUsername_Ig)
        await expect(LoginPage.inputUsername_Ig).toBeExisting()
        await expect(LoginPage.inputPassword_Ig).toBeExisting()
        await expect(LoginPage.inputPassword_Ig).toBeExisting()
        await expect(LoginPage.btnSubmit).toBeExisting()
        await LoginPage.login(LoginPage.inputUsername_Ig, LoginPage.inputPassword_Ig, LoginPage.btnSubmit, process.env.VALID_USERNAME_IG, process.env.VALID_PASSWORD_IG);
        await HelperPage.insertValue(FixturesPage.searchField, fixtures.homeTeamDropdownValue)
        await browser.pause(2000)

        //<--- VERIFY THAT GAME BUTTON IS ENABLED --->
        const igDateAndTimeElementEnabled = '//*/tbody/tr/td[2]/span[1][contains(text(),"' + getDate.getHours.year + '-' + getDate.getHours.month + '-' + getDate.getHours.day + '")]/../span[2][contains(text(),"' + getDate.getHours.hour + ':' + getDate.getMinutes.minute + '")]/../../td/a'
        const gameSuccessBtn = await $(igDateAndTimeElementEnabled)
            .getAttribute('class')
        await expect(gameSuccessBtn).toContain('btn-success')
        await await $(igDateAndTimeElementEnabled).click()

        //<--- ADD DETAILS --->
        await DetailsPage.populateOfficials()

        //<--- ADD ROSTER - SELECT 9 ACTIVE PLAYERS, 5 STARTERS AND 1 CAPT --->
        await HelperPage.waitForElement(TeamSetupPage.homeTeamRosterBtn)
        await HelperPage.clickRosterMultipleCheckboxes(11, 1, 6) // Select Capt
        await HelperPage.clickRosterMultipleCheckboxes(10, 5, 6) // Select 5 Starters
        await HelperPage.clickRosterMultipleCheckboxes(39, 4, 6) // Select 9 Active players
        await browser.pause(2000)

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
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerName)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.active)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.starting)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerNumber)
        await $(await TeamSetupPage.homeTeamSortByDronDown).selectByVisibleText(game.sortBy.playerName)

        //<--- POPULATE HOME ROSTER --->
        await browser.pause(500)
        await $(await TeamSetupPage.homeTeamInput1).setValue(1)
        await browser.pause(500)
        await $(await TeamSetupPage.homeTeamStarterCheckbox1).click()
        await $(await TeamSetupPage.homeTeamCaptCheckbox1).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput2).setValue(2)
        await $(await TeamSetupPage.homeTeamStarterCheckbox2).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput3).setValue(3)
        await $(await TeamSetupPage.homeTeamStarterCheckbox3).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput4).setValue(4)
        await $(await TeamSetupPage.homeTeamStarterCheckbox4).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput5).setValue(5)
        await $(await TeamSetupPage.homeTeamStarterCheckbox5).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput6).setValue(6)
        await $(await TeamSetupPage.homeTeamActiveCheckbox6).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput7).setValue(7)
        await $(await TeamSetupPage.homeTeamActiveCheckbox7).click()
        await browser.pause(500)

        await $(await TeamSetupPage.homeTeamInput8).setValue(8)
        await $(await TeamSetupPage.homeTeamActiveCheckbox8).click()

        await browser.pause(500)
        await $(await TeamSetupPage.homeTeamInput9).setValue(9)
        await $(await TeamSetupPage.homeTeamActiveCheckbox9).click()
        await browser.pause(500)

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
        
        await browser.pause(500)
        await $(await TeamSetupPage.nextBtn).click()

        //await GamePage.jumpBallBtn.waitForDisplayed()
        await $(await GamePage.jumpBallBtn).click()
        await browser.pause(500)
        const competitor = await $$(await GamePage.jumpBallCompetitorsElements)
        await $(competitor[0]).click()
        await $(competitor[5]).click()

        await $(await GamePage.startMatchBtn).click()
        await $(await GamePage.homeTeamStartFirstBtn).click()
        await browser.pause(1000)

        //<--- GET URL --->
        await HelperPage.pageUrlId()

        //<--- START MATCH --->
        let teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        await expect(teamScoreResult[0]).toEqual("0")
        await expect(teamScoreResult[1]).toEqual("0")

        await GamePage.makeTurnover(game.home, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.makeTurnover(game.away, game.player, turnover.ballHandling, turnover.noSteal)
        await GamePage.makeTurnover(game.home, game.player, turnover.outOfBounds, turnover.noSteal)
        await GamePage.makeTurnover(game.away, game.player, turnover.travel, turnover.stealPlayer)
        await GamePage.makeTurnover(game.home, game.player, turnover.second3Violation, turnover.noSteal)
        await GamePage.makeTurnover(game.away, game.player, turnover.second5Violation, turnover.noSteal)
        await GamePage.makeTurnover(game.home, game.player, turnover.backCourtViolation, turnover.stealPlayer)
        await GamePage.makeTurnover(game.away, game.player, turnover.offensiveGoalTending, turnover.stealPlayer)
        await GamePage.makeTurnover(game.home, game.player, turnover.doubleDribble, turnover.noSteal)
        await GamePage.makeTurnover(game.away, game.player, turnover.carrying, turnover.stealPlayer)
        await GamePage.makeTurnover(game.home, game.player, turnover.other, turnover.stealPlayer)

        await GamePage.makeTurnover(game.away, turnover.teamTurnover, turnover.second5Violation, 'null')
        await GamePage.makeTurnover(game.home, turnover.teamTurnover, turnover.second8Violation, 'null')
        await GamePage.makeTurnover(game.away, turnover.teamTurnover, turnover.shotClock, 'null')
        await GamePage.makeTurnover(game.home, turnover.teamTurnover, turnover.other, 'null')

    })
})