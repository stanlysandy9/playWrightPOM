import {expect, test} from '@playwright/test';
import { HomePage } from '../DemoSaucePages/homePage';
import { LoginPage } from '../DemoSaucePages/loginPage';
import 'dotenv/config';
import searchData from '../demoSauceTestData/searchData.json'
import { AccountPage } from '../DemoSaucePages/accountPage';



test ('Verify login functionality with valid credentials', async  ({page})=>{

const homePage = new HomePage(page);
const loginPage =new LoginPage(page);
const accountPage= new AccountPage(page);

await homePage.navigateToHomePage();
//await expect(homePage.loginLink).toHaveCSS('font','Helvetica');
await expect(homePage.loginLink).toHaveCSS('color','rgb(51, 51, 51)');
await homePage.loginLink.click();

//Providing field data using .env file
await loginPage.emailField.fill(process.env.CANDIDATEEMAIL!);
await loginPage.passwordField.fill(process.env.CANDIDATEPASSWORD!)

await homePage.navigateToHomePage();
await homePage.loginLink.click();

//Providing field data using .json file
await loginPage.emailField.fill(searchData.customerEmail);
await loginPage.passwordField.fill(searchData.customerPassword);

await loginPage.signInBtn.click();

//await expect(accountPage.logoutBtn).toBeVisible();  //expected failure due to capcha verification

})
test ('Verify login with incorrect credentials', async ({page})=>{

    


})