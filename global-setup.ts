import { Browser, chromium, Page,expect } from "@playwright/test";

import { HrmLoginPage } from "./CustomFixturesProject/pages/HrmLoginPage";
import { HrmHomePage } from "./CustomFixturesProject/pages/HrmHomePage";

 async function setUp(){
 const browser:Browser= await chromium.launch();
 const context= await browser.newContext();
const page:Page= await context.newPage();
 const hrmLoginPage = new HrmLoginPage(page);
 const hrmHomePage =new HrmHomePage(page); 

 await hrmLoginPage.navigateToHomePage();
 await hrmLoginPage.fillLoginCredentials();
 await hrmLoginPage.loginBtn.click();
 await expect(hrmHomePage.dashBoardHeader).toBeVisible({timeout: 30000});

 //set storage state
 await page.context().storageState({path:"./LoginAuth.json"})

 await browser.close();


} export default setUp;