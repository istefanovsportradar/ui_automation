import { ChainablePromiseElement } from 'webdriverio';
import HelperPage from './helper.page';
import homePage from './home.page';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixturesPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addNewFixtureBtn() {
        return 'button[type="submit"]'
    }
    /**
     * define selectors using getter methods
     */
    public get firstTableRow() {
        return '//*/table/tbody/tr[1]/td[1]'
    }
    /**
     * define selectors using getter methods
     */
    public get roundField() {
        return '#roundNumber'
    }
    /**
     * define selectors using getter methods
     */
    public get homeTeamDropdown() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(2) > select'
    }
    /**
     * define selectors using getter methods
     */
    public get awayTeamDropdown() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(4) > select'
    }
    /**
     * define selectors using getter methods
     */
    public get venueDropdown() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(5) > select'
    }
    /**
     * define selectors using getter methods
     */
    public get startDatePicker() {
        return '#expiryDate'
    }
    /**
     * define selectors using getter methods
     */
    public get startHoursTime() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > select:nth-child(1)'
    }
    /**
     * define selectors using getter methods
     */
    public get startMinutesTime() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > select:nth-child(3)'
    }
    /**
     * define selectors using getter methods
     */
    public get typeDropdown() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(8) > select'
    }
    /**
     * define selectors using getter methods
     */
    public get statusDropdown() {
        return '#root > div.mainbody.container-fluid > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(9) > select'
    }
    /**
     * define selectors using getter methods
     */
    public get successBtn() {
        return 'button[class="btn btn-outline-success btn-sm"]'
    }
    /**
     * define selectors using getter methods
     */
    public get successPopUp() {
        return '#root > div.mainbody.container-fluid > div.page-display-flash-messages > div'
    }
    /**
     * define selectors using getter methods
     */
    public get searchField() {
        return '#search'
    }
    /**
     * define selectors using getter methods
     */
    public get gameDate() {
        return 'span[class="date"]'
    }
    /**
     * define selectors using getter methods
     */
    public get gameTime() {
        return 'span[class="time"]'
    }
    /**
    * define selectors using getter methods
    */
    public get disabledGixtureGameBtn() {
        return '#root > div > div.setup-page.container > div > div > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr > td:nth-child(9) > div'
    }
    /**
    * define selectors using getter methods
    */
    public get startTimeColumn() {
        return '//*//tr/td[7]/span'
    }
    /**
    * define selectors using getter methods
    */
    public get paginationNext() {
        return '[class="float-right btn btn-secondary"]'
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async addNewFixture(hoursNumber: number, minutesNumber: number, homeTeam: string, awayTeam: string, venue: string, startDate: string, type: string, status: string) {
        let getDate = await HelperPage.getCanadianTimeAndDate(0, 'hours')

        await $(await this.firstTableRow).waitForClickable({ timeout: 60000 })
        await HelperPage.waitUntilElement(this.firstTableRow, 60000)
        await browser.pause(5000)
        await $(this.firstTableRow).click()
        await HelperPage.waitUntilElement(this.homeTeamDropdown, 60000)
        await $(this.homeTeamDropdown).selectByVisibleText(homeTeam)
        await HelperPage.waitUntilElement(this.awayTeamDropdown, 60000)
        await $(this.awayTeamDropdown).selectByVisibleText(awayTeam)
        await HelperPage.waitUntilElement(this.venueDropdown, 60000)
        await $(this.venueDropdown).selectByVisibleText(venue)
        await HelperPage.waitUntilElement(this.startDatePicker, 60000)
        await $(this.startDatePicker).setValue(getDate.date_input)
        await HelperPage.waitUntilElement(this.startHoursTime, 60000)
        let getHours = await HelperPage.getCanadianTimeAndDate(hoursNumber, 'hours')
        await $(this.startHoursTime).selectByVisibleText(getHours.hour)
        await HelperPage.waitUntilElement(this.startMinutesTime, 60000)
        let getMinutes = await HelperPage.getCanadianTimeAndDate(minutesNumber, 'minutes')
        await $(this.startMinutesTime).selectByVisibleText(getMinutes.minute)

        var date = {
            getHours: getHours,
            getMinutes: getMinutes
        }

        await HelperPage.waitUntilElement(this.typeDropdown, 60000)
        await $(this.typeDropdown).selectByVisibleText(type)
        await HelperPage.waitUntilElement(this.statusDropdown, 60000)
        await $(this.statusDropdown).selectByVisibleText(status)

        return date
    }
}

export default new FixturesPage();