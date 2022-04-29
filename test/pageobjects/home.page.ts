import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get customerId() {
        return '#root > div.mainbody.container > div > div > div > div > table > tbody > tr > td:nth-child(1)'
    }

    public get customerName() {
        return '#root > div.mainbody.container > div > div > div > div > table > tbody > tr > td:nth-child(2)'
    }

    public get btnSelect() {
        return 'button[class="btn btn-outline-secondary btn-sm"]'
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async navigateToHome(): Promise<void> {
        await $(this.btnSelect).click();
    }
}

export default new HomePage();