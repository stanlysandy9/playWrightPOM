import { Page, Locator } from '@playwright/test';


export class AboutUsPage {
    readonly page: Page;

    //About us page locators
    readonly aboutUsTitle: Locator;
    readonly aboutUsDescriptionText1: Locator;
    readonly aboutUsDescriptionText2: Locator;
    readonly aboutUsDescriptionText3: Locator;
    readonly aboutUsDescriptionText4: Locator;
    readonly aboutUsDescriptionlink: Locator;          

    constructor(page: Page) {
        this.page = page;
        this.aboutUsTitle = page.getByRole('heading', { name: "About Us" }).first();
        this.aboutUsDescriptionText1 = page.getByText('This is a demo site created for ').first();
        this.aboutUsDescriptionText2 = page.getByText(', an awesome new way to make your Shopify site social. Sauce allows you to let ').first();
        this.aboutUsDescriptionText3 = page.getByText('customers to share what they purchase to their friends, and s').first();
        this.aboutUsDescriptionText4 = page.getByText('ee what their friends have purchased or "wanted" on your store.').first();
        this.aboutUsDescriptionlink = page.getByRole('link', { name: 'Sauce' }).first();
    }
}
