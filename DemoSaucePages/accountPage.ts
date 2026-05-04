import { Locator, Page } from "@playwright/test";



export class AccountPage {
    readonly page:Page;
    readonly logoutBtn:Locator;

    constructor (page:Page){
        this.page= page;
        this.logoutBtn= page.getByRole('link', {name:'Logout' });


    }

}