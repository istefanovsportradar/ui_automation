import HelperPage from './helper.page';
const customData = require("../../data.conf.json");

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TeamSetupPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get homeTeamRosterBtn() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/h2/div[2]/button[1]'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamActivePlayersNumber() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[1]/div[1]/div[1]/span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamStarterPlayersNumber() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[1]/div[1]/div[2]/span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamSortByDronDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[1]/div[2]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamStaffBtn() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/h2/div[2]/button[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamCoachNameDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[6]/select';
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamCoachNameDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span/select/option';
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamCoachNameDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span/select/option';
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamFirstAssistantCoachDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[9]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamFirstAssistantCoachDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[9]/select/option'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamSecondAssistantCoachDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[12]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamSecondAssistantCoachDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[12]/select/option'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamSortByDronDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[1]/div[2]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStaffBtn() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/h2/div[2]/button[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput1() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[7]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput2() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[13]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput3() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[19]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput4() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[25]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput5() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[31]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput6() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[37]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput7() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[43]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput8() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[49]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamInput9() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[55]/span/input'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterCheckbox1() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[10]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterCheckbox2() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[16]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterCheckbox3() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[22]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterCheckbox4() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[28]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterCheckbox5() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[34]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamActiveCheckbox6() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[39]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamActiveCheckbox7() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[45]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamActiveCheckbox8() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[51]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamActiveCheckbox9() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[57]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamCaptCheckbox1() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[11]/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer1PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[12]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer2PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[18]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer3PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[24]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer4PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[30]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer5PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[36]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer6PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[42]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer7PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[48]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer8PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[54]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamPlayer9PositionDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[2]/span[60]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamCoachDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[6]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam1stAssistantCoachDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[9]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam1stAssistantCoachDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[9]/select/option'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam2ndAssistantCoachDropDown() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[12]/select'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam2ndAssistantCoachDropDownOption() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[12]/select/option'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamCoachActiveCheckbox() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[5]/span/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam1stAssistantCoachhActiveCheckbox() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[8]/span/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeam2ndAssistantCoachActiveCheckbox() {
        return '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div/div/span[11]/span/div/label/span'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamActivePlayersNumberLabel() {
        const element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[1]/div[1]/div[1]/span'
        return element
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamStarterPlayersNumberLabel() {
        const element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[1]/div[1]/div[2]/span'
        return element
    }
    public get homeTeamActivePlayersNumberLabel() {
        const element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div[1]/span'
        return element
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamStarterPlayersNumberLabel() {
        const element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[1]/div[1]/div[1]/div[2]/span'
        return element
    }
    /**
     * define selectors using getter methods
     */
    public get nextBtn() {
        return 'a[class="link btn btn-sm btn-success btn-next btn-lg enabled-true"]'
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function populateStaff populate Staff
    * @param example await TeamSetupPage.populateStaff()
    */
    public async populateStaff(side: string) {

        if (side.toLocaleLowerCase() === 'away') {
            await $(await this.awayTeamStaffBtn).click()
            await HelperPage.waitUntilElement(this.awayTeamCoachNameDropDown, 60000)

            let coachDropDownOption = await $$(this.awayTeamCoachNameDropDownOption)

            await $(await this.awayTeamCoachNameDropDown).click()
            await $(await coachDropDownOption[1]).click()
            await browser.pause(500)
            await HelperPage.clickStaffMultipleCheckboxes(5, 1, 1)

            await HelperPage.waitUntilElement(this.awayTeamFirstAssistantCoachDropDown, 60000)
            await $(await this.awayTeamFirstAssistantCoachDropDown).click()
            await browser.pause(200)
            let firstAssistantCoachDropDownOption = await $$(this.awayTeamFirstAssistantCoachDropDownOption)
            await $(await firstAssistantCoachDropDownOption[2]).click()
            await browser.pause(500)
            await HelperPage.clickStaffMultipleCheckboxes(8, 1, 1)

            await HelperPage.waitUntilElement(this.awayTeamSecondAssistantCoachDropDown, 60000)
            await $(await this.awayTeamSecondAssistantCoachDropDown).click()
            await browser.pause(200)
            let secondAssistantCoachDropDownOption = await $$(this.awayTeamSecondAssistantCoachDropDownOption)
            await $(await secondAssistantCoachDropDownOption[3]).click()
            await browser.pause(500)
            await HelperPage.clickStaffMultipleCheckboxes(11, 1, 1)
        }

        if (side.toLocaleLowerCase() === 'home') {
            await $(await this.homeTeamStaffBtn).click()
            await HelperPage.waitUntilElement(this.homeTeamCoachDropDown, 60000)

            let coachdropDownOption = await $$(this.homeTeamCoachNameDropDownOption)

            await $(await this.homeTeamCoachDropDown).click()
            await $(await coachdropDownOption[1]).click()
            await HelperPage.waitUntilElement(this.homeTeamCoachActiveCheckbox, 60000)
            await browser.pause(500)
            await $(await this.homeTeamCoachActiveCheckbox).click()

            await HelperPage.waitUntilElement(this.homeTeam1stAssistantCoachDropDown, 60000)
            await $(await this.homeTeam1stAssistantCoachDropDown).click()
            await browser.pause(200)
            let homeTeam1stAssistantCoachDropDownOption = await $$(this.homeTeam1stAssistantCoachDropDownOption)
            await $(await homeTeam1stAssistantCoachDropDownOption[2]).click()
            await HelperPage.waitUntilElement(this.homeTeam1stAssistantCoachhActiveCheckbox, 60000)
            await browser.pause(500)
            await $(await this.homeTeam1stAssistantCoachhActiveCheckbox).click()

            await HelperPage.waitUntilElement(this.homeTeam2ndAssistantCoachDropDown, 60000)
            await $(await this.homeTeam2ndAssistantCoachDropDown).click()
            await browser.pause(200)
            let homeTeam2ndAssistantCoachDropDownOption = await $$(this.homeTeam2ndAssistantCoachDropDownOption)
            await $(await homeTeam2ndAssistantCoachDropDownOption[3]).click()
            await HelperPage.waitUntilElement(this.homeTeam2ndAssistantCoachActiveCheckbox, 60000)
            await browser.pause(500)
            await $(await this.homeTeam2ndAssistantCoachActiveCheckbox).click()

        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function populateHomeRoster populate home roster
    * @param example await TeamSetupPage.populateHomeRoster()
    */
    public async populateHomeRoster() {
        await HelperPage.waitUntilElement(this.homeTeamInput1, 60000)
        await browser.pause(500)
        await $(await this.homeTeamInput1).setValue(1)

        await HelperPage.waitUntilElement(this.homeTeamStarterCheckbox1, 60000)
        await $(await this.homeTeamStarterCheckbox1).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamStarterCheckbox1).click()

        await HelperPage.waitUntilElement(this.homeTeamCaptCheckbox1, 60000)
        await $(await this.homeTeamCaptCheckbox1).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamCaptCheckbox1).click()

        await HelperPage.waitUntilElement(this.homeTeamInput2, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput2).setValue(2)

        await HelperPage.waitUntilElement(this.homeTeamStarterCheckbox2, 60000)
        await $(await this.homeTeamStarterCheckbox2).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamStarterCheckbox2).click()

        await HelperPage.waitUntilElement(this.homeTeamInput3, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput3).setValue(3)
        await HelperPage.waitUntilElement(this.homeTeamStarterCheckbox3, 60000)
        await $(await this.homeTeamStarterCheckbox3).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamStarterCheckbox3).click()

        await HelperPage.waitUntilElement(this.homeTeamInput4, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput4).setValue(4)
        await HelperPage.waitUntilElement(this.homeTeamStarterCheckbox4, 60000)
        await $(await this.homeTeamStarterCheckbox4).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamStarterCheckbox4).click()

        await HelperPage.waitUntilElement(this.homeTeamInput5, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput5).setValue(5)
        await HelperPage.waitUntilElement(this.homeTeamStarterCheckbox5, 60000)
        await $(await this.homeTeamStarterCheckbox5).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamStarterCheckbox5).click()

        await HelperPage.waitUntilElement(this.homeTeamInput6, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput6).setValue(6)
        await HelperPage.waitUntilElement(this.homeTeamActiveCheckbox6, 60000)
        await $(await this.homeTeamActiveCheckbox6).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamActiveCheckbox6).click()

        await HelperPage.waitUntilElement(this.homeTeamInput7, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput7).setValue(7)
        await HelperPage.waitUntilElement(this.homeTeamActiveCheckbox7, 60000)
        await $(await this.homeTeamActiveCheckbox7).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamActiveCheckbox7).click()

        await HelperPage.waitUntilElement(this.homeTeamInput8, 60000)
        await $(await this.homeTeamInput8).setValue(8)
        await HelperPage.waitUntilElement(this.homeTeamActiveCheckbox8, 60000)
        await $(await this.homeTeamActiveCheckbox8).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamActiveCheckbox8).click()

        await HelperPage.waitUntilElement(this.homeTeamInput9, 60000)
        await browser.pause(200)
        await $(await this.homeTeamInput9).setValue(9)
        await HelperPage.waitUntilElement(this.homeTeamActiveCheckbox9, 60000)
        await $(await this.homeTeamActiveCheckbox9).waitForClickable({ timeout: 5000 })
        await $(await this.homeTeamActiveCheckbox9).click()

    }
}

export default new TeamSetupPage();