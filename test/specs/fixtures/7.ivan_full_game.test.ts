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
        const token = await HelperPage.getToken()
        await HelperPage.getResponse(process.env.API_URL, token, "live")
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
        const gameSuccessBtn = await $(igDateAndTimeElementEnabled)
            .getAttribute('class')
        await expect(gameSuccessBtn).toContain('btn-success')
        await await $(igDateAndTimeElementEnabled).click()

        //<--- ADD DETAILS --->

        await DetailsPage.populateOfficials()
        //await $(await DetailsPage.detailsNextBtn).click()

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

        await HelperPage.waitUntilElement(GamePage.jumpBallBtn, 60000)
        await $(await GamePage.jumpBallBtn).click()
        await HelperPage.waitUntilElement(GamePage.jumpBallCompetitorsElements, 60000)
        const competitor = await $$(await GamePage.jumpBallCompetitorsElements)
        await $(competitor[0]).click()
        await $(competitor[5]).click()

        await HelperPage.waitUntilElement(GamePage.startMatchBtn, 60000)
        await $(await GamePage.startMatchBtn).click()
        await HelperPage.waitUntilElement(GamePage.homeTeamStartFirstBtn, 60000)
        await $(await GamePage.homeTeamStartFirstBtn).click()
        await HelperPage.waitUntilElement(GamePage.teamScoreResult, 60000)

        //<--- GET URL --->
        await HelperPage.pageUrlId()

        //<--- START MATCH --->
        let teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("0")
        //await expect(teamScoreResult[1]).toEqual("0")

        await GamePage.makeFoul(game.home, game.home, game.inBox, game.player, game.offensiveFoul, 0, game.made, game.noPlayer, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.away, game.inBox, game.player, game.offensiveFoul, 0, game.made, game.noPlayer, null, 'no substitution')
        await GamePage.miss2Points(game.home, game.inBox, game.hookShot, 'null', game.home, 'null', 'null', 'null', 'null', false)
        await GamePage.miss2Points(game.home, game.outBox, game.hookShot, 'null', 'null', game.block, game.away, game.player, 'null', false)
        await GamePage.miss2Points(game.away, game.inBox, game.hookShot, 'null', game.away, 'null', 'null', 'null', 'null', false)
        await GamePage.miss2Points(game.away, game.outBox, game.hookShot, 'null', 'null', 'null', 'null', 'null', game.shotClockValidation, false)
        await GamePage.miss3Points(game.home, game.stepBackJumpShot, 'null', 'null', game.block, game.away, game.player, 'null', false)
        await GamePage.miss3Points(game.away, game.stepBackJumpShot, 'null', 'null', 'null', 'null', 'null', game.shotClockValidation, false)

        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        await GamePage.made2Points(game.home, game.inBox, game.jumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.home, game.inBox, game.turnAroundJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.ballHandling, turnover.stealPlayer)
        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)

        //<--- MADE 2 POINTS -->

        await GamePage.makeTurnover(game.home, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.away, game.inBox, game.layup, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("0")
        //await expect(teamScoreResult[1]).toEqual("2")

        await browser.pause(2000)
        await GamePage.made2Points(game.home, game.inBox, game.hookShot, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.offensiveTrue, game.tipinMiss, false)
        await browser.pause(2000)
        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("2")
        //await expect(teamScoreResult[1]).toEqual("2")

        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("4")
        //await expect(teamScoreResult[1]).toEqual("2")

        await GamePage.made2Points(game.away, game.inBox, game.layup, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("4")
        //await expect(teamScoreResult[1]).toEqual("4")

        await GamePage.made2Points(game.home, game.inBox, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveFalse, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("6")
        //await expect(teamScoreResult[1]).toEqual("4")

        await GamePage.made2Points(game.away, game.inBox, game.floatingJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveFalse, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("6")
        //await expect(teamScoreResult[1]).toEqual("7")

        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        await GamePage.made2Points(game.home, game.inBox, game.pullUpJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("9")
        //await expect(teamScoreResult[1]).toEqual("7")

        await GamePage.made2Points(game.away, game.inBox, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakFalse, game.defensiveFalse, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("9")
        //await expect(teamScoreResult[1]).toEqual("10")

        await GamePage.made2Points(game.home, game.inBox, game.turnAroundJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakFalse, game.defensiveFalse, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("12")
        //await expect(teamScoreResult[1]).toEqual("10")

        await GamePage.made2Points(game.away, game.inBox, game.drivingLayup, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMade, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("12")
        //await expect(teamScoreResult[1]).toEqual("14")

        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        await browser.pause(2000)
        await GamePage.made2Points(game.away, game.inBox, game.hookShot, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMiss, false)
        await browser.pause(2000)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("16")
        //await expect(teamScoreResult[1]).toEqual("14")

        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("19")
        //await expect(teamScoreResult[1]).toEqual("14")

        await GamePage.made2Points(game.away, game.inBox, game.alleyOop, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMadeFauled, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("19")
        //await expect(teamScoreResult[1]).toEqual("18")

        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made2Points(game.away, game.inBox, game.dunk, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, game.noFollowOn, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("19")
        //await expect(teamScoreResult[1]).toEqual("20")

        //<--- FREETHROWS TIMEOUT --->
        await GamePage.freethrowsTimeout(game.home)
        await GamePage.freethrowsTimeout(game.away)

        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        //<--- TECHNICAL TIMEOUT --->
        await GamePage.technicalFoul(game.home, '1', '5')
        await GamePage.technicalFoul(game.away, '2', game.bench)
        await GamePage.technicalFoul(game.home, '3', game.coach)

        await browser.pause(1000)

        await GamePage.endPeriod('down', 6)

        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)

        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await browser.pause(5000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)
        await $(await GamePage.editCheckedStartTimePencil).click()

        //<--- SECOND PERIOD --->
        await GamePage.makeSubstitution('5 players')

        await browser.pause(2000)
        await GamePage.miss2Points(game.away, game.outBox, game.floatingJumpShot, game.home, 'null', 'null', 'null', 'null', 'null', false)

        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)

        await GamePage.miss2Points(game.away, game.outBox, game.floatingJumpShot, game.home, 'null', 'null', 'null', 'null', 'null', false)

        await GamePage.miss2Points(game.home, game.outBox, game.dunk, 'null', game.away, 'null', 'null', 'null', 'null', false)

        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)

        await GamePage.miss2Points(game.home, game.outBox, game.hookShot, 'null', 'null', game.block, game.away, game.player, 'null', false)

        await GamePage.made2Points(game.away, game.inBox, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.miss3Points(game.home, game.pullUpJumpShot, game.away, 'null', 'null', 'null', 'null', 'null', false)
        await GamePage.miss3Points(game.away, game.pullUpJumpShot, game.home, 'null', 'null', 'null', 'null', 'null', false)

        await GamePage.made2Points(game.home, game.inBox, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.away, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.miss3Points(game.home, game.fadeAwayJumpShot, 'null', game.away, 'null', 'null', 'null', 'null', false)
        await GamePage.miss3Points(game.away, game.fadeAwayJumpShot, 'null', game.home, 'null', 'null', 'null', 'null', false)

        await GamePage.made2Points(game.home, game.inBox, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.away, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.miss3Points(game.home, game.stepBackJumpShot, 'null', 'null', game.block, game.away, game.player, 'null', false)
        await GamePage.miss3Points(game.away, game.stepBackJumpShot, 'null', 'null', game.block, game.home, game.player, 'null', false)

        await GamePage.makeTurnover(game.home, game.player, turnover.badPass, turnover.stealPlayer)

        //<--- MADE 3 POINTS --->
        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.home, turnover.teamTurnover, turnover.second8Violation, turnover.noSteal)
        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)

        await GamePage.made3Points(game.home, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveFalse, null, false)

        await GamePage.makeTurnover(game.away, turnover.teamTurnover, turnover.second8Violation, turnover.noSteal)
        await GamePage.made3Points(game.home, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.away, game.floatingJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveFalse, null, false)

        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        await GamePage.made3Points(game.home, game.pullUpJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, null, false)

        await GamePage.made3Points(game.away, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.home, game.turnAroundJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakFalse, game.defensiveFalse, null, false)

        await browser.pause(2000)
        await GamePage.made3Points(game.away, game.jumpShot, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMiss, false)
        await browser.pause(2000)

        await GamePage.made3Points(game.away, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.home, game.fadeAwayJumpShot, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMade, false)

        await GamePage.made3Points(game.away, game.floatingJumpShot, game.miss, game.assist, game.foulOnShotTrue, game.fastBreakTrue, game.defensiveTrue, game.tipinMadeFauled, false)

        await GamePage.made3Points(game.away, game.pullUpJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, game.noFollowOn, false)
        teamScoreResult = await HelperPage.returnArrayElementsTextFunction(await GamePage.teamScoreResult)
        //await expect(teamScoreResult[0]).toEqual("48")
        //await expect(teamScoreResult[1]).toEqual("59")

        await browser.pause(1000)

        await GamePage.endPeriod('down', 6)

        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)

        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await browser.pause(5000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)
        await $(await GamePage.editCheckedStartTimePencil).click()
        await browser.pause(1000)

        //<--- THIRD PERIOD --->

        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.switchTeamsBtn).click()
        await browser.pause(1000)

        await GamePage.makeSubstitution('random')
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)

        await GamePage.miss2Points(game.away, game.outBox, game.floatingJumpShot, game.home, 'null', 'null', 'null', 'null', 'null', false)

        await GamePage.miss2Points(game.home, game.outBox, game.dunk, 'null', game.away, 'null', 'null', 'null', 'null', false)

        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)

        await GamePage.miss2Points(game.home, game.outBox, game.hookShot, 'null', 'null', game.block, game.away, game.player, 'null', false)

        await GamePage.made2Points(game.away, game.inBox, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.miss3Points(game.home, game.pullUpJumpShot, game.away, 'null', 'null', 'null', 'null', 'null', false)
        await GamePage.miss3Points(game.away, game.pullUpJumpShot, game.home, 'null', 'null', 'null', 'null', 'null', false)

        await GamePage.made2Points(game.home, game.inBox, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.away, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.miss3Points(game.home, game.fadeAwayJumpShot, 'null', game.away, 'null', 'null', 'null', 'null', false)
        await GamePage.miss3Points(game.away, game.fadeAwayJumpShot, 'null', game.home, 'null', 'null', 'null', 'null', false)

        await GamePage.made2Points(game.home, game.inBox, game.fadeAwayJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await GamePage.made3Points(game.away, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.miss3Points(game.home, game.stepBackJumpShot, 'null', 'null', game.block, game.away, game.player, 'null', false)
        await GamePage.miss3Points(game.away, game.stepBackJumpShot, 'null', 'null', game.block, game.home, game.player, 'null', false)

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

        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        await GamePage.makeTurnover(game.away, turnover.teamTurnover, turnover.second5Violation, 'null')
        await GamePage.makeTurnover(game.home, turnover.teamTurnover, turnover.second8Violation, 'null')
        await GamePage.makeTurnover(game.away, turnover.teamTurnover, turnover.shotClock, 'null')
        await GamePage.makeTurnover(game.home, turnover.teamTurnover, turnover.other, 'null')

        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameHomeTeamCallTimeout), await $(GamePage.gameFullTimeout), 'Full timeout', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))
        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameAwayTeamCallTimeout), await $(GamePage.gameShortTimeout), 'Short timeout', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))
        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameAwayTeamCallTimeout), await $(GamePage.gameCommercialTimeout), 'Commercial', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))
        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameOfficialTimeout), await $(GamePage.gameOfficials), 'Officials', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))
        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameOfficialTimeout), await $(GamePage.gameCommercial), 'Commercial', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))
        await GamePage.checkTimeoutBtns(await $(GamePage.gameTimeoutBtn), await $(GamePage.gameOfficialTimeout), await $(GamePage.gameMedia), 'Media', await $(GamePage.gameBloodRuleCheckbox), await $(GamePage.gameMandatoryCheckbox), await $(GamePage.gameTimeoutOkBtn))

        await browser.pause(1000)

        await GamePage.endPeriod('down', 6)

        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)

        await GamePage.made2Points(game.away, game.inBox, game.stepBackJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)

        await browser.pause(5000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)
        await $(await GamePage.editCheckedStartTimePencil).click()
        await browser.pause(1000)

        //<--- FOURTH PERIOD --->
        await GamePage.makeSubstitution('random')
        await GamePage.made2Points(game.home, game.inBox, game.jumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.home, game.inBox, game.turnAroundJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.ballHandling, turnover.stealPlayer)
        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveTrue, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.makeFoul(game.home, game.home, game.inBox, game.player, game.offensiveFoul, 0, game.made, game.noPlayer, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.player, game.technicalFoul, 1, game.made, game.player, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.away, game.inBox, game.coach, null, 1, game.made, game.player, game.coachDisqualifying, 'no substitution')
        await GamePage.makeFoul(game.home, game.home, game.inBox, game.player, game.unsportsmanlike, 2, game.miss, game.noPlayer, null, 'no substitution')
        await GamePage.makeFoul(game.home, game.away, game.outBox, game.player, game.doubleFoul, 3, game.miss, game.noPlayer, null, 'make substitution')
        await GamePage.makeFoul(game.home, game.home, game.inBox, game.player, game.disqualifying, 2, game.made, game.player, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.player, game.personalFoul, 1, game.made, game.player, null, 'no substitution')

        await GamePage.makeFoul(game.home, game.home, game.inBox, game.bench, null, 0, game.made, null, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.bench, null, 1, game.miss, null, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.inBox, game.bench, null, 2, game.made, null, null, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.bench, null, 3, game.miss, null, null, 'no substitution')

        await GamePage.makeFoul(game.home, game.home, game.inBox, game.coach, null, 0, game.miss, game.player, game.coachTechnical, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.coach, null, 1, game.made, game.player, game.coachTechnical, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.inBox, game.coach, null, 2, game.made, game.player, game.coachTechnical, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.coach, null, 3, game.miss, game.player, game.coachTechnical, 'no substitution')

        await GamePage.makeFoul(game.away, game.home, game.inBox, game.coach, null, 0, game.miss, game.player, game.coachDisqualifying, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.coach, null, 1, game.made, game.noPlayer, game.coachDisqualifying, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.inBox, game.coach, null, 2, game.made, game.player, game.coachDisqualifying, 'no substitution')
        await GamePage.makeFoul(game.away, game.home, game.outBox, game.coach, null, 3, game.miss, game.player, game.coachDisqualifying, 'no substitution')

        await GamePage.jumpBall(jumpBallTypes.HeldBallType, "non insert mode")
        await GamePage.jumpBall(jumpBallTypes.UnclearPossesionType, "non insert mode")
        await GamePage.jumpBall(jumpBallTypes.LodgedBallType, "non insert mode")
        await GamePage.jumpBall(jumpBallTypes.LooseBallType, "non insert mode")
        await GamePage.jumpBall(jumpBallTypes.DoubleViolationType, "non insert mode")
        await browser.pause(1000)

        await GamePage.endPeriod('down', 6)

        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(1000)

        await GamePage.made3Points(game.away, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await browser.pause(5000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)

        await HelperPage.waitUntilElement(GamePage.nextPeriodBtn, 60000)
        await $(await GamePage.nextPeriodBtn).click()


        await HelperPage.waitUntilElement(GamePage.startPeriodBtn, 60000)
        await $(await GamePage.startPeriodBtn).click()

        //<- OVER TIME PERIOD ->

        await GamePage.makeSubstitution('random')
        await GamePage.makeTurnover(game.home, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.made2Points(game.away, game.inBox, game.turnAroundJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.made3Points(game.home, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)
        await GamePage.makeTurnover(game.away, game.player, turnover.badPass, turnover.stealPlayer)
        await GamePage.makeFoul(game.home, game.home, game.inBox, game.bench, null, 0, game.made, null, null, 'no substitution')
        await GamePage.made2Points(game.home, game.outBox, game.jumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeFoul(game.home, game.away, game.inBox, game.coach, null, 0, game.miss, game.player, game.coachTechnical, 'no substitution')
        await GamePage.made2Points(game.away, game.outBox, game.pullUpJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeFoul(game.home, game.away, game.outBox, game.player, game.technicalFoul, 0, game.made, game.player, null, 'no substitution')
        await GamePage.made2Points(game.away, game.inBox, game.pullUpJumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeFoul(game.home, game.away, game.outBox, game.player, game.disqualifying, 2, game.made, game.player, null, 'no substitution')
        await GamePage.made2Points(game.home, game.inBox, game.jumpShot, game.made, game.assist, game.foulOnShotFalse, game.fastBreakTrue, game.defensiveTrue, null, false)
        await GamePage.makeFoul(game.home, game.away, game.outBox, game.player, game.unsportsmanlike, 0, game.miss, game.noPlayer, null, 'no substitution')

        await browser.pause(2000)
        await HelperPage.waitUntilElement(HelperPage.periodDropDown, 60000)
        await $(await HelperPage.periodDropDown).selectByVisibleText("P4")

        await browser.pause(2000)
        const insertBtn = await $$(await HelperPage.insertPlayBtnArray)

        await HelperPage.waitUntilElement(insertBtn[0], 60000)
        await $(await insertBtn[0]).click()

        await GamePage.changeSemaphoreTime("up", 9, 0, null, null, null)

        await browser.pause(1000)
        await $(await GamePage.editCheckedStartTimePencil).click()
        await browser.pause(1000)
        await GamePage.endPeriod('down', 6)

        await browser.pause(1000)
        await $(await GamePage.startPeriodBtn).click()
        await browser.pause(2000)

        await GamePage.made2Points(game.away, game.outBox, game.jumpShot, game.made, game.noAssist, game.foulOnShotFalse, game.fastBreakFalse, game.defensiveFalse, null, false)

        await browser.pause(5000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)
        await $(await GamePage.stopMatchBtn).click()
        await browser.pause(1000)

        await HelperPage.waitUntilElement(GamePage.endMatchBtn, 60000)
        await $(await GamePage.endMatchBtn).click()

        await HelperPage.waitUntilElement(GamePage.confirmMatchBtn, 60000)
        await $(await GamePage.confirmMatchBtn).click()

        await HelperPage.waitUntilElement(GamePage.completeLabel, 60000)
        await expect(await $(GamePage.completeLabel).getText()).toContain("Complete")

        await browser.pause(1000)

        await $(await HelperPage.periodDropDown).selectByVisibleText("P1")

        await HelperPage.getStatisticsForEntityInFixtures(process.env.API_URL, token, "live")

        let aggregatedPastResponse = await HelperPage.returnAggregatedJson(`responses/${process.env.NAME}/pastJsonResponse.json`)
        let aggregatedCurrentResponse = await HelperPage.returnAggregatedJson(`responses/${process.env.NAME}/currentJsonResponse.json`)

        await expect(aggregatedPastResponse).toMatchObject(aggregatedCurrentResponse)
        await browser.pause(2000)
    });
});