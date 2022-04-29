import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrganizationsPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get organizationId() {
        return '#root > div.mainbody.container > div.row > div > div.table-responsive.disabled-false.fixed-false > table > tbody > tr:nth-child(1) > td:nth-child(1)'
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async selectOrganizationByXpath(id: string): Promise<void> {
        const organizationId = await $('//*/table/tbody/tr/td[contains(text(), "' + id + '")]/../td[5]/a')
        await organizationId.click()
    }
}

export default new OrganizationsPage();