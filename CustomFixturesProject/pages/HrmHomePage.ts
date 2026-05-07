import { Locator, Page } from "@playwright/test";



 export class HrmHomePage {
    readonly page:Page;
    readonly dashBoardHeader:Locator;
    readonly userProfile:Locator;
    readonly logout: Locator;

    constructor(page:Page) {

        this.page=page;
        this.dashBoardHeader= page.getByRole('heading',{name: 'Dashboard'});
        this.userProfile=page.getByAltText('profile picture');
        this.logout=page.getByText('Logout');

    }
    async hrmlogout(){
        await this.userProfile.click();
        await this.logout.click();
    }



 }