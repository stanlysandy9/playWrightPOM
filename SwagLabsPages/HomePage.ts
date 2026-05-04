import { Page, Locator } from "@playwright/test";



export class HomePageswaglabs {

    readonly backpack: Locator;
    readonly page: Page;
    readonly cart: Locator;
    readonly cartCount: Locator;
    readonly rhsMenu:Locator;
    readonly logOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backpack = page.getByText('Sauce Labs Backpack');
        this.cart = page.locator('[data-test="shopping-cart-link"]');
        this.cartCount = page.locator('[data-test="shopping-cart-badge"]');
        this.rhsMenu= page.getByRole('button', {name:"Open Menu"});
        this.logOut=page.locator('#logout_sidebar_link');

    }

}