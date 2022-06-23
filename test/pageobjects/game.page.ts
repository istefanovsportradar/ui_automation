import HelperPage from './helper.page';
var expect = require('chai').expect
require('dotenv').config();

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GamePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get jumpBallBtn() {
        return '[class="match-button enabled-true undefined"]'
    }
    /**
     * define selectors using getter methods
     */
    public get jumpBallCompetitorsElements() {
        return 'div.active-players > div'
    }
    /**
     * define selectors using getter methods
     */
    public get homePlayerReboundedPlayers() {
        return 'div:nth-child(3) > div.active-players > div'
    }
    /**
     * define selectors using getter methods
     */
    public get awayPlayerReboundedPlayers() {
        return 'div:nth-child(4) > div.active-players > div'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamReboundedBtn() {
        return 'div[class="match-button wide team  team-0 enabled-true dark"]'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamReboundedBtn() {
        return 'div[class="match-button wide team team-1 enabled-true dark"]'
    }
    /**
     * define selectors using getter methods
     */
    public get blockBtn() {
        return '//*/div[contains(text(),"Block")]'
    }
    /**
     * define selectors using getter methods
     */
    public get startMatchBtn() {
        return '[class="match-button action center enabled-true"]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStartFirstBtn() {
        return 'div.team-select-buttons.enabled-true > div:nth-child(1) > span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamStartFirstBtn() {
        return 'div.team-select-buttons.enabled-true > div:nth-child(2) > span'
    }
    /**
     * define selectors using getter methods
     */
    public get courtMap() {
        return 'div[class^="court-map enabled-true"]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamAttakMade2btn() {
        return 'div.team-buttons.team-0.dark > div.team-button.enabled-true.success-1 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamAttakMade2btn() {
        return 'div.team-buttons.team-1.dark > div.team-button.enabled-true.success-1 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamAttackTeamMiss2btn() {
        return 'div.team-buttons.team-0.dark > div.team-button.enabled-true.success-0 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamAttackTeamMiss2btn() {
        return 'div.team-buttons.team-1.dark > div.team-button.enabled-true.success-0 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamAttackFoulBtn() {
        return 'div.team-buttons-base.arrowTop.enabled-true > div.team-buttons.team-0.dark > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamAttackFoulBtn() {
        return 'div.team-buttons.team-1.dark > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamAttackTurnOverBtn() {
        return 'div.team-buttons-base.arrowTop.enabled-true > div.team-buttons.team-0.dark > div:nth-child(4)'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamAttackTurnOverBtn() {
        return 'div.team-buttons.team-1.dark > div:nth-child(4)'
    }
    /**
     * define selectors using getter methods
     */
    public get homeDefenceTeamMade3Btn() {
        return 'div.team-buttons.team-1.dark > div.team-button.enabled-true.success-1 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayDefenceTeamMade3Btn() {
        return 'div.team-buttons.team-0.dark > div.team-button.enabled-true.success-1 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeDefenceTeamMiss3Btn() {
        return 'div.team-buttons.team-1.dark > div.team-button.enabled-true.success-0 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayDefenceTeamMiss3Btn() {
        return 'div.team-buttons.team-0.dark > div.team-button.enabled-true.success-0 > span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeDefenceTeamFoulBtn() {
        return 'div.team-buttons.team-0.dark > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get awayDefenceTeamFoulBtn() {
        return 'div.team-buttons.team-1.dark > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get homeDefenceTeamTurnOverBtn() {
        return 'div.team-buttons.team-1.dark > div:nth-child(4)'
    }
    /**
     * define selectors using getter methods
     */
    public get awayDefenceTeamTurnOverBtn() {
        return 'div.team-buttons.team-0.dark > div:nth-child(4)'
    }
    /**
     * define selectors using getter methods
     */
    public get jumpShotBtn() {
        return '[class="type-button jumpShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get layupBtn() {
        return '[class="type-button layup"]'
    }
    /**
     * define selectors using getter methods
     */
    public get fadeAwayShotBtn() {
        return '[class="type-button fadeAway"]'
    }
    /**
     * define selectors using getter methods
     */
    public get floatingJumpShotBtn() {
        return '[class="type-button floatingJumpShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get pullUpJumpShotBtn() {
        return '[class="type-button pullUpJumpShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get stepBackJumpShotBtn() {
        return '[class="type-button stepBackJumpShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get turnAroundJumpShotBtn() {
        return '[class="type-button turnAroundJumpShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get drivingLayupBtn() {
        return '[class="type-button drivingLayup"]'
    }
    /**
     * define selectors using getter methods
     */
    public get hookShotBtn() {
        return '[class="type-button hookShot"]'
    }
    /**
     * define selectors using getter methods
     */
    public get alleyOopBtn() {
        return '[class="type-button alleyOop"]'
    }
    /**
     * define selectors using getter methods
     */
    public get dunkBtn() {
        return '[class="type-button dunk"]'
    }
    /**
     * define selectors using getter methods
     */
    public get okBtn() {
        return '[class="match-button center action enabled-true undefined"]'
    }
    /**
     * define selectors using getter methods
     */
    public get noAssistBtn() {
        return '[class="match-button center enabled-true undefined"]'
    }
    /**
     * define selectors using getter methods
     */
    public get teamScoreResult() {
        return 'div.team-score.recovery-undefined'
    }
    /**
     * define selectors using getter methods
     */
    public get orangeFlag() {
        return 'div[class="log-event pending-true"]'

    }
    /**
     * define selectors using getter methods
     */
    public get defensiveGoaltendCheckbox() {
        return 'div.option-group.enabled-true > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get fastBreakCheckbox() {
        return 'div.option-group.enabled-true > div:nth-child(2)'
    }
    /**
     * define selectors using getter methods
     */
    public get foulOnTheShotCheckbox() {
        return 'div.option-group.enabled-true > div:nth-child(1)'
    }
    /**
     * define selectors using getter methods
     */
    public get freethrowsMadeBtn() {
        return 'div.freethrow-result.success-null.enabled-true > div.enabled-true.match-button.made'
    }
    /**
     * define selectors using getter methods
     */
    public get freethrowsMissedBtn() {
        return 'div.freethrow-result.success-null.enabled-true > div.enabled-true.match-button.missed'
    }
    /**
     * define selectors using getter methods
     */
    public get freethrowsTimeOutBtn() {
        return 'div.left-panel > div:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get freethrowsTechnicalFoulBtn() {
        return 'div.left-panel > div:nth-child(4)'
    }
    /**
     * define selectors using getter methods
     */
    public get tipinMadeBtn() {
        return '//div[text() = "Tipin made"]'
    }
    /**
     * define selectors using getter methods
     */
    public get tipinMissBtn() {
        return '//div[text() = "Tipin missed"]'
    }
    /**
     * define selectors using getter methods
     */
    public get tipinMadeFauledBtn() {
        return '//div[text() = "Tipin made - fouled"]'
    }
    /**
     * define selectors using getter methods
     */
    public get noFollowOnBtn() {
        return '//div[text() = "No follow on"]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamRebound() {
        return 'div > div.match-button.wide.team.team-0.enabled-true.dark'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamRebound() {
        return 'div > div.match-button.wide.team.team-1.enabled-true.dark'
    }
    /**
     * define selectors using getter methods
     */
    public get timeoutBtn() {
        return '//*[@id="root"]/div/div[2]/div[2]/div/div[2]/div[2]/div[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get gameTimeoutBtn() {
        return '//div[contains(text(),"Timeout")]'
    }
    /**
    * define selectors using getter methods
    */
    public get homeTeamCallTimeout() {
        return '//*[@id="root"]/div/div[2]/div[3]/div/div[1]/span'
    }
    /**
    * define selectors using getter methods
    */
    public get gameHomeTeamCallTimeout() {
        return 'div.main-panel.large.padded.align-center.enabled-true > div > div:nth-child(2) > span'
    }
    /**
    * define selectors using getter methods
    */
    public get awayTeamCallTimeout() {
        return '//*[@id="root"]/div/div[2]/div[3]/div/div[3]/span'
    }
    /**
    * define selectors using getter methods
    */
    public get gameAwayTeamCallTimeout() {
        return 'div.main-panel.large.padded.align-center.enabled-true > div > div:nth-child(4)'
    }
    /**
    * define selectors using getter methods
    */
    public get fullTimeout() {
        return '//div[contains(text(),"Full timeout")]'
    }
    /**
    * define selectors using getter methods
    */
    public get gameFullTimeout() {
        return 'div.button-group.enabled-true:nth-child(3) > div.type-button.full:nth-child(1)'
    }
    /**
    * define selectors using getter methods
    */
    public get shortTimeout() {
        return '//div[contains(text(),"Short timeout")]'
    }
    /**
    * define selectors using getter methods
    */
    public get gameShortTimeout() {
        return 'div.button-group.enabled-true > div.type-button.short'
    }
    /**
    * define selectors using getter methods
    */
    public get gameCommercialTimeout() {
        return '//div[contains(text(),"Commercial")]'
    }
    /**
    * define selectors using getter methods
    */
    public get commercialTimeout() {
        return '//div[contains(text(),"Commercial")]'
    }
    /**
    * define selectors using getter methods
    */
    public get officialTimeout() {
        return '//div[contains(@class, "match-button enabled-true undefined") and contains(., "Official")]'

    }
    /**
    * define selectors using getter methods
    */
    public get gameOfficialTimeout() {
        return 'div.main-panel.large.padded.align-center.enabled-true > div > div.match-button.enabled-true.undefined'

    }
    /**
    * define selectors using getter methods
    */
    public get gameOfficials() {
        return '//div[contains(text(),"Officials")]'

    }
    /**
   * define selectors using getter methods
   */
    public get gameCommercial() {
        return '//div[contains(text(),"Commercial")]'

    }
    /**
   * define selectors using getter methods
   */
    public get gameMedia() {
        return '//div[contains(text(),"Media")]'

    }
    /**
    * define selectors using getter methods
    */
    public get bloodRuleCheckbox() {
        return '//div[contains(@class, "option-button") and contains(., "Blood rule")]/i'

    }
    /**
     * define selectors using getter methods
     */
    public get mandatoryCheckbox() {
        return '//div[contains(@class, "option-button") and contains(., "Mandatory")]/i'

    }
    /**
     * define selectors using getter methods
     */
    public get gameMandatoryCheckbox() {
        return 'div.option-group.enabled-true > div:nth-child(2) > i'

    }
    /**
    * define selectors using getter methods
    */
    public get timeoutOkBtn() {
        return '//div[contains(text(),"OK")]'

    }
    /**
    * define selectors using getter methods
    */
    public get gameTimeoutOkBtn() {
        return '//div[contains(text(),"OK")]'

    }
    /**
    * define selectors using getter methods
    */
    public get editStartTimePencil() {
        return 'i[class="edit-start fas fa-pen-square"]'

    }
    /**
    * define selectors using getter methods
    */
    public get editCheckedStartTimePencil() {
        return 'i[class="edit-done fas fa-check-square"]'

    }
    /**
    * define selectors using getter methods
    */
    public get minutesArrowDownBtn() {
        return '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[1]/div[3]/i[2]'

    }
    /**
    * define selectors using getter methods
    */
    public get secondsArrowDownBtn() {
        return '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[1]/div[4]/i[2]'

    }
    /**
    * define selectors using getter methods
    */
    public get minutesArrowUpBtn() {
        return '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[1]/div[3]/i[1]'

    }
    /**
    * define selectors using getter methods
    */
    public get secondsArrowUpBtn() {
        return '//*[@id="root"]/div/div[2]/div/div[1]/div[2]/div[1]/div[4]/i[1]'

    }
    /**
     * define selectors using getter methods
     */
    public get stopMatchBtn() {
        return 'span[class="stop-button"]'

    }
    /**
     * define selectors using getter methods
     */
    public get startPeriodBtn() {
        return 'span[class="start-button"]'

    }
    /**
     * define selectors using getter methods
     */
    public get switchTeamsBtn() {
        return 'i[class="fas fa-exchange-alt"]'

    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamMiss3PointsBtn() {
        return '//*[@id="root"]/div/div[2]/div[6]/div[2]/div[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamMiss3PointsBtn() {
        return '//*[@id="root"]/div/div[2]/div[6]/div[3]/div[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamTurnoverBtn() {
        return '//*[@id="root"]/div/div[2]/div[6]/div[2]/div[4]'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamTurnoverBtn() {
        return '//*[@id="root"]/div/div[2]/div[6]/div[3]/div[4]'
    }
    /**
     * define selectors using getter methods
     */
    public get teamTurnoverBtn() {
        return '//div[contains(text(),"Team Turnover")]'
    }
    /**
     * define selectors using getter methods
     */
    public get noStealBtn() {
        return '//div[contains(text(),"No Steal")]'
    }
    /**
     * define selectors using getter methods
     */
    public get displayedTime() {
        return 'div[class="time-display recovery-undefined"]'

    }
    /**
     * define selectors using getter methods
     */
    public get substitutionBtn() {
        return 'div[class="subs-button enabled-true"]'

    }
    /**
     * define selectors using getter methods
     */
    public get substitutionArrowBtn() {
        //return 'i[class="fas fa-angle-double-down"]'
        return 'div[class="swap-icon"]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamSubstitutionBtns() {
        return 'div.substitutions:nth-child(1) div:nth-child(1) div.player-select.enabled-true div.inactive-players > div.player.active-false'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamSubstitutionBtns() {
        return 'div.substitutions:nth-child(2) div:nth-child(1) div.player-select.enabled-true div.inactive-players > div.player.active-false'
    }
    /**
     * define selectors using getter methods
     */
    public get clockShotValidationBtn() {
        return '//div[contains(text(),"Shot Clock Violation")]'
    }
    /**
     * define selectors using getter methods
     */
    public get nextPeriodBtn() {
        return '//span[contains(text(),"Next Period")]'
    }
    /**
     * define selectors using getter methods
     */
    public get endMatchBtn() {
        return '//span[contains(text(),"End Match")]'
    }
    /**
     * define selectors using getter methods
     */
    public get confirmMatchBtn() {
        return '//span[contains(text(),"Confirm Match")]'
    }
    /**
     * define selectors using getter methods
     */
    public get completeLabel() {
        return '//span[contains(text(),"Complete")]'
    }
    /**
     * define selectors using getter methods
     */
    public get continueBtn() {
        return '//div[contains(text(),"Continue")]'
    }
    /**
     * define selectors using getter methods
     */
    public get cancelBtn() {
        return '//div[contains(text(),"Cancel")]'
    }
    /**
     * define selectors using getter methods
     */
    public get cancelXBtn() {
        return '//span[contains(text(),"Cancel")]'
    }

    /**
     * define selectors using getter methods
     */
    public get confirmBtn() {
        return '//div[contains(text(),"Confirm")]'
    }

    /**
     * define selectors using getter methods
     */
    public get homeTeamFaulsLabel() {
        return '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]'
    }

    /**
     * define selectors using getter methods
     */
    public get awayTeamFaulsLabel() {
        return '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]'
    }

    public async made2Points(side: string, area: string, shotType: string, madeOrMiss: string, assist: string, foulOnShotCheckbox: boolean, fastBreakCheckbox: boolean, defensiveCheckbox: boolean, tipin: any, cancel: boolean) {
        if (side.toLowerCase() == "home") {

            if (area.toLowerCase() == "out box") {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: -280, y: -90 })
                await browser.pause(500)
            }
            else {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    await browser.pause(500)
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    await browser.pause(500)
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
            }

            await HelperPage.waitUntilElement(this.homeTeamAttakMade2btn, 60000)
            await $(await this.homeTeamAttakMade2btn).click()

            if (cancel === false) {
                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await HelperPage.waitUntilElement(this.jumpShotBtn, 60000)
                await this.shotTypes(shotType)
                if (defensiveCheckbox == true) {
                    await HelperPage.waitUntilElement(this.defensiveGoaltendCheckbox, 60000)
                    await $(await this.defensiveGoaltendCheckbox).click()
                }
                if (fastBreakCheckbox == true) {
                    await HelperPage.waitUntilElement(this.fastBreakCheckbox, 60000)
                    await $(await this.fastBreakCheckbox).click()
                }
                if (foulOnShotCheckbox == true) {
                    await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
                    await this.foulOnShotCheckboxMethod(side, madeOrMiss, tipin);
                    await browser.pause(500)
                }

                await browser.pause(200)
                let isOkBtnExist = await $(this.okBtn).isExisting()
                if (isOkBtnExist == true) {
                    await HelperPage.waitUntilElement(this.okBtn, 60000)
                    await $(await this.okBtn).click()
                }

                await browser.pause(200)
                let isNoAssistBtnExist = await $(this.noAssistBtn).isExisting()
                if (isNoAssistBtnExist == true) {
                    if (assist.toLowerCase() == "no assist") {
                        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
                        await $(await this.noAssistBtn).click()
                    }
                    else {
                        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
                        const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
                        await HelperPage.waitUntilElement(el, 60000)
                        await $(await el).click()
                    }
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()

            }
        }
        else {
            if (area.toLowerCase() == "out box") {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: 280, y: -90 })
                await browser.pause(500)
            }
            else {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    await browser.pause(500)
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    await browser.pause(500)
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
            }

            await browser.pause(500)
            await HelperPage.waitUntilElement(this.awayTeamAttakMade2btn, 60000)
            await $(await this.awayTeamAttakMade2btn).click()

            if (cancel === false) {
                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await HelperPage.waitUntilElement(this.layupBtn, 60000)
                await this.shotTypes(shotType)
                if (defensiveCheckbox == true) {
                    await HelperPage.waitUntilElement(this.defensiveGoaltendCheckbox, 60000)
                    await $(await this.defensiveGoaltendCheckbox).click()
                }
                if (fastBreakCheckbox == true) {
                    await HelperPage.waitUntilElement(this.fastBreakCheckbox, 60000)
                    await $(await this.fastBreakCheckbox).click()
                }
                if (foulOnShotCheckbox == true) {
                    await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
                    await this.foulOnShotCheckboxMethod(side, madeOrMiss, tipin);
                    await browser.pause(500)
                }

                await browser.pause(200)
                let isOkBtnExist = await $(this.okBtn).isExisting()
                if (isOkBtnExist == true) {
                    await HelperPage.waitUntilElement(this.okBtn, 60000)
                    await $(await this.okBtn).click()
                }

                await browser.pause(200)
                let isNoAssistBtnExist = await $(this.noAssistBtn).isExisting()

                if (isNoAssistBtnExist == true) {
                    if (assist.toLowerCase() == "no assist") {
                        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
                        await $(await this.noAssistBtn).click()
                    }
                    else {
                        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
                        const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
                        await HelperPage.waitUntilElement(el, 60000)
                        await $(await el).click()
                    }
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()

            }
        }
        await browser.pause(500)
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function made3Points score two points
    */
    public async made3Points(side: string, shotType: string, madeOrMiss: string, assist: string, foulOnShotCheckbox: boolean, fastBreakCheckbox: boolean, defensiveCheckbox: boolean, tipin: any, cancel: boolean) {

        if (side.toLowerCase() == "home") {

            await HelperPage.waitUntilElement(this.courtMap, 60000)
            if (process.env.HEADLESS_CHROME === 'true') {
                await browser.pause(500)
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                await browser.pause(500)
            }
            else {
                await browser.pause(500)
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                await browser.pause(500)
            }

            await browser.pause(500)
            await HelperPage.waitUntilElement(this.homeTeamAttakMade2btn, 60000)
            await $(await this.homeTeamAttakMade2btn).click()

            if (cancel === false) {
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                const el = 'div.active-players > div:nth-child(' + randomPlayer + ')'
                await HelperPage.waitUntilElement(el, 60000)
                await $(await el).click()
                await HelperPage.waitUntilElement(this.jumpShotBtn, 60000)
                await this.shotTypes(shotType)
                if (defensiveCheckbox == true) {
                    await HelperPage.waitUntilElement(this.defensiveGoaltendCheckbox, 60000)
                    await $(await this.defensiveGoaltendCheckbox).click()
                    await browser.pause(500)
                }
                if (fastBreakCheckbox == true) {
                    await HelperPage.waitUntilElement(this.fastBreakCheckbox, 60000)
                    await $(await this.fastBreakCheckbox).click()
                    await browser.pause(500)
                }
                if (foulOnShotCheckbox == true) {
                    await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
                    await this.foulOnShotCheckboxMethod(side, madeOrMiss, tipin);
                    await browser.pause(500)
                }

                let isOkBtnExist = await $(this.okBtn).isExisting()
                if (isOkBtnExist == true) {
                    await HelperPage.waitUntilElement(this.okBtn, 60000)
                    await $(await this.okBtn).click()
                }

                let isNoAssistBtnExist = await $(this.noAssistBtn).isExisting()
                if (isNoAssistBtnExist == true) {
                    if (assist.toLowerCase() == "no assist") {
                        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
                        await $(await this.noAssistBtn).click()
                    }
                    else {
                        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
                        const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
                        await HelperPage.waitUntilElement(el, 60000)
                        await $(await el).click()
                    }
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
        else {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            if (process.env.HEADLESS_CHROME === 'true') {
                await browser.pause(500)
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                await browser.pause(500)
            }
            else {
                await browser.pause(500)
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                await browser.pause(500)
            }

            await browser.pause(500)
            await HelperPage.waitUntilElement(this.awayTeamAttakMade2btn, 60000)
            await $(await this.awayTeamAttakMade2btn).click()

            if (cancel === false) {
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                const el = 'div.active-players > div:nth-child(' + randomPlayer + ')'
                await HelperPage.waitUntilElement(el, 60000)
                await $(await el).click()
                await this.shotTypes(shotType)
                if (defensiveCheckbox == true) {
                    await HelperPage.waitUntilElement(this.defensiveGoaltendCheckbox, 60000)
                    await $(await this.defensiveGoaltendCheckbox).click()
                    await browser.pause(500)
                }
                if (fastBreakCheckbox == true) {
                    await HelperPage.waitUntilElement(this.fastBreakCheckbox, 60000)
                    await $(await this.fastBreakCheckbox).click()
                    await browser.pause(500)
                }
                if (foulOnShotCheckbox == true) {
                    await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
                    await this.foulOnShotCheckboxMethod(side, madeOrMiss, tipin);
                    await browser.pause(500)
                }

                let isOkBtnExist = await $(this.okBtn).isExisting()
                if (isOkBtnExist == true) {
                    await HelperPage.waitUntilElement(this.okBtn, 60000)
                    await $(await this.okBtn).click()
                }

                let isNoAssistBtnExist = await $(this.noAssistBtn).isExisting()
                if (isNoAssistBtnExist == true) {
                    if (assist.toLowerCase() == "no assist") {
                        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
                        await $(await this.noAssistBtn).click()
                    }
                    else {
                        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
                        const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
                        await HelperPage.waitUntilElement(el, 60000)
                        await $(await el).click()
                    }
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function returnExcludedRandomNumber return random number with excluded value
    */
    public async returnExcludedRandomNumber(elem: string, excludedClass: string, min: number, max: number) {
        const attrArray = []

        await HelperPage.waitUntilElement(elem, 60000)
        const atr = await $$(elem)
        await browser.pause(200)
        for (var i = 0; i < atr.length; i++) {
            await browser.pause(200)
            attrArray.push(await atr[i].getAttribute('class'))
        }

        const newArr = await attrArray.map(element => {
            if (element === excludedClass) {
                return ' ';
            }
            ;
        });

        const excludeNumb = await newArr.indexOf(' ')
        var randoimNumberExc = Math.floor(Math.random() * (min - max) + max);
        if (randoimNumberExc == excludeNumb + 1) {
            await browser.pause(200)
            randoimNumberExc++;
        }

        let numb = randoimNumberExc
        return numb
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function shotTypes click on wanted shoot type
    */
    public async shotTypes(shotType: string) {
        switch (shotType.toLowerCase()) {
            case "jump shot":
                await $(await this.jumpShotBtn).click()
                break;
            case "layup":
                await $(await this.layupBtn).click()
                break;
            case "fade away jump shot":
                await $(await this.fadeAwayShotBtn).click()
                break;
            case "floating jump shot":
                await $(await this.floatingJumpShotBtn).click()
                break;
            case "pull up jump shot":
                await $(await this.pullUpJumpShotBtn).click()
                break;
            case "step back jump shot":
                await $(await this.stepBackJumpShotBtn).click()
                break;
            case "turn around jump shot":
                await $(await this.turnAroundJumpShotBtn).click()
                break;
            case "driving layup":
                await $(await this.drivingLayupBtn).click()
                break;
            case "hook shot":
                await $(await this.hookShotBtn).click()
                break;
            case "alley oop":
                await $(await this.alleyOopBtn).click()
                break;
            case "dunk":
                await $(await this.dunkBtn).click()
                break;
        }
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function foulOnShotCheckboxMethod
    */
    public async foulOnShotCheckboxMethod(side: string, madeOrMiss: string, tipin: string) {
        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)

        await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
        await $(await this.foulOnTheShotCheckbox).click()
        await HelperPage.waitUntilElement(this.okBtn, 60000)
        await $(await this.okBtn).click()
        await browser.pause(1000)

        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
        const randomActivePlayer1 = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
        await HelperPage.waitUntilElement(randomActivePlayer1, 60000)
        await $(await randomActivePlayer1).click()
        await browser.pause(1000)

        randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
        const randomActivePlayer2 = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
        await HelperPage.waitUntilElement(randomActivePlayer2, 60000)
        await $(await randomActivePlayer2).click()
        await browser.pause(1000)


        if (madeOrMiss === 'made') {
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            let doneBtn = await $('//div[contains(@class, "match-button action enabled-true") and contains(., "Done")]')
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await browser.pause(500)
        }
        if (madeOrMiss === 'miss') {
            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
            await browser.pause(500)
            await $(await this.freethrowsMissedBtn).click()
            await browser.pause(500)
            let doneBtn = await '//div[contains(@class, "match-button action enabled-true") and contains(., "Done")]'
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await browser.pause(500)
            await $(await doneBtn).click()
            await browser.pause(500)

            if (side.toLocaleLowerCase() == 'home') {
                await browser.pause(500)
                let homeTeamPlayer = 'div[class="player active-true dark  "]'
                await HelperPage.waitUntilElement(homeTeamPlayer, 60000)
                let player = await $$(await homeTeamPlayer)
                randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await browser.pause(500)
            }
            if (side.toLocaleLowerCase() == 'away') {
                await browser.pause(500)
                let awayTeamPlayer = 'div[class="player active-true dark  "]'
                await HelperPage.waitUntilElement(awayTeamPlayer, 60000)
                let player = await $$(await awayTeamPlayer)
                randomPlayer = await HelperPage.generateRandomNumberRange(5, 9)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await browser.pause(500)
            }

            await browser.pause(1000)
            let isTipinMadeExist = await $(this.tipinMadeBtn).isExisting()
            await browser.pause(500)

            if (isTipinMadeExist == true) {

                if (tipin.toLowerCase() == 'made') {
                    await browser.pause(500)
                    await HelperPage.waitUntilElement(this.tipinMadeBtn, 60000)
                    await $(await this.tipinMadeBtn).click()
                    await browser.pause(1500)
                }
                if (tipin.toLowerCase() == 'miss') {
                    await browser.pause(500)
                    await HelperPage.waitUntilElement(this.tipinMissBtn, 60000)
                    await $(await this.tipinMissBtn).click()
                    await browser.pause(500)

                    if (side.toLocaleLowerCase() == 'home') {
                        await browser.pause(500)
                        let homeTeamPlayer = 'div[class="player active-true dark  "]'
                        await HelperPage.waitUntilElement(homeTeamPlayer, 60000)
                        let player = await $$(await homeTeamPlayer)
                        randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()
                        await browser.pause(1500)
                    }
                    if (side.toLocaleLowerCase() == 'away') {
                        await browser.pause(500)
                        let awayTeamPlayer = 'div[class="player active-true dark  "]'
                        await HelperPage.waitUntilElement(awayTeamPlayer, 60000)
                        let player = await $$(await awayTeamPlayer)
                        randomPlayer = await HelperPage.generateRandomNumberRange(5, 9)
                        await browser.pause(500)
                        await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                        await $(await player[randomPlayer]).click()
                        await browser.pause(1500)
                    }

                    await browser.pause(5000)
                    await HelperPage.waitUntilElement(this.tipinMadeFauledBtn, 60000)
                    await $(await this.tipinMadeFauledBtn).click()
                    let homeTeamPlayer = 'div[class="player active-true dark  "]'
                    await HelperPage.waitUntilElement(homeTeamPlayer, 60000)
                    let player = await $$(await homeTeamPlayer)
                    randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()

                    await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                    await $(await this.freethrowsMissedBtn).click()
                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()

                    if (side.toLocaleLowerCase() == 'home') {
                        await HelperPage.waitUntilElement(homeTeamPlayer, 60000)
                        let player = await $$(await homeTeamPlayer)
                        randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                        await $(await player[randomPlayer]).click()
                        await browser.pause(300)
                    }
                    if (side.toLocaleLowerCase() == 'away') {
                        let awayTeamPlayer = 'div[class="player active-true dark  "]'
                        await HelperPage.waitUntilElement(awayTeamPlayer, 60000)
                        let player = await $$(await awayTeamPlayer)
                        randomPlayer = await HelperPage.generateRandomNumberRange(5, 9)
                        await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                        await $(await player[randomPlayer]).click()
                        await browser.pause(300)
                    }

                    await HelperPage.waitUntilElement(this.noFollowOnBtn, 60000)
                    await $(await this.noFollowOnBtn).click()

                }
                if (tipin.toLowerCase() == 'made - fauled') {
                    await HelperPage.waitUntilElement(this.tipinMadeFauledBtn, 60000)
                    await $(await this.tipinMadeFauledBtn).click()
                    let homeTeamPlayer = 'div[class="player active-true dark  "]'
                    await HelperPage.waitUntilElement(homeTeamPlayer, 60000)
                    let player = await $$(await homeTeamPlayer)
                    randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()
                    await browser.pause(300)

                    let freethrowsMissedBtn = await 'div.freethrow-result.success-null.enabled-true > div.enabled-true.match-button.missed'
                    await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                    await $(await freethrowsMissedBtn).click()
                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                    await HelperPage.waitUntilElement(this.awayTeamRebound, 60000)
                    await $(await this.awayTeamRebound).click()
                    await browser.pause(300)

                }
                if (tipin.toLowerCase() == 'no follow on') {
                    await HelperPage.waitUntilElement(this.noFollowOnBtn, 60000)
                    await $(await this.noFollowOnBtn).click()
                }
            }
        }

        await browser.pause(1000)
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function freethrowsTimeout
    */
    public async freethrowsTimeout(side: string) {
        const foulingPlayer4 = 'div.player-select.enabled-true > div.active-players > div:nth-child(4)'

        const timeoutBtn = await $(await this.timeoutBtn)
        const homeTeamCallTimeout = await $(await this.homeTeamCallTimeout)
        const awayTeamCallTimeout = await $(await this.awayTeamCallTimeout)
        const fullTimeout = await $(await this.fullTimeout)
        const bloodRuleCheckbox = await $(await this.bloodRuleCheckbox)
        const mandatoryCheckbox = await $(await this.mandatoryCheckbox)
        const timeoutOkBtn = await $(await this.timeoutOkBtn)
        const commercialTimeout = await $(await this.commercialTimeout)
        const officialTimeout = await $(await this.officialTimeout)
        const officialsTimeout = await $(await this.gameOfficials)
        const commercial = await $(await this.commercialTimeout)
        const gameMedia = await $(await this.gameMedia)
        const doneBtn = '//div[contains(@class, "match-button action enabled-true") and contains(., "Done")]'

        if (side.toLowerCase() == "home") {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
            await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
            await browser.pause(500)
            await HelperPage.waitUntilElement(this.homeTeamAttakMade2btn, 60000)
            await $(await this.homeTeamAttakMade2btn).click()
        }
        else {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
            await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
            await browser.pause(500)
            await HelperPage.waitUntilElement(this.awayTeamAttakMade2btn, 60000)
            await $(await this.awayTeamAttakMade2btn).click()
        }

        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
        let player = await $$(await this.jumpBallCompetitorsElements)
        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
        await HelperPage.waitUntilElement(player[randoimNumberExc], 60000)
        await $(await player[randoimNumberExc]).click()
        await HelperPage.waitUntilElement(this.dunkBtn, 60000)
        await $(await this.dunkBtn).click()
        await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
        await $(await this.foulOnTheShotCheckbox).click()
        await HelperPage.waitUntilElement(this.okBtn, 60000)
        await $(await this.okBtn).click()
        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
        await $(await this.noAssistBtn).click()
        await HelperPage.waitUntilElement(foulingPlayer4, 60000)
        await $(await foulingPlayer4).click()
        await browser.pause(1000)

        await HelperPage.waitUntilElement(timeoutBtn.selector, 60000)
        await $(await timeoutBtn.selector).click()
        await HelperPage.waitUntilElement(homeTeamCallTimeout.selector, 60000)
        await $(await homeTeamCallTimeout.selector).click()
        await HelperPage.waitUntilElement(fullTimeout.selector, 60000)
        await $(await fullTimeout.selector).click()
        await HelperPage.waitUntilElement(bloodRuleCheckbox.selector, 60000)
        await $(await bloodRuleCheckbox.selector).click()
        await HelperPage.waitUntilElement(mandatoryCheckbox.selector, 60000)
        await $(await mandatoryCheckbox.selector).click()
        await HelperPage.waitUntilElement(timeoutOkBtn.selector, 60000)
        await $(await timeoutOkBtn.selector).click()

        await this.checkTimeoutBtns(timeoutBtn, awayTeamCallTimeout, commercialTimeout, 'Commercial', bloodRuleCheckbox, mandatoryCheckbox, timeoutOkBtn)
        await this.checkTimeoutBtns(timeoutBtn, officialTimeout, officialsTimeout, 'Officials', bloodRuleCheckbox, mandatoryCheckbox, timeoutOkBtn)
        await this.checkTimeoutBtns(timeoutBtn, officialTimeout, commercial, 'Commercial', bloodRuleCheckbox, mandatoryCheckbox, timeoutOkBtn)
        await this.checkTimeoutBtns(timeoutBtn, officialTimeout, gameMedia, 'Media', bloodRuleCheckbox, mandatoryCheckbox, timeoutOkBtn)

        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
        await $(await this.freethrowsMadeBtn).click()
        await HelperPage.waitUntilElement(doneBtn, 60000)
        await $(await doneBtn).click()
        await browser.pause(1000)
    }

    public async checkTimeoutBtns(element1: any, element2: any, element3: any, element4: string, element5: any, element6: any, element7: any) {
        await HelperPage.waitUntilElement(element1.selector, 60000)
        await $(await element1.selector).click()
        await HelperPage.waitUntilElement(element2.selector, 60000)
        await $(await element2.selector).click()
        await HelperPage.waitUntilElement(element3.selector, 60000)
        await $(await element3.selector).click()
        await expect(await element3.getText()).to.equal(element4)

        if (element5 != null) {
            await HelperPage.waitUntilElement(element5.selector, 60000)
            await $(await element5.selector).click()
        }

        if (element6 != null) {
            await HelperPage.waitUntilElement(element6.selector, 60000)
            await $(await element6.selector).click()
        }
        await HelperPage.waitUntilElement(element7.selector, 60000)
        await $(await element7.selector).click()
        await browser.pause(1000)
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function technicalFoul
    */
    public async technicalFoul(side: string, fouledPlayer: string, fouledPlayer1: string) {
        const foulingPlayer5 = 'div.player-select.enabled-true > div.active-players > div:nth-child(5)'
        const technicalFoulBtn = '//div[contains(text(),"Technical Foul")]'
        const freethrowAwarded1 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "1")]'
        const freethrowAwarded2 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "2")]'
        const freethrowAwarded3 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "3")]'
        const freethrowShootingPlayer1 = '//*[@id="root"]/div[1]/div[2]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]'
        const doneBtn = '//*/../../div[contains(text(),"Done")]'
        const benchBtn = '//*/div[contains(text(),"Bench")]'
        const coachBtn = '//*/div[contains(text(),"Coach")]'
        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)

        if (side.toLowerCase() == "home") {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
            await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
            await browser.pause(500)
            await HelperPage.waitUntilElement(this.homeTeamAttakMade2btn, 60000)
            await $(await this.homeTeamAttakMade2btn).click()
        }
        else {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
            await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
            await browser.pause(500)
            await HelperPage.waitUntilElement(this.awayTeamAttakMade2btn, 60000)
            await $(await this.awayTeamAttakMade2btn).click()
        }

        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
        let player = await $$(await this.jumpBallCompetitorsElements)
        let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 4)
        await HelperPage.waitUntilElement(player[randoimNumberExc], 60000)
        await $(await player[randoimNumberExc]).click()

        await HelperPage.waitUntilElement(this.dunkBtn, 60000)
        await $(await this.dunkBtn).click()
        await HelperPage.waitUntilElement(this.foulOnTheShotCheckbox, 60000)
        await $(await this.foulOnTheShotCheckbox).click()
        await HelperPage.waitUntilElement(this.fastBreakCheckbox, 60000)
        await $(await this.fastBreakCheckbox).click()
        await HelperPage.waitUntilElement(this.okBtn, 60000)
        await $(await this.okBtn).click()
        await HelperPage.waitUntilElement(this.noAssistBtn, 60000)
        await $(await this.noAssistBtn).click()
        await HelperPage.waitUntilElement(foulingPlayer5, 60000)
        await $(await foulingPlayer5).click()

        await HelperPage.waitUntilElement(technicalFoulBtn, 60000)
        await $(await technicalFoulBtn).click()

        let teams = 'div[class="match-button enabled-true dark"]'
        const foulingTeam = await $$(await teams)

        if (side.toLocaleLowerCase() == 'home') {
            await HelperPage.waitUntilElement(foulingTeam[0], 60000)
            await $(await foulingTeam[0]).click()
            await browser.pause(500)
        }
        else {
            await HelperPage.waitUntilElement(foulingTeam[1], 60000)
            await $(await foulingTeam[1]).click()
            await browser.pause(500)
        }

        if (fouledPlayer1 > '0' && fouledPlayer1 <= '5') {
            await HelperPage.waitUntilElement(foulingPlayer5, 60000)
            await $(await foulingPlayer5).click()
            await browser.pause(500)
        }
        if (fouledPlayer1.toLocaleLowerCase() == 'bench') {
            await HelperPage.waitUntilElement(benchBtn, 60000)
            await $(await benchBtn).click()
            await browser.pause(500)
        }
        if (fouledPlayer1.toLocaleLowerCase() == 'coach') {
            await HelperPage.waitUntilElement(coachBtn, 60000)
            await $(await coachBtn).click()
            await browser.pause(500)
        }

        if (fouledPlayer == '1') {
            await HelperPage.waitUntilElement(freethrowAwarded1, 60000)
            await $(await freethrowAwarded1).click()
            await HelperPage.waitUntilElement(freethrowShootingPlayer1, 60000)
            await $(await freethrowShootingPlayer1).click()
            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
            await $(await this.freethrowsMissedBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()

            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await browser.pause(500)
        }
        if (fouledPlayer == '2') {
            await HelperPage.waitUntilElement(freethrowAwarded2, 60000)
            await $(await freethrowAwarded2).click()
            await HelperPage.waitUntilElement(freethrowShootingPlayer1, 60000)
            await $(await freethrowShootingPlayer1).click()
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
            await $(await this.freethrowsMissedBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await browser.pause(500)
        }
        if (fouledPlayer == '3') {
            await HelperPage.waitUntilElement(freethrowAwarded3, 60000)
            await $(await freethrowAwarded3).click()
            await HelperPage.waitUntilElement(freethrowShootingPlayer1, 60000)
            await $(await freethrowShootingPlayer1).click()
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
            await $(await this.freethrowsMissedBtn).click()
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
            await $(await this.freethrowsMadeBtn).click()
            await HelperPage.waitUntilElement(doneBtn, 60000)
            await $(await doneBtn).click()
            await browser.pause(500)
        }
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function technicalFoul
    */
    public async endPeriod(udDown: string, sec: number) {
        const stopTextBtn = '//span[contains(text(),"Stop")]'
        browser.pause(1000)
        let stopBtn = await $(stopTextBtn).isExisting()
        if (stopBtn == true) {
            await HelperPage.waitUntilElement(stopTextBtn, 60000)
            await $(await stopTextBtn).click()
        }
        let periodTime = await this.getDisplayedTime()
        let seconds = periodTime.seconds - sec

        await $(await this.editStartTimePencil).click()

        if (periodTime.seconds < sec) {
            let secondDifference = sec - periodTime.seconds
            for (var i = 1; i <= periodTime.minutes; i++) {
                await $(await this.minutesArrowDownBtn).click()
            }
            for (var i = 1; i <= secondDifference; i++) {
                await $(await this.secondsArrowUpBtn).click()
            }
        }
        else {
            if (udDown.toLocaleLowerCase() == 'down') {
                for (var i = 1; i <= periodTime.minutes; i++) {
                    await $(await this.minutesArrowDownBtn).click()
                }
                for (var i = 1; i <= seconds; i++) {
                    await $(await this.secondsArrowDownBtn).click()
                }

            }
            else {
                for (var i = 1; i <= periodTime.minutes; i++) {
                    await $(await this.minutesArrowUpBtn).click()
                }
                for (var i = 1; i <= seconds; i++) {
                    await $(await this.secondsArrowUpBtn).click()
                }
            }
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function miss2Points score two points
    */
    public async miss2Points(side: string, area: string, shotType: string, playerRebounded: string, teamRebounded: string, block: string, blockSide: string, blockPlayer: string, clockShotValidation: string, cancel: boolean) {

        if (side.toLowerCase() == "home") {

            if (area.toLowerCase() == "out box") {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: -280, y: -90 })
            }
            else {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
            }

            await HelperPage.waitUntilElement(this.homeTeamAttackTeamMiss2btn, 60000)
            await $(await this.homeTeamAttackTeamMiss2btn).click()

            if (cancel === false) {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await HelperPage.waitUntilElement(this.jumpShotBtn, 60000)
                await this.shotTypes(shotType)

                if (playerRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                    let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                }
                if (playerRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                    let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(4) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                }

                if (teamRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                    await $(await this.homeTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (teamRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                    await $(await this.awayTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (block.toLowerCase() == "block") {
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await HelperPage.waitUntilElement(this.blockBtn, 60000)
                    await $(await this.blockBtn).click()
                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()

                    if (blockSide.toLocaleLowerCase() == 'home') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                            let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                            await $(await this.homeTeamReboundedBtn).click()
                        }
                    }
                    if (blockSide.toLocaleLowerCase() == 'away') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                            let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                            await $(await this.awayTeamReboundedBtn).click()
                        }
                    }
                }
                if (clockShotValidation.toLowerCase() == "shot clock validation") {
                    await HelperPage.waitUntilElement(this.clockShotValidationBtn, 60000)
                    await $(await this.clockShotValidationBtn).click()
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
        else {
            if (area.toLowerCase() == "out box") {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: 280, y: -90 })
            }
            else {
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
            }
            await HelperPage.waitUntilElement(this.awayTeamAttackTeamMiss2btn, 60000)
            await $(await this.awayTeamAttackTeamMiss2btn).click()

            if (cancel === false) {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await $(await player[randomPlayer]).click()
                await this.shotTypes(shotType)

                if (playerRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                    let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                }
                if (playerRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                    let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(4) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                }

                if (teamRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                    await $(await this.homeTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (teamRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                    await $(await this.awayTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (block.toLowerCase() == "block") {
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await HelperPage.waitUntilElement(this.blockBtn, 60000)
                    await $(await this.blockBtn).click()
                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()
                    if (blockSide.toLocaleLowerCase() == 'home') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                            let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                            await $(await this.homeTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                    if (blockSide.toLocaleLowerCase() == 'away') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                            let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                            await $(await this.awayTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                }
                if (clockShotValidation.toLowerCase() == "shot clock validation") {
                    await HelperPage.waitUntilElement(this.clockShotValidationBtn, 60000)
                    await $(await this.clockShotValidationBtn).click()
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function made3Points score two points
    */
    public async miss3Points(side: string, shotType: string, playerRebounded: string, teamRebounded: string, block: string, blockSide: string, blockPlayer: string, clockShotValidation: string, cancel: boolean) {

        if (side.toLowerCase() == "home") {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            if (process.env.HEADLESS_CHROME === 'true') {
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                await browser.pause(500)
            }
            else {
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                await browser.pause(500)
            }

            let miss = 'div[class="team-button enabled-true success-0"]'
            await HelperPage.waitUntilElement(miss, 60000)
            let teamMiss = await $$(await miss)
            await browser.pause(2000)
            await $(await teamMiss[0]).click()

            if (cancel === false) {
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                const el = 'div.active-players > div:nth-child(' + randomPlayer + ')'
                await HelperPage.waitUntilElement(el, 60000)
                await $(await el).click()
                await HelperPage.waitUntilElement(this.jumpShotBtn, 60000)
                await this.shotTypes(shotType)

                if (playerRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                    let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                }
                if (playerRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                    let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(4) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                }

                if (teamRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                    await $(await this.homeTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (teamRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                    await $(await this.awayTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (block.toLowerCase() == "block") {
                    await HelperPage.waitUntilElement(this.blockBtn, 60000)
                    await $(await this.blockBtn).click()
                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()

                    if (blockSide.toLocaleLowerCase() == 'home') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                            let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                            await $(await this.homeTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                    if (blockSide.toLocaleLowerCase() == 'away') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                            let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                            await $(await this.awayTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                }
                if (clockShotValidation.toLowerCase() == "shot clock validation") {
                    await HelperPage.waitUntilElement(this.clockShotValidationBtn, 60000)
                    await $(await this.clockShotValidationBtn).click()
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
        else {
            await HelperPage.waitUntilElement(this.courtMap, 60000)
            if (process.env.HEADLESS_CHROME === 'true') {
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                await browser.pause(500)
            }
            else {
                const coordinateX = await HelperPage.generateRandomNumberRange(10, 180)
                const coordinateY = await HelperPage.generateRandomNumberRange(10, 180)
                await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                await browser.pause(500)
            }
            let miss = 'div[class="team-button enabled-true success-0"]'
            await HelperPage.waitUntilElement(miss, 60000)
            let teamMiss = await $$(await miss)
            await browser.pause(2000)
            await $(await teamMiss[1]).click()

            if (cancel === false) {
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                const el = 'div.active-players > div:nth-child(' + randomPlayer + ')'
                await HelperPage.waitUntilElement(el, 60000)
                await $(await el).click()
                await this.shotTypes(shotType)

                if (playerRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                    let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                }
                if (playerRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                    let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(4) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                    await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                    await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                }

                if (teamRebounded.toLowerCase() == "home") {
                    await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                    await $(await this.homeTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (teamRebounded.toLowerCase() == "away") {
                    await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                    await $(await this.awayTeamReboundedBtn).click()
                    await browser.pause(500)
                }
                if (block.toLowerCase() == "block") {
                    await HelperPage.waitUntilElement(this.blockBtn, 60000)
                    await $(await this.blockBtn).click()
                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                    await $(await player[randomPlayer]).click()

                    if (blockSide.toLocaleLowerCase() == 'home') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.homePlayerReboundedPlayers, 60000)
                            let homePlayerReboundedPlayers = await $$(await this.homePlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(homePlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await homePlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.homeTeamReboundedBtn, 60000)
                            await $(await this.homeTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                    if (blockSide.toLocaleLowerCase() == 'away') {
                        if (blockPlayer.toLocaleLowerCase() == 'player') {
                            await HelperPage.waitUntilElement(this.awayPlayerReboundedPlayers, 60000)
                            let awayPlayerReboundedPlayers = await $$(await this.awayPlayerReboundedPlayers)
                            let randoimNumberExc = await this.returnExcludedRandomNumber('div:nth-child(3) > div.active-players > div', 'player active-true dark  selected', 1, 4)
                            await HelperPage.waitUntilElement(awayPlayerReboundedPlayers[randoimNumberExc], 60000)
                            await $(await awayPlayerReboundedPlayers[randoimNumberExc]).click()
                        }
                        if (blockPlayer.toLocaleLowerCase() == 'team rebound') {
                            await HelperPage.waitUntilElement(this.awayTeamReboundedBtn, 60000)
                            await $(await this.awayTeamReboundedBtn).click()
                            await browser.pause(500)
                        }
                    }
                }
                if (clockShotValidation.toLowerCase() == "shot clock validation") {
                    await HelperPage.waitUntilElement(this.clockShotValidationBtn, 60000)
                    await $(await this.clockShotValidationBtn).click()
                }
            }
            else {
                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                await $(await this.cancelXBtn).click()
            }
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function makeTurnover
    * @param side Home or Away
    * @param commitedTurnover shold be 'player' or 'team turnover'
    * @param turnoverType which turnover type should be clicked (ex. 'Bad pass') this is Case Sensitive input
    * @param steal should ne 'steal player' or 'no steal'
    */
    public async makeTurnover(side: string, commitedTurnover: string, turnoverType: string, steal: string) {
        await HelperPage.waitUntilElement(this.courtMap, 60000)
        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)

        if (side.toLocaleLowerCase() == 'home') {
            const coordinateX = await HelperPage.generateRandomNumberRange(20, 220)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 180)
            await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
            await browser.pause(500)
            let turnover = '//*/div[contains(text(), "Turn over")]'
            await HelperPage.waitUntilElement(turnover, 60000)
            let teamTurnover = await $$(await turnover)
            await $(await teamTurnover[0]).click()
        }
        else {
            const coordinateX = await HelperPage.generateRandomNumberRange(20, 220)
            const coordinateY = await HelperPage.generateRandomNumberRange(20, 180)
            await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
            await browser.pause(500)
            let turnover = '//*/div[contains(text(), "Turn over")]'
            await HelperPage.waitUntilElement(turnover, 60000)
            let teamTurnover = await $$(await turnover)
            await $(await teamTurnover[1]).click()
        }

        if (commitedTurnover.toLocaleLowerCase() == 'player') {
            await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
            let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 5)
            const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
            await $(await el).click()

            let turnoverTypeBtn = '//div[contains(text(),"' + turnoverType + '")]'
            await HelperPage.waitUntilElement(turnoverTypeBtn, 60000)
            await $(await turnoverTypeBtn).click()

            await browser.pause(300)
            if (turnoverType == 'Bad pass' || turnoverType == 'Ball handling') {

                if (steal.toLocaleLowerCase() == 'steal player') {
                    let randoimNumberExc = await this.returnExcludedRandomNumber('div.active-players > div', 'player active-true dark excluded ', 1, 5)
                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    const el = 'div.active-players > div:nth-child(' + randoimNumberExc + ')'
                    await $(await el).click()
                }
                if (steal.toLocaleLowerCase() == 'no steal') {
                    await HelperPage.waitUntilElement(this.noStealBtn, 60000)
                    await $(await this.noStealBtn).click()
                }
            }
        }

        if (commitedTurnover.toLocaleLowerCase() == 'team turnover') {
            await HelperPage.waitUntilElement(this.teamTurnoverBtn, 60000)
            await $(await this.teamTurnoverBtn).click()

            let turnoverTypeBtn = '//div[contains(text(),"' + turnoverType + '")]'
            await HelperPage.waitUntilElement(turnoverTypeBtn, 60000)
            await $(await turnoverTypeBtn).click()
        }
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getDisplayedTime
    */
    public async getDisplayedTime() {

        let displayedTime = await HelperPage.returnArrayElementsTextFunction(await this.displayedTime)

        let hourAndSeconds = displayedTime[0];
        const hourAndSecondsArray = hourAndSeconds.split(":");

        const dateAndTime = {
            fullTime: hourAndSeconds,
            minutes: parseFloat(hourAndSecondsArray[0]),
            seconds: parseFloat(hourAndSecondsArray[1])
        }
        return dateAndTime
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function makeSubstitution
    */
    public async makeSubstitution(randomSubstitution: string) {
        await HelperPage.waitUntilElement(this.substitutionBtn, 60000)
        const substitutionBtns = await $$(await this.substitutionBtn)
        await HelperPage.waitUntilElement(substitutionBtns[0], 60000)
        await $(await substitutionBtns[0]).click()

        await HelperPage.waitUntilElement(this.substitutionArrowBtn, 60000)
        await browser.pause(500)
        const substitutionArrowBtns = await $$(await this.substitutionArrowBtn)
        let doneBtn = '//*/div[contains(text(),"Done")]'

        await HelperPage.waitUntilElement(substitutionArrowBtns[0], 60000)
        await $(await substitutionArrowBtns[0]).click()
        await HelperPage.waitUntilElement(substitutionArrowBtns[1], 60000)
        await $(await substitutionArrowBtns[1]).click()
        await browser.pause(200)

        if (randomSubstitution.toLocaleLowerCase() === 'random') {
            await HelperPage.waitUntilElement(this.homeTeamSubstitutionBtns, 60000)

            for (var i = 0; i < 5; i++) {
                let homeSubstitutions = await $$(await this.homeTeamSubstitutionBtns)
                let awaySubstitutions = await $$(await this.awayTeamSubstitutionBtns)

                let randomHomeSubstitutions = await HelperPage.generateRandomNumberRange(0, homeSubstitutions.length)
                let randomAwaySubstitutions = await HelperPage.generateRandomNumberRange(0, awaySubstitutions.length)

                await HelperPage.waitUntilElement(homeSubstitutions[randomHomeSubstitutions], 60000)
                await $(await homeSubstitutions[randomHomeSubstitutions]).click()
                await HelperPage.waitUntilElement(awaySubstitutions[randomAwaySubstitutions], 60000)
                await $(await awaySubstitutions[randomAwaySubstitutions]).click()
            }
        }
        else {
            for (var i = 0; i < 5; i++) {
                let homeTeamSubstitutionPlayers = '//*[@id="SubsContainer"]/div/div/div[1]/div[1]/div/div/div[2]/div[1]'
                let awayTeamSubstitutionPlayers = '//*[@id="SubsContainer"]/div/div/div[1]/div[2]/div/div/div[2]/div[1]'

                await HelperPage.waitUntilElement(homeTeamSubstitutionPlayers, 60000)
                await $(await homeTeamSubstitutionPlayers).click()
                await HelperPage.waitUntilElement(awayTeamSubstitutionPlayers, 60000)
                await $(await awayTeamSubstitutionPlayers).click()
            }
        }

        await HelperPage.waitUntilElement(doneBtn, 60000)
        await $(await doneBtn).click()
        await browser.pause(2000)
    }
    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function miss2Points score two points
    * @param side should be 'home' or 'away
    * @param area should be 'in box' or 'out box'
    * @param fouled should be 'player, 'bench' or 'coach'
    * @param typeOfFoul should be 'offensive foul', 'technical foul', 'unsportsmanlike', 'disqualifying', 'double foul' or 'personal foul'
    * @param howManyFreethrowsWereAwarded should be numbers 0, 1, 2 or 3
    * @param missMade should be 'made' or 'miss'
    * @param noPlayer should be 'no player' or 'player'
    * @param coachFouledType should be 'coach technical' or 'coach disqualifying'
    * @param substitution shpuld ne 'make substitution' or 'no substitution'
    */
    public async makeFoul(side: string, sideBtn: string, area: string, fouled: string, typeOfFoul: string, howManyFreethrowsWereAwarded: number, missMade: string, noPlayer: string, coachFouledType: string, substitution: string) {
        const benchBtn = '//*/div[contains(text(),"Bench")]'
        const coachBtn = '//*/div[contains(text(),"Coach")]'
        const offensiveFoulBtn = '//*/div[contains(text(),"Offensive Foul")]'
        const personalFoulBtn = '//*/div[contains(text(),"Personal foul")]'
        const technicalFoulBtn = '//*/div[contains(text(),"Technical Foul")]'
        const unsportsmanlikeFoulBtn = '//*/div[contains(text(),"Unsportsmanlike")]'
        const doubleFoulBtn = '//*/div[contains(text(),"Double Foul")]'
        const disqualifyingFoulBtn = '//*/div[contains(text(),"Disqualifying")]'
        const okBtn = '//div[contains(text(),"OK")]'
        const btn0 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "0")]'
        const btn1 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "1")]'
        const btn2 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "2")]'
        const btn3 = '//div[contains(@class, "match-button small enabled-true undefined") and contains(., "3")]'
        const doneBtn = '//div[contains(text(),"Done")]'
        const noPlayerBtn = '//div[contains(text(),"No Player")]'
        const benchTechnicalBtn = '//div[contains(text(),"Bench technical")]'
        const coachTechnicalBtn = '//div[contains(text(),"Coach technical")]'
        const coachDisqualifyingBtn = '//div[contains(text(),"Coach disqualifying")]'

        if (side.toLowerCase() == "home") {
            if (area.toLowerCase() == "out box") {
                await browser.pause(500)
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: -280, y: -90 })
                await browser.pause(500)
            }
            else {
                await browser.pause(500)
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: -coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }

                await browser.pause(500)
            }

            if (side.toLocaleLowerCase() === sideBtn.toLocaleLowerCase()) {
                await HelperPage.waitUntilElement(this.homeDefenceTeamFoulBtn, 60000)
                await $(await this.homeDefenceTeamFoulBtn).click()
            }
            else {
                await HelperPage.waitUntilElement(this.awayDefenceTeamFoulBtn, 60000)
                await $(await this.awayDefenceTeamFoulBtn).click()
            }

            if (fouled.toLocaleLowerCase() == 'player') {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await $(await player[randomPlayer]).click()

                if (side.toLocaleLowerCase() === sideBtn.toLocaleLowerCase()) {
                    if (typeOfFoul.toLocaleLowerCase() === 'offensive foul') {
                        await HelperPage.waitUntilElement(offensiveFoulBtn, 60000)
                        await $(await offensiveFoulBtn).click()
                        await HelperPage.waitUntilElement(okBtn, 60000)
                        await $(await okBtn).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()
                    }
                }
                if (typeOfFoul.toLocaleLowerCase() === 'technical foul' ||
                    typeOfFoul.toLocaleLowerCase() === 'unsportsmanlike' ||
                    typeOfFoul.toLocaleLowerCase() === 'disqualifying') {

                    if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                        await HelperPage.waitUntilElement(technicalFoulBtn, 60000)
                        await $(await technicalFoulBtn).click()
                    }
                    if (typeOfFoul.toLocaleLowerCase() === 'unsportsmanlike') {
                        await HelperPage.waitUntilElement(unsportsmanlikeFoulBtn, 60000)
                        await $(await unsportsmanlikeFoulBtn).click()

                    }
                    if (typeOfFoul.toLocaleLowerCase() === 'disqualifying') {
                        await HelperPage.waitUntilElement(disqualifyingFoulBtn, 60000)
                        await $(await disqualifyingFoulBtn).click()
                    }

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (noPlayer.toLowerCase() === 'player') {
                        if (howManyFreethrowsWereAwarded === 0) {
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }
                            }

                            if (substitution.toLocaleLowerCase() === 'cancel') {
                                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                                await $(await this.cancelXBtn).click()
                            }
                            else {
                                await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                                await $(await freethrowsMade[0]).click()

                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }

                                await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                                await $(await freethrowsMissed[1]).click()


                                await HelperPage.waitUntilElement(doneBtn, 60000)
                                await $(await doneBtn).click()

                            }

                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }
                            }

                            if (substitution.toLocaleLowerCase() === 'cancel') {
                                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                                await $(await this.cancelXBtn).click()
                            }
                            else {
                                await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                                await $(await freethrowsMissed[0]).click()

                                await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                                await $(await freethrowsMade[1]).click()

                                await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                                await $(await freethrowsMissed[2]).click()

                                await HelperPage.waitUntilElement(doneBtn, 60000)
                                await $(await doneBtn).click()

                            }
                        }
                    }
                    else {
                        await HelperPage.waitUntilElement(noPlayerBtn, 60000)
                        await $(await noPlayerBtn).click()

                        if (howManyFreethrowsWereAwarded === 0) {
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await browser.pause(1000)
                            await $(await player[randomPlayer]).click()

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await browser.pause(1000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await browser.pause(1000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[2], 60000)
                            await $(await freethrowsMade[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }

                }
                if (typeOfFoul.toLocaleLowerCase() === 'double foul') {
                    await HelperPage.waitUntilElement(doubleFoulBtn, 60000)
                    await $(await doubleFoulBtn).click()
                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()
                }
            }
            if (fouled.toLocaleLowerCase() == 'bench') {
                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await $(await benchBtn).click()

                await HelperPage.waitUntilElement(benchTechnicalBtn, 60000)
                await $(await benchTechnicalBtn).click()

                await HelperPage.waitUntilElement(okBtn, 60000)
                await $(await okBtn).click()

                if (howManyFreethrowsWereAwarded === 0) {
                    await HelperPage.waitUntilElement(btn0, 60000)
                    await $(await btn0).click()
                }
                if (howManyFreethrowsWereAwarded === 1) {
                    await HelperPage.waitUntilElement(btn1, 60000)
                    await $(await btn1).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    if (missMade.toLocaleLowerCase() === 'made') {
                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        await $(await this.freethrowsMadeBtn).click()
                    }
                    if (missMade.toLocaleLowerCase() === 'miss') {
                        await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                        await $(await this.freethrowsMissedBtn).click()
                    }

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
                if (howManyFreethrowsWereAwarded === 2) {
                    await HelperPage.waitUntilElement(btn2, 60000)
                    await $(await btn2).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                    let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                    let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                    await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                    await $(await freethrowsMade[0]).click()

                    if (substitution.toLocaleLowerCase() === 'make substitution') {
                        await this.makeSubstitution('random')

                        await browser.pause(2000)
                    }

                    await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                    await $(await freethrowsMissed[1]).click()

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
                if (howManyFreethrowsWereAwarded === 3) {
                    await HelperPage.waitUntilElement(btn3, 60000)
                    await $(await btn3).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                    let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                    let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                    await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                    await $(await freethrowsMissed[0]).click()

                    await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                    await $(await freethrowsMade[1]).click()

                    await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                    await $(await freethrowsMissed[2]).click()

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
            }
            if (fouled.toLocaleLowerCase() == 'coach') {
                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await browser.pause(500)
                await $(await coachBtn).click()

                if (coachFouledType.toLocaleLowerCase() === 'coach technical') {
                    await HelperPage.waitUntilElement(coachTechnicalBtn, 60000)
                    await $(await coachTechnicalBtn).click()

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (howManyFreethrowsWereAwarded === 0) {
                        await HelperPage.waitUntilElement(btn0, 60000)
                        await $(await btn0).click()
                    }
                    if (howManyFreethrowsWereAwarded === 1) {
                        await HelperPage.waitUntilElement(btn1, 60000)
                        await $(await btn1).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        if (missMade.toLocaleLowerCase() === 'made') {
                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            await $(await this.freethrowsMadeBtn).click()
                        }
                        if (missMade.toLocaleLowerCase() === 'miss') {
                            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                            await $(await this.freethrowsMissedBtn).click()
                        }

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                    if (howManyFreethrowsWereAwarded === 2) {
                        await HelperPage.waitUntilElement(btn2, 60000)
                        await $(await btn2).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                        let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                        await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                        await $(await freethrowsMade[0]).click()

                        if (substitution.toLocaleLowerCase() === 'make substitution') {
                            await this.makeSubstitution('random')

                            await browser.pause(2000)
                        }

                        await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                        await $(await freethrowsMissed[1]).click()

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                    if (howManyFreethrowsWereAwarded === 3) {
                        await HelperPage.waitUntilElement(btn3, 60000)
                        await $(await btn3).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                        let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                        await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                        await $(await freethrowsMissed[0]).click()

                        await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                        await $(await freethrowsMade[1]).click()

                        await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                        await $(await freethrowsMissed[2]).click()

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                }
                if (coachFouledType.toLocaleLowerCase() === 'coach disqualifying') {
                    await HelperPage.waitUntilElement(coachDisqualifyingBtn, 60000)
                    await $(await coachDisqualifyingBtn).click()

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (noPlayer.toLowerCase() === 'player') {
                        if (howManyFreethrowsWereAwarded === 0) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }
                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                            await $(await freethrowsMade[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }
                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                            await $(await freethrowsMissed[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }
                    else {
                        await HelperPage.waitUntilElement(noPlayerBtn, 60000)
                        await $(await noPlayerBtn).click()

                        if (howManyFreethrowsWereAwarded === 0) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[2], 60000)
                            await $(await freethrowsMade[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }
                }
            }

        }
        else {
            if (area.toLowerCase() == "out box") {
                await browser.pause(500)
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                await $(await this.courtMap).click({ x: 280, y: -90 })
                await browser.pause(500)
            }
            else {
                await browser.pause(500)
                await HelperPage.waitUntilElement(this.courtMap, 60000)
                if (process.env.HEADLESS_CHROME === "true") {
                    const coordinateX = await HelperPage.generateRandomNumberRange(400, 450)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
                else {
                    const coordinateX = await HelperPage.generateRandomNumberRange(300, 350)
                    const coordinateY = await HelperPage.generateRandomNumberRange(20, 60)
                    await $(await this.courtMap).click({ x: coordinateX, y: -coordinateY })
                    await browser.pause(500)
                }
            }

            if (side.toLocaleLowerCase() != sideBtn.toLocaleLowerCase()) {
                await HelperPage.waitUntilElement(this.homeDefenceTeamFoulBtn, 60000)
                await $(await this.homeDefenceTeamFoulBtn).click()
            }
            else {
                await HelperPage.waitUntilElement(this.awayDefenceTeamFoulBtn, 60000)
                await $(await this.awayDefenceTeamFoulBtn).click()
            }

            if (fouled.toLocaleLowerCase() == 'player') {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await $(await player[randomPlayer]).click()

                if (side.toLocaleLowerCase() === sideBtn.toLocaleLowerCase()) {
                    if (typeOfFoul.toLocaleLowerCase() === 'offensive foul') {
                        await HelperPage.waitUntilElement(offensiveFoulBtn, 60000)
                        await $(await offensiveFoulBtn).click()
                        await HelperPage.waitUntilElement(okBtn, 60000)
                        await $(await okBtn).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()
                    }
                }
                if (typeOfFoul.toLocaleLowerCase() === 'technical foul' ||
                    typeOfFoul.toLocaleLowerCase() === 'unsportsmanlike' ||
                    typeOfFoul.toLocaleLowerCase() === 'disqualifying' ||
                    typeOfFoul.toLocaleLowerCase() === 'personal foul') {

                    if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                        await HelperPage.waitUntilElement(technicalFoulBtn, 60000)
                        await $(await technicalFoulBtn).click()
                    }
                    if (typeOfFoul.toLocaleLowerCase() === 'unsportsmanlike') {
                        await HelperPage.waitUntilElement(unsportsmanlikeFoulBtn, 60000)
                        await $(await unsportsmanlikeFoulBtn).click()
                    }
                    if (typeOfFoul.toLocaleLowerCase() === 'disqualifying') {
                        await HelperPage.waitUntilElement(disqualifyingFoulBtn, 60000)
                        await $(await disqualifyingFoulBtn).click()
                    }
                    if (side.toLocaleLowerCase() != sideBtn.toLocaleLowerCase()) {
                        if (typeOfFoul.toLocaleLowerCase() === 'personal foul') {
                            await HelperPage.waitUntilElement(personalFoulBtn, 60000)
                            await $(await personalFoulBtn).click()
                        }
                    }

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (noPlayer.toLowerCase() === 'player') {
                        if (howManyFreethrowsWereAwarded === 0) {
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }
                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }
                            }

                            if (substitution.toLocaleLowerCase() === 'cancel') {
                                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                                await $(await this.cancelXBtn).click()
                            }
                            else {
                                await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                                await $(await freethrowsMade[0]).click()

                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }

                                await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                                await $(await freethrowsMissed[1]).click()

                                await HelperPage.waitUntilElement(doneBtn, 60000)
                                await $(await doneBtn).click()
                            }
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await browser.pause(1000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            if (typeOfFoul.toLocaleLowerCase() === 'technical foul') {
                                if (substitution.toLocaleLowerCase() === 'make substitution') {
                                    await this.makeSubstitution('random')

                                    await browser.pause(2000)
                                }
                            }

                            if (substitution.toLocaleLowerCase() === 'cancel') {
                                await HelperPage.waitUntilElement(this.cancelXBtn, 60000)
                                await $(await this.cancelXBtn).click()
                            }
                            else {
                                await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                                await $(await freethrowsMissed[0]).click()

                                await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                                await $(await freethrowsMade[1]).click()

                                await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                                await $(await freethrowsMissed[2]).click()

                                await HelperPage.waitUntilElement(doneBtn, 60000)
                                await $(await doneBtn).click()

                            }
                        }
                    }
                    else {
                        await HelperPage.waitUntilElement(noPlayerBtn, 60000)
                        await $(await noPlayerBtn).click()

                        if (howManyFreethrowsWereAwarded === 0) {
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[2], 60000)
                            await $(await freethrowsMade[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }

                }
                if (typeOfFoul.toLocaleLowerCase() === 'double foul') {
                    await HelperPage.waitUntilElement(doubleFoulBtn, 60000)
                    await $(await doubleFoulBtn).click()
                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()
                }
            }
            if (fouled.toLocaleLowerCase() == 'bench') {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await $(await benchBtn).click()

                await HelperPage.waitUntilElement(benchTechnicalBtn, 60000)
                await $(await benchTechnicalBtn).click()

                await HelperPage.waitUntilElement(okBtn, 60000)
                await $(await okBtn).click()

                if (howManyFreethrowsWereAwarded === 0) {
                    await HelperPage.waitUntilElement(btn0, 60000)
                    await $(await btn0).click()
                }
                if (howManyFreethrowsWereAwarded === 1) {
                    await HelperPage.waitUntilElement(btn1, 60000)
                    await $(await btn1).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    if (missMade.toLocaleLowerCase() === 'made') {
                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        await $(await this.freethrowsMadeBtn).click()
                    }
                    if (missMade.toLocaleLowerCase() === 'miss') {
                        await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                        await $(await this.freethrowsMissedBtn).click()
                    }

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
                if (howManyFreethrowsWereAwarded === 2) {
                    await HelperPage.waitUntilElement(btn2, 60000)
                    await $(await btn2).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                    let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                    let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                    await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                    await $(await freethrowsMade[0]).click()

                    if (substitution.toLocaleLowerCase() === 'make substitution') {
                        await this.makeSubstitution('random')

                        await browser.pause(2000)
                    }

                    await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                    await $(await freethrowsMissed[1]).click()

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
                if (howManyFreethrowsWereAwarded === 3) {
                    await HelperPage.waitUntilElement(btn3, 60000)
                    await $(await btn3).click()

                    await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                    let player = await $$(await this.jumpBallCompetitorsElements)
                    let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                    await browser.pause(500)
                    await $(await player[randomPlayer]).click()

                    await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                    let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                    let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                    await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                    await $(await freethrowsMissed[0]).click()

                    await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                    await $(await freethrowsMade[1]).click()

                    await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                    await $(await freethrowsMissed[2]).click()

                    await HelperPage.waitUntilElement(doneBtn, 60000)
                    await $(await doneBtn).click()
                }
            }
            if (fouled.toLocaleLowerCase() == 'coach') {
                let player = await $$(await this.jumpBallCompetitorsElements)
                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                await $(await coachBtn).click()

                if (coachFouledType.toLocaleLowerCase() === 'coach technical') {
                    await HelperPage.waitUntilElement(coachTechnicalBtn, 60000)
                    await $(await coachTechnicalBtn).click()

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (howManyFreethrowsWereAwarded === 0) {
                        await HelperPage.waitUntilElement(btn0, 60000)
                        await $(await btn0).click()
                    }
                    if (howManyFreethrowsWereAwarded === 1) {
                        await HelperPage.waitUntilElement(btn1, 60000)
                        await $(await btn1).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        if (missMade.toLocaleLowerCase() === 'made') {
                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            await $(await this.freethrowsMadeBtn).click()
                        }
                        if (missMade.toLocaleLowerCase() === 'miss') {
                            await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                            await $(await this.freethrowsMissedBtn).click()
                        }

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                    if (howManyFreethrowsWereAwarded === 2) {
                        await HelperPage.waitUntilElement(btn2, 60000)
                        await $(await btn2).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                        let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                        await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                        await $(await freethrowsMade[0]).click()

                        if (substitution.toLocaleLowerCase() === 'make substitution') {
                            await this.makeSubstitution('random')

                            await browser.pause(2000)
                        }

                        await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                        await $(await freethrowsMissed[1]).click()

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                    if (howManyFreethrowsWereAwarded === 3) {
                        await HelperPage.waitUntilElement(btn3, 60000)
                        await $(await btn3).click()

                        await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                        let player = await $$(await this.jumpBallCompetitorsElements)
                        let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                        await browser.pause(500)
                        await $(await player[randomPlayer]).click()

                        await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                        let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                        let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                        await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                        await $(await freethrowsMissed[0]).click()

                        await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                        await $(await freethrowsMade[1]).click()

                        await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                        await $(await freethrowsMissed[2]).click()

                        await HelperPage.waitUntilElement(doneBtn, 60000)
                        await $(await doneBtn).click()
                    }
                }
                if (coachFouledType.toLocaleLowerCase() === 'coach disqualifying') {
                    await HelperPage.waitUntilElement(coachDisqualifyingBtn, 60000)
                    await $(await coachDisqualifyingBtn).click()

                    await HelperPage.waitUntilElement(okBtn, 60000)
                    await $(await okBtn).click()

                    if (noPlayer.toLowerCase() === 'player') {
                        if (howManyFreethrowsWereAwarded === 0) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMade[0], 60000)
                            await $(await freethrowsMade[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await browser.pause(2000)
                            let jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await browser.pause(1000)
                            jumpBallCompetitorsElementsExist = await $(this.jumpBallCompetitorsElements).isExisting()
                            if (jumpBallCompetitorsElementsExist == true) {
                                await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                                let player = await $$(await this.jumpBallCompetitorsElements)
                                let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                                await browser.pause(1000)
                                await $(await player[randomPlayer]).click()
                            }

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[2], 60000)
                            await $(await freethrowsMissed[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }
                    else {
                        await HelperPage.waitUntilElement(noPlayerBtn, 60000)
                        await $(await noPlayerBtn).click()

                        if (howManyFreethrowsWereAwarded === 0) {
                            await HelperPage.waitUntilElement(btn0, 60000)
                            await $(await btn0).click()
                        }
                        if (howManyFreethrowsWereAwarded === 1) {
                            await HelperPage.waitUntilElement(btn1, 60000)
                            await $(await btn1).click()

                            await browser.pause(1000)
                            await HelperPage.waitUntilElement(this.jumpBallCompetitorsElements, 60000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            if (missMade.toLocaleLowerCase() === 'made') {
                                await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                                await $(await this.freethrowsMadeBtn).click()
                            }
                            if (missMade.toLocaleLowerCase() === 'miss') {
                                await HelperPage.waitUntilElement(this.freethrowsMissedBtn, 60000)
                                await $(await this.freethrowsMissedBtn).click()
                            }

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 2) {
                            await HelperPage.waitUntilElement(btn2, 60000)
                            await $(await btn2).click()

                            await browser.pause(1000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            if (substitution.toLocaleLowerCase() === 'make substitution') {
                                await this.makeSubstitution('random')

                                await browser.pause(2000)
                            }

                            await HelperPage.waitUntilElement(freethrowsMade[1], 60000)
                            await $(await freethrowsMade[1]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                        if (howManyFreethrowsWereAwarded === 3) {
                            await HelperPage.waitUntilElement(btn3, 60000)
                            await $(await btn3).click()

                            await browser.pause(1000)
                            let player = await $$(await this.jumpBallCompetitorsElements)
                            let randomPlayer = await HelperPage.generateRandomNumberRange(1, 4)
                            await HelperPage.waitUntilElement(player[randomPlayer], 60000)
                            await $(await player[randomPlayer]).click()

                            await HelperPage.waitUntilElement(this.freethrowsMadeBtn, 60000)
                            let freethrowsMade = await $$(await this.freethrowsMadeBtn)
                            let freethrowsMissed = await $$(await this.freethrowsMissedBtn)

                            await HelperPage.waitUntilElement(freethrowsMissed[0], 60000)
                            await $(await freethrowsMissed[0]).click()

                            await HelperPage.waitUntilElement(freethrowsMissed[1], 60000)
                            await $(await freethrowsMissed[1]).click()

                            await HelperPage.waitUntilElement(freethrowsMade[2], 60000)
                            await $(await freethrowsMade[2]).click()

                            await HelperPage.waitUntilElement(doneBtn, 60000)
                            await $(await doneBtn).click()
                        }
                    }
                }
            }
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function jumpBall
    * @param jumpBallType this parameter is CASE SENSITIVE (ex. 'Held ball')
    * @param isInsert this parametar decide if you are on "insert mode"
    */
    public async jumpBall(jumpBallType: string, isInsert: string) {
        const jumpBallBtn = '//div[contains(text(),"Jump Ball")]'

        await browser.pause(300)
        await HelperPage.waitUntilElement(jumpBallBtn, 60000)
        await $(await jumpBallBtn).click()

        await HelperPage.waitUntilElement('//div[contains(text(),"' + jumpBallType + '")]', 60000)
        await $(await '//div[contains(text(),"' + jumpBallType + '")]').click()

        if (isInsert.toLocaleLowerCase() != 'insert mode') {
            await browser.pause(500)
            await HelperPage.waitUntilElement(this.startPeriodBtn, 60000)
            await $(await this.startPeriodBtn).click()
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function insertEvents
    */
    public async insertEvents() {
        await HelperPage.waitUntilElement(this.continueBtn, 60000)
        await $(await this.continueBtn).click()

        await HelperPage.waitUntilElement(this.confirmBtn, 60000)
        await $(await this.confirmBtn).click()
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function changeSemaphoreTime
    * @param up this string parameter means that minutes or seconds will go UP
    * @param upMinutes how much minutes you want to go UP
    * @param upSeconds how much seconds you want to go UP
    * @param down this string parameter means that minutes or seconds will go DOWN
    * @param downMinutes how much minutes you want to go DOWN
    * @param downSeconds how much seconds you want to go UP
    */
    public async changeSemaphoreTime(up: string, upMinutes: number, upSeconds: number, down: string, downMinutes: number, downSeconds: number) {

        const minutesArrowUpBtn = '//*[@id="root"]/div/div[2]/div[2]/div[2]/i[1]'
        const minutesArrowDownBtn = '//*[@id="root"]/div/div[2]/div[2]/div[2]/i[2]'
        const secondsArrowUpBtn = '//*[@id="root"]/div/div[2]/div[2]/div[3]/i[1]'
        const secondsArrowDownBtn = '//*[@id="root"]/div/div[2]/div[2]/div[3]/i[2]'

        await browser.pause(1000)

        if (up.toLocaleLowerCase() === 'up') {
            if (upMinutes != null || upMinutes != 0) {
                for (var i = 1; i <= upMinutes; i++) {
                    await $(await minutesArrowUpBtn).click()
                }
            }
            if (upSeconds != null || upSeconds != 0) {
                for (var i = 1; i <= upSeconds; i++) {
                    await $(await secondsArrowUpBtn).click()
                }
            }
        }

        console.log()
        if (down.toLocaleLowerCase() === 'down') {
            console.log()
            if (downMinutes != null || downMinutes != 0) {
                for (var i = 1; i <= upMinutes; i++) {
                    await $(await minutesArrowDownBtn).click()
                }
            }

            console.log()
            if (downSeconds != null || downSeconds != 0) {
                for (var i = 1; i <= upSeconds; i++) {
                    await $(await secondsArrowDownBtn).click()
                }
            }
        }
    }
}

export default new GamePage();