const path = require('path');
import { compareAsc, format } from 'date-fns'
const moment = require('moment')
const fs = require('fs')
const axios = require('axios');
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HelperPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get periodDropDown() {
        return '//body/div[@id="root"]/div[1]/div[3]/div[1]/div[1]/select[1]'
    }

    /**
     * define selectors using getter methods
     */
    public get insertPlayBtnArray() {
        return '//body/div[@id="root"]/div[1]/div[3]/div[1]/div/div[1]/div[1]'
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to return boolean value of the element
     * @param element element (ex. 'button[onclick="addElement()"]')
     * @param example await HelperPage.selectDropDownByText(ElemetsPage.addElementBtn);
     */
    public async selectDropDownByText(element: any, value: any): Promise<void> {
        await element.waitForDisplayed({ timeout: 60000 })
        const elementFromTest = await element
        await elementFromTest.selectByVisibleText(value)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to return boolean value of the element
     * @param element element (ex. 'button[onclick="addElement()"]')
     * @param example await HelperPage.insertValue(ElemetsPage.addElementBtn);
     */
    public async insertValue(element: any, value: any): Promise<void> {
        await element.waitForDisplayed({ timeout: 60000 })
        const elementFromTest = await element
        await elementFromTest.setValue(value)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to return boolean value of the element
     * @param element element (ex. 'button[onclick="addElement()"]')
     * @param example await HelperPage.clickOnElement(ElemetsPage.addElementBtn);
     */
    public async clickOnElement(element: any): Promise<void> {
        await element.waitForDisplayed({ timeout: 60000 })
        const elementFromTest = await element
        await elementFromTest.click()
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to return boolean value of the element
     * @param element element (ex. 'button[onclick="addElement()"]')
     * @param example await HelperPage.waitForElement(ElemetsPage.addElementBtn);
     */
    public async waitForElement(element): Promise<void> {
        await element.waitForDisplayed({ timeout: 60000 })
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to return boolean value of the element
     * @param element element (ex. 'button[onclick="addElement()"]')
     * @param example await HelperPage.isElementDisplayed(ElemetsPage.addElementBtn);
     */
    public async isElementDisplayed(element): Promise<void> {
        //await this.addElementBtn.click();
        await element.waitForDisplayed({ timeout: 60000 });
        const isDisplayed = await element.isDisplayed();
        return isDisplayed;
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. to clear value and insert a new onece
    * @param element element (ex. '#email')
    * @param value value (ex. "test@mail.com")
    * @param example await HelperPage.clearAndInsertValueFunction('#email', "test@mail.com")
    * @param example  await HelperPage.clearAndInsertValueFunction(this.inputUsername, username)
    */
    public async clearAndInsertValueFunction(element: any, value: string): Promise<void> {
        await element.clearValue()
        await element.setValue(`${value}`)
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function returnElementsLengthFunction received only 'string'
    * e.g. this function returns number of elements with the same locator
    * @param elements element (ex. '#content > div > h4 > em')
    * @param example await HelperPage.returnElementsLengthFunction('#content > div > h4 > em')
    */
    public async returnElementsLengthFunction(elements: string) {
        let elementsLength = await $$(elements).length

        return elementsLength
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function returnArrayElementsTextFunction received only 'string'
    * e.g. this function returns <Array> of texts
    * @param elements element (ex. '#login > div > div > label')
    * @param example await HelperPage.returnArrayElementsTextFunction('#login > div > div > label')
    */
    public async returnArrayElementsTextFunction(elements: string) {

        const arrayOfTexts = await Promise.all(await $$(elements).map(elem => {
            return elem.getText()
        }))

        return arrayOfTexts
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function returnFieldValueFunction received only 'string'
    * e.g. this function input filed value
    * @param elements input element ('#username')
    * @param example await HelperPage.returnFieldValueFunction('#username')
    */
    public async returnFieldValueFunction(elements: string) {
        const inputField = await $(elements)
        const value = await inputField.getValue()

        return value
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function uploadFileFunction uplaod file into the form
    * @param element upload file element ('#file-upload')
    * @param filePath path of the file (e.g. /path/to/image.png)
    * @param example await HelperPage.uploadFileFunction('#file-upload', 'image.png')
    */
    public async uploadFileFunction(element: string, filePath: string) {
        const path = filePath
        const remoteFilePath = await browser.uploadFile(path)

        await $(element).setValue(remoteFilePath)
        await $(element).click()
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function uploadFileFunction uplaod file into the form
    * @param numb this value is 'integer' (ex: how much hour you should add)
    * @param input this value is 'string' (ex: 'hours', 'days', 'years')
    * @param link https://momentjs.com/docs/#:~:text=add(7%2C%20%27d%27)%3B-,Key,Shorthand,-years
    */
    public async getCanadianTimeAndDate(numb: number, input: string) {
        let array = []
        const twoDigit = (d) => (d < 10 ? '0' : '') + d;
        const formatDate = (date, time) => {
            date = date.map((x) => twoDigit(x)).join('/');
            time = time.map((x) => twoDigit(x)).join(':');
            return `${date} ${time}`;
        };

        const getOffset = (month, date, day, hour) => {
            // assume MST offset
            let offset = 7;

            // adjust to MDT offset as needed
            if ((month > 2 && month < 10) || (month === 2 && date > 14)) {
                offset = 6;
            } else if (month === 2 && date > 7 && date < 15) {
                if ((day && date - day > 7) || (day === 0 && hour - offset >= 2)) {
                    offset = 6;
                }
            } else if (month === 10 && date < 8) {
                if ((day && date - day < 0) || (day === 0 && hour - offset < 1)) {
                    offset = 6;
                }
            }

            return offset;
        };

        const getMountainTime = (numb: number, input: string) => {
            const mtd = moment(new Date()).add(numb, input); // current datetime
            const dt = mtd._d
            let year = dt.getUTCFullYear(); // utc year
            let month = dt.getUTCMonth(); // utc month (jan is 0)
            let date = dt.getUTCDate(); // utc date
            let hour = dt.getUTCHours(); // utc hours (midnight is 0)
            let minute = dt.getUTCMinutes(); // utc minutes
            let second = dt.getUTCSeconds(); // utc seconds
            let day = dt.getUTCDay(); // utc weekday (sunday is 0)
            let offset = getOffset(month, date, day, hour);
            if (hour - offset < 0) {
                hour = 24 + hour - offset;
                day = day ? day - 1 : 6;
                if (date === 1) {
                    if (!month) {
                        year -= 1;
                        month = 11;
                    } else {
                        month -= 1;
                    }

                    date = new Date(year, month + 1, 0).getDate();
                } else {
                    date -= 1;
                }
            } else {
                hour -= offset;
            }

            month += 1;

            array.push(month, date, year, hour, minute, second)
            return formatDate([month, date, year], [hour, minute, second]);
        };

        const canDate = getMountainTime(numb, input);

        const dateAndTime = {
            date: canDate,
            month: array[0].toString(),
            day: array[1].toString(),
            year: array[2].toString(),
            hour: array[3].toString(),
            minute: array[4].toString(),
            second: array[5].toString(),
            date_input: ""
        }

        if (dateAndTime.day < 10) {
            dateAndTime.day = "0" + dateAndTime.day
        }
        if (dateAndTime.month < 10) {
            dateAndTime.month = "0" + dateAndTime.month
        }
        if (dateAndTime.hour < 10) {
            dateAndTime.hour = "0" + dateAndTime.hour
        }
        if (dateAndTime.hour == "00") {
            return
        }
        if (dateAndTime.minute < 10) {
            dateAndTime.minute = "0" + dateAndTime.minute
        }

        dateAndTime.date_input = dateAndTime.month + dateAndTime.day + dateAndTime.year.toString()

        return dateAndTime
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function clickRosterMultipleCheckboxes select all roster checkboxes
    * @param value element value
    * @param loop how much times we want to loop
    * @param example await HelperPage.clickRosterMultipleCheckboxes(11, 1, 6)
    */
    public async clickRosterMultipleCheckboxes(value: number, loop: number, sum: number) {
        for (var i = 1; i <= loop; i++) {
            let element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div[2]/span[' + value + ']/*'
            await browser.pause(1500)
            await $(await element).click()
            await browser.pause(200)
            value += sum
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function clickStaffMultipleCheckboxes select all staff checkboxes
    * @param value element value
    * @param loop how much times we want to loop
    * @param example await HelperPage.clickStaffMultipleCheckboxes(5, 1, 1)
    */
    public async clickStaffMultipleCheckboxes(value: number, loop: number, sum: number) {
        for (var i = 1; i <= loop; i++) {
            let element = '//*[@id="root"]/div/div[2]/div/div/div[1]/div[2]/div/div/span[' + value + ']/span/div/label/span'
            await browser.pause(700)
            await this.waitUntilElement(element, 60000)
            await $(await element).click()
            await browser.pause(200)
            value += sum
        }
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function generateRandomNumberRange returnt random number from wanted range
    * @param min minimum range
    * @param max maximum range
    * @param example await HelperPage.generateRandomNumberRange(100, 200)
    */
    public async generateRandomNumberRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function pageUrl write id into the file
    * @param example await HelperPage.pageUrl()
    */
    public async pageUrlId() {
        var url = await browser.getUrl();
        var fixtureId = url.substring(url.lastIndexOf("/") + 1);

        let urls = {
            id: fixtureId,
            fullUrl: url,
        };

        let data = await JSON.stringify(urls, null, 2);
        await fs.writeFileSync('urls.txt', data);

        return urls
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getToken return token
    * @param example await HelperPage.getToken()
    */
    public async getToken() {
        let token = await axios.post(process.env.TOKEN_ENDPOINT, {
            credentialId: process.env.CREDENTIAL_ID,
            credentialSecret: process.env.CREDENTIAL_SECRET,
            sport: process.env.BASKETBALL,
            organization: {
                id: [process.env.ORGANIZATION_ID]
            }
        })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });

        return token.data.data.token
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getResponse return response
    * @param example await HelperPage.getStatisticsForEntityInFixtures()
    */
    public async getStatisticsForEntityInFixtures(apiUrl: string, token: string, live: string) {
        //let timestamp = new Date().getTime()

        if (process.env.NAME === 'sandpit' || process.env.NAME === 'nonprod' || process.env.NAME === 'prod') {

            var url = await browser.getUrl();
            var fixtureId = url.substring(url.lastIndexOf("/") + 1);

            let fixture = {
                id: fixtureId
            };

            let fixtureDetails = await JSON.stringify(fixture, null, 2);
            let path = `statistics/${process.env.NAME}_fixture.json`
            await fs.writeFileSync(path, fixtureDetails);

            const authToken = 'Bearer '.concat(token);
            await browser.pause(3000)
            const endpoint = `${apiUrl}${process.env.BASKETBALL}/o/${process.env.ORGANIZATION_ID}/statistics/for/entity/in/fixtures/${fixture.id}/${live}`

            let res = await axios.get(endpoint, { headers: { Authorization: authToken } })
                .then(async function (response) {
                    return response;
                })
                .catch(async function (error) {
                    return error;
                });

            let data = await JSON.stringify(res.data, null, 2);
            //let path = `responses/statistics_${timestamp}_${new Date().toDateString()}.json`
            path = `responses/${process.env.NAME}/currentJsonResponse.json`
            await fs.writeFileSync(path, data);

            let object = {
                response: res,
                jsonPath: path
            }

            return object
        }

    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getResponse return response
    * @param example await HelperPage.getPlayByPlay()
    */
    public async getPlayByPlay(apiUrl: string, token: string) {

        var url = await browser.getUrl();
        var fixtureId = url.substring(url.lastIndexOf("/") + 1);

        let fixture = {
            id: fixtureId
        };


        const authToken = 'Bearer '.concat(token);
        await browser.pause(1000)
        const endpoint = `${apiUrl}${process.env.BASKETBALL}/o/${process.env.ORGANIZATION_ID}/fixtures/${fixture.id}/playbyplay`

        let res = await axios.get(endpoint, { headers: { Authorization: authToken } })
            .then(async function (response) {
                return response;
            })
            .catch(async function (error) {
                return error;
            });

        let objectRows = res.data.meta.count
        let numbLinks = Object.keys(res.data.links).length
        let numbMeta = Object.keys(res.data.meta).length

        let arrayNumb = []
        let arrayFixture = []
        let arrayOrganization = []
        let arrayPerson = []
        let arrayScores = []
        let arrayEntity = []
        let arrayNumbLinks = []
        let arrayNumbMeta = []

        for (var i = 0; i < objectRows; i++) {
            let numb = Object.keys(res.data.data[i]).length
            let numbFixture = Object.keys(res.data.data[i].fixture).length
            let numbOrganization = Object.keys(res.data.data[i].organization).length
            let numbScores = Object.keys(res.data.data[i].scores).length

            if (res.data.data[i].entity != undefined) {
                let numbEntity = Object.keys(res.data.data[i].entity).length
                arrayEntity.push(numbEntity)
            }

            if (res.data.data[i].person != undefined) {
                let numbPerson = Object.keys(res.data.data[i].person).length
                arrayPerson.push(numbPerson)
            }

            arrayNumb.push(numb)
            arrayFixture.push(numbFixture)
            arrayOrganization.push(numbOrganization)
            arrayScores.push(numbScores)
        }

        arrayNumbLinks.push(numbLinks)
        arrayNumbMeta.push(numbMeta)

        let totalArrayNumb = arrayNumb.reduce((a, b) => a + b, 0)
        let totalArrayFixture = arrayFixture.reduce((a, b) => a + b, 0)
        let totalArrayOrganization = arrayOrganization.reduce((a, b) => a + b, 0)
        let totalArrayPerson = arrayPerson.reduce((a, b) => a + b, 0)
        let totalArrayScores = arrayScores.reduce((a, b) => a + b, 0)
        let totalArrayEntity = arrayEntity.reduce((a, b) => a + b, 0)
        let totalArrayNumbLinks = arrayNumbLinks.reduce((a, b) => a + b, 0)
        let totalArrayNumbMeta = arrayNumbMeta.reduce((a, b) => a + b, 0)

        let total = totalArrayNumb + totalArrayFixture + totalArrayOrganization + totalArrayPerson + totalArrayScores + totalArrayEntity + totalArrayNumbLinks + totalArrayNumbMeta

        let homeTeamPbpScore = res.data.data[res.data.data.length - 1].scores[process.env.HOME_TEAM_SCORE_ID]
        let awayTeamPbpScore = res.data.data[res.data.data.length - 1].scores[process.env.AWAY_TEAM_SCORE_ID]

        let pbp = {
            response: res,
            objectRows: total,
            homeTeamPbpScore: homeTeamPbpScore,
            awayTeamPbpScore: awayTeamPbpScore
        };

        return pbp

    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getResponse return response
    * @param example await HelperPage.getRoles()
    */
    public async getRoles(apiUrl: string, token: string) {

        var url = await browser.getUrl();
        var fixtureId = url.substring(url.lastIndexOf("/") + 1);

        let fixture = {
            id: fixtureId
        };


        const authToken = 'Bearer '.concat(token);
        await browser.pause(3000)
        const endpoint = `${apiUrl}${process.env.BASKETBALL}/o/${process.env.ORGANIZATION_ID}/fixtures/${fixture.id}/roles`

        let res = await axios.get(endpoint, { headers: { Authorization: authToken } })
            .then(async function (response) {
                return response;
            })
            .catch(async function (error) {
                return error;
            });

        let metaCount = res.data.meta.count

        let rols = {
            response: res
        };

        for (var i = 0; i < metaCount; i++) {
            rols.response["role" + (i + 1)] = res.data.data[i].role;
        }

        return rols
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getResponse return response
    * @param example await HelperPage.getRoles()
    */
    public async getFixtures(apiUrl: string, token: string) {

        var url = await browser.getUrl();
        var fixtureId = url.substring(url.lastIndexOf("/") + 1);

        let fixture = {
            id: fixtureId
        };


        const authToken = 'Bearer '.concat(token);
        await browser.pause(3000)
        const endpoint = `${apiUrl}${process.env.BASKETBALL}/o/${process.env.ORGANIZATION_ID}/fixtures/${fixture.id}`

        let res = await axios.get(endpoint, { headers: { Authorization: authToken } })
            .then(async function (response) {
                return response;
            })
            .catch(async function (error) {
                return error;
            });

        let objectRows = Object.keys(res.data).length;

        let fixtures = {
            response: res,
            objectRows: objectRows
        };

        return fixtures

    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function waitUntilElement write id into the file
    */
    public async waitUntilElement(element: any, timeout: number) {
        await browser.pause(200)
        await $(await element).waitUntil(
            async () => (await $(await element).isDisplayed()) === true,
            {
                timeout: timeout,
                timeoutMsg: `ELEMENT ${element} is not DISPLAYED in ${timeout} SECONDS`
            }
        )
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function returnAggregatedJson will return JSON response
    */
    public async returnAggregatedJson(file: string) {

        const response = await fs.readFileSync(file);
        let _obj = await JSON.parse(response)

        delete _obj.data[0].added
        delete _obj.data[0].updated
        delete _obj.data[0].fixture.id
        delete _obj.data[0].fixtureId
        delete _obj.data[0].statistics.pointsFromBench
        delete _obj.data[0].statistics.timeInLead
        delete _obj.data[0].statistics.pointsFastBreak
        delete _obj.data[0].statistics.pointsFastBreakAttempted
        delete _obj.data[0].statistics.pointsFastBreakMade
        delete _obj.data[0].statistics.trueShootingAttempts
        delete _obj.data[0].statistics.turnoversPercentage
        delete _obj.data[0].statistics.pointsFastBreakMade
        delete _obj.data[0].statistics.trueShootingPercentage
        delete _obj.links.self
        delete _obj.meta.generationTime
        delete _obj.meta.time

        delete _obj.data[1].added
        delete _obj.data[1].updated
        delete _obj.data[1].fixture.id
        delete _obj.data[1].fixtureId
        delete _obj.data[1].statistics.pointsFromBench
        delete _obj.data[1].statistics.timeInLead
        delete _obj.data[1].statistics.pointsFastBreak
        delete _obj.data[1].statistics.pointsFastBreakAttempted
        delete _obj.data[1].statistics.pointsFastBreakMade
        delete _obj.data[1].statistics.trueShootingAttempts
        delete _obj.data[1].statistics.turnoversPercentage
        delete _obj.data[1].statistics.pointsFastBreakMade
        delete _obj.data[1].statistics.trueShootingPercentage
        delete _obj.links.self
        delete _obj.meta.generationTime
        delete _obj.meta.time

        if (file.includes('past')) {
            let data = await JSON.stringify(_obj, null, 2);
            let path = `responses/${process.env.NAME}/pastAggregatedJsonResponse.json`
            await fs.writeFileSync(path, data);
        }
        if (file.includes('current')) {
            let data = await JSON.stringify(_obj, null, 2);
            let path = `responses/${process.env.NAME}/currentAggregatedJsonResponse.json`
            await fs.writeFileSync(path, data);
        }

        return _obj;
    }

    /**
    * a method to encapsule automation code to interact with the page
    * e.g. function getResponse 
    */
    public async getResponse(apiUrl: string, token: string, live: string) {

        if (process.env.NAME === 'sandpit' || process.env.NAME === 'nonprod' || process.env.NAME === 'prod') {

            const response = await fs.readFileSync(`statistics/${process.env.NAME}_fixture.json`);
            let past = await JSON.parse(response)

            const authToken = 'Bearer '.concat(token);
            const endpoint = `${apiUrl}${process.env.BASKETBALL}/o/${process.env.ORGANIZATION_ID}/statistics/for/entity/in/fixtures/${past.id}/${live}`

            let res = await axios.get(endpoint, { headers: { Authorization: authToken } })
                .then(async function (response) {
                    return response;
                })
                .catch(async function (error) {
                    return error;
                });

            let data = await JSON.stringify(res.data, null, 2);
            //let path = `responses/statistics_${timestamp}_${new Date().toDateString()}.json`
            let path = `responses/${process.env.NAME}/pastJsonResponse.json`
            await fs.writeFileSync(path, data);
        }

    }

}

export default new HelperPage();
