import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername()  {
         return '#username'
    }
    /**
    * define selectors using getter methods
    */
    public get inputPassword()  {
         return '#password'
    }
    /**
        * define selectors using getter methods
        */
    public get btnSubmit()  {
         return 'button[type="submit"]'
    }
    /**
    * define selectors using getter methods
    */
    public get inputUsername_Ig()  {
         return 'input[placeholder="User Name"]'
    }
    /**
    * define selectors using getter methods
    */
     public get inputPassword_Ig()  {
         return 'input[placeholder="Password"]'
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(usernameElement, passwordElement, submitButton, username: string, password: string) {
        const usernameField = await usernameElement
        await usernameField.setValue(username)

        const passwordField = await passwordElement
        await passwordField.setValue(password)

        const btnSubmit = await submitButton
        await btnSubmit.click()
    }
}

export default new LoginPage();