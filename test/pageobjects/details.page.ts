import { ChainablePromiseElement } from 'webdriverio';
import HelperPage from './helper.page';
var expect = require('chai').expect

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get addOfficialsBtn() {
        return '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[2]'
    }
    /**
     * define selectors using getter methods
     */
    public get addOfficialsRoleDropDown() {
        return '//body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[4]/select[1]/option'
    }
    /**
     * define selectors using getter methods
     */
    public get addOfficialsNameDropDown() {
        return '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[5]/div[1]/input[1]'
    }
    /**
     * define selectors using getter methods
     */
    public get detailsNextBtn() {
        return 'a[class="link btn btn-sm btn-success btn-next btn-lg enabled-true"]'
    }
    /**
     * define selectors using getter methods
     */
    public get attendanceInputField() {
        const element = 'input[name="attendance"]'
        return element
    }
    /**
     * define selectors using getter methods
     */
    public get attendanceField() {
        return '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[5]/input[1]'
    }
    /**
    * define selectors using getter methods
    */
    public get noOfPeriodsLabel() {
        return '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[1]/span[1]'
    }
    /**
    * define selectors using getter methods
    */
    public get periodLengthLabel() {
        return '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[2]/span[1]'
    }
    /**
    * define selectors using getter methods
    */
    public get overtimeLengthLabel() {
        return '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[3]/span[1]'
    }
    /**
    * define selectors using getter methods
    */
    public get foulsBeforeBonusLabel() {
        return '//body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/ul[1]/li[4]/span[1]'
    }
    /**
  * a method to encapsule automation code to interact with the page
  * e.g. function technicalFoul
  */
    public async populateOfficials() {
        await HelperPage.waitUntilElement(this.addOfficialsBtn, 60000)

        await $(await this.attendanceField).clearValue()

        const randomAttendanceNumber = await HelperPage.generateRandomNumberRange(10000, 15000)
        await HelperPage.waitUntilElement(this.attendanceField, 60000)
        await $(await this.attendanceField).setValue(randomAttendanceNumber)

        await expect(await $(this.noOfPeriodsLabel).getText()).to.equal("4")
        await expect(await $(this.periodLengthLabel).getText()).to.equal("10 minutes")
        await expect(await $(this.overtimeLengthLabel).getText()).to.equal("5 minutes")
        await expect(await $(this.foulsBeforeBonusLabel).getText()).to.equal("5")

        await HelperPage.waitUntilElement(this.addOfficialsBtn, 60000)
        await $(await this.addOfficialsBtn).click()
        await HelperPage.waitUntilElement(this.addOfficialsRoleDropDown, 60000)
        const roles = await $$(this.addOfficialsRoleDropDown)
        var numb = 4

        for (var i = 1; i < roles.length; i++) {

            await $(await '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + numb + ']/select[1]/option[' + (i + 1) + ']').click()
            await browser.pause(300)
            await $(await '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + (numb + 1) + ']/div[1]/input[1]').click()

            let nameDropdownCount = await $$(await '//*[@id="root"]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + (numb + 1) + ']/div[1]/div[1]/a')
            let randomName = await HelperPage.generateRandomNumberRange(1, nameDropdownCount.length)
            await browser.pause(300)
            await $(await '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + (numb + 1) + ']/div[1]/div[1]/a[' + randomName + ']').click()

            if (i < (roles.length - 1)) {
                await $(await this.addOfficialsBtn).click()
            }
            if (i == (roles.length - 1)) {
                await browser.pause(300)
                await $(await '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + ((numb + 1) - 3) + ']/div[1]/div[1]/button[1]/span[1]').click()
                await browser.pause(300)
                await $(await '/html[1]/body[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/span[' + ((numb + 1) - 2) + ']/span[1]/i[1]').click()
            }
            numb = (numb + 3)
        }

        await $(await this.detailsNextBtn).click()

        return randomAttendanceNumber
    }
}

export default new DetailsPage();