import {test as base,expect,  Page } from '@playwright/test'
import { HrmLoginPage } from '../pages/HrmLoginPage';
import { HrmHomePage } from '../pages/HrmHomePage';


type MyLoginPageFixture = {
    loginFixture: HrmLoginPage;
    logoutFixture:HrmHomePage;

};

export const test = base.extend<MyLoginPageFixture>({
    loginFixture: async ({ page }, use) => {
        const hrmLoginPage = new HrmLoginPage(page);
        
        await hrmLoginPage.navigateToHomePage();
        await hrmLoginPage.fillLoginCredentials();
        await use(hrmLoginPage )
    }, 
    logoutFixture:async ({page}, use)=>{

const hrmHomePage = new HrmHomePage(page);
 const hrmLoginPage = new HrmLoginPage(page);

await use(hrmHomePage);
   await hrmHomePage.hrmlogout();
   await expect(hrmLoginPage.loginBtn).toBeVisible();
   
   

    }

}) 


