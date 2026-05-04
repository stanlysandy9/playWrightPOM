import { Locator, Page } from "@playwright/test";



export class LoginPage {
    readonly page: Page;
    readonly loginPageHeader: Locator;
    readonly emailLabel: Locator;
    readonly emailField: Locator;
    readonly passwordlabel: Locator;
    readonly passwordField: Locator;
    readonly forgotPassLink: Locator;
    readonly signInBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginPageHeader = page.getByRole('heading', { name: "Customer Login" });
        this.emailLabel = page.getByLabel('Email Address');
        this.emailField = page.locator('#customer_email');
        this.passwordlabel = page.getByLabel('Password');
        this.passwordField = page.locator('#customer_password');
        this.forgotPassLink = page.getByRole('link', { name: 'Forgot your password?' });
        this.signInBtn = page.locator('[value="Sign In"]');

    }

}