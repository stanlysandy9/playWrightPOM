import { Locator, Page } from "@playwright/test";
import 'dotenv/config';



export class LoginPage {

    readonly page: Page;
    readonly userIdField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;


    constructor(page: Page) {

        this.page = page;
        this.userIdField = page.locator('#user-name');
        this.passwordField = page.locator('#password');
        this.loginBtn = page.getByRole('button', { name: 'Login' });

    }
}
