// import {test as base, expect, Page} from '@playwright/test'
// import { HrmLoginPage } from '../pages/HrmLoginPage'
// import { HrmHomePage } from '../pages/HrmHomePage';

// type HRMFixtures= {
//     loginFixture:Page;

// };

// const test = base.extend<HRMFixtures>({
//     loginFixture: async ({page}, use)=>{
//          const hrmLoginPage =new HrmLoginPage(page);


//  await  hrmLoginPage.navigateToHomePage();
//  await  hrmLoginPage.fillLoginCredentials();

//         await use(page);
//         console.log('End of test');
//     },
// })



// test('HRM login page verification', async ({loginFixture,page})=>{
// const hrmHomePage =new HrmHomePage(page);
// const hrmLoginPage =new HrmLoginPage(page);

//  await hrmLoginPage.loginBtn.click();
//  await expect(hrmHomePage.dashBoardHeader).toBeVisible();


// })
import {  test } from '../fixtures/hrmLoginPageFixtures'
import { HrmHomePage } from '../pages/HrmHomePage';
import { expect } from '@playwright/test';


test('HRM Login Verification', async ({ page, loginFixture,logoutFixture }) => {
    
    const hrmHomePage = new HrmHomePage(page);


    await loginFixture.loginBtn.click();
    await expect(hrmHomePage.dashBoardHeader).toBeVisible();


})
test ('webhook test',({page})=>
{
console.log("WebHook Testing with CD")
console.log("WebHook Testing with CD 2")
})