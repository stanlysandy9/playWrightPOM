import { Page, Locator } from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly homePageURL: string;


    //Header locators
    readonly searchIcon: Locator;
    readonly searchInput: Locator
    readonly searchOption: Locator;
    readonly aboutUsLink: Locator;
    readonly loginLink: Locator;
    readonly signUpLink: Locator;
    readonly mycartButton: Locator;
    readonly checkOutButton: Locator;

    //main page locators
    readonly mainPageTitle: Locator;
    readonly mainPageDescription: Locator;
    readonly homePageLink: Locator;
    readonly products1: Locator;
    readonly products2: Locator;
    readonly catalogLink: Locator;
    readonly blogLink: Locator;
    readonly aboutUsLink2: Locator;
    readonly wishListLink: Locator;
    readonly referAFriendLink: Locator;
    readonly facebookLink: Locator;
    readonly twitterLink: Locator;
    readonly pinterestLink: Locator;
    readonly blogLink2: Locator;

    //footer locators
    readonly aboutUsDescription: Locator;
    readonly searchButton1: Locator;
    readonly aboutUsButton1: Locator;
    readonly searchButton2: Locator;
    readonly aboutUsButton2: Locator;
    readonly card1: Locator;
    readonly card2: Locator;
    readonly card3: Locator;
    readonly shopifyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homePageURL    = "https://sauce-demo.myshopify.com/";

        //Header locators
        this.searchIcon =  page.locator('#search-submit')
        this.searchInput = page.getByRole('textbox', { name: 'Search' });
        this.searchOption = page.locator('a').filter({ hasText: 'Search' }).first();
        this.aboutUsLink = page.locator('a').filter({ hasText: 'About Us' }).first();
        this.loginLink = page.locator('a').filter({ hasText: 'Log In' }).first();
        this.signUpLink = page.locator('a').filter({ hasText: 'Sign up' }).first();
        this.mycartButton = page.getByRole('link', { name: 'My Cart' });
        this.checkOutButton = page.getByRole('link', { name: 'Check Out' });

        //main page locators
        this.mainPageTitle = page.getByRole('img', { name: 'Sauce Demo' });
        this.mainPageDescription = page.getByText('A demo store for testing purposes', { exact: true });
        this.products1 = page.locator('#product-1')
        this.products2 = page.locator('#product-2')
        this.homePageLink = page.getByRole('link', { name: 'Home' }).first();
        this.catalogLink = page.getByRole('link', { name: 'Catalog' }).first();
        this.blogLink = page.getByRole('link', { name: 'Blog' }).first();
        this.aboutUsLink2 = page.getByRole('link', { name: 'About Us' }).nth(1);
        this.wishListLink = page.getByRole('link', { name: 'Wish list' }).first();
        this.referAFriendLink = page.getByRole('link', { name: 'Refer a friend' }).first();
        this.facebookLink = page.locator("//a[@class='facebook ']").first();
        this.twitterLink = page.locator("//a[@class='twitter ']").first();
        this.pinterestLink = page.locator("//a[@class='instagram ']").first();
        this.blogLink2 = page.locator("//a[@class='rss ']").first();                           

        //footer locators       
        this.aboutUsDescription = page.getByText(', an awesome new way to make your Shopify site social. Sauce allows you to let ')
        this.searchButton1 = page.locator('a').filter({ hasText: 'Search' }).nth(1);
        this.aboutUsButton1 = page.locator('a').filter({ hasText: 'About Us' }).nth(2);
        this.searchButton2 = page.locator('a').filter({ hasText: 'About Us' }).nth(2);
        this.aboutUsButton2 = page.locator('a').filter({ hasText: 'About Us' }).nth(3);
        this.card1 = page.getByAltText('We accept Amex');
        this.card2 = page.getByAltText('We accept Visa');
        this.card3 = page.getByAltText('We accept Mastercard');
        this.shopifyLink = page.getByRole('link',{name: 'Shopping Cart by Shopify'});      
    }
    //Methods

    //Navigate to home page
    async navigateToHomePage() {
        await this.page.goto(this.homePageURL);
    }
    //Search for a product using the search field in the header
    async searchField(searchText: string){
            await this.searchInput.fill(searchText);
            await this.searchIcon.click();
            await this.page.waitForURL(/search/, { timeout: 10000 });
         }
    //Search for a product using the search option in the header
    async searchOptionMethod(){
        await this.searchInput.fill("Gray");
        await this.searchOption.click();
        await this.page.waitForURL(/search/, { timeout: 10000 }); 
    }
    }