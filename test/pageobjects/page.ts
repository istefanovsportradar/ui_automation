/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const customData = require("../../data.conf.json");
const prodENV = require('dotenv').config({ path: `.env.${process.env.ENVIRONMENT}` })
const testENV = require('dotenv').config({ path: `.env` })

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async open(path: string): Promise<string> {
        await browser.url(`${path}`)
        await browser.pause(2000)
        var url = await browser.getUrl();
        return url
    }
}