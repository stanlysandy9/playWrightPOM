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
    readonly aboutUsTitle2: Locator;
    readonly aboutUsDescriptionText12: Locator;
    readonly aboutUsDescriptionText22: Locator;
    readonly aboutUsDescriptionText32: Locator;
    readonly aboutUsDescriptionText42: Locator;
    readonly aboutUsDescriptionlink2: Locator;        

    constructor(page: Page) {
        this.page = page;
        this.aboutUsTitle = page.getByRole('heading', { name: "About Us" }).first();
        this.aboutUsDescriptionText1 = page.getByText('This is a demo site created for ').first();
        this.aboutUsDescriptionText2 = page.getByText(', an awesome new way to make your Shopify site social. Sauce allows you to let ').first();
        this.aboutUsDescriptionText3 = page.getByText('customers to share what they purchase to their friends, and s').first();
        this.aboutUsDescriptionText4 = page.getByText('ee what their friends have purchased or "wanted" on your store.').first();
        this.aboutUsDescriptionlink = page.getByRole('link', { name: 'Sauce' }).first();
        this.aboutUsTitle2 = page.getByRole('heading', { name: "About Us" }).nth(1);
         this.aboutUsDescriptionText12 = page.getByText('This is a demo site created for ').nth(1);
        this.aboutUsDescriptionText22 = page.getByText(', an awesome new way to make your Shopify site social. Sauce allows you to let ').nth(1);
        this.aboutUsDescriptionText32 = page.getByText('customers to share what they purchase to their friends, and s').nth(1);
        this.aboutUsDescriptionText42 = page.getByText('ee what their friends have purchased or "wanted" on your store.').nth(1);
        this.aboutUsDescriptionlink2 = page.getByRole('link', { name: 'Sauce' }).nth(1);
    }
}
