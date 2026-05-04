import {  expect } from '@playwright/test';
import loginData from '../SwagLabsTestData/Logindata.json';
import 'dotenv/config';
import { LoginPage } from '../SwagLabsPages/LoginPage';
import { ProductPage } from '../SwagLabsPages/ProductPage';
import { CartPage } from '../SwagLabsPages/CartPage';
import { HomePageswaglabs } from '../SwagLabsPages/HomePage';
import {test} from '../SwagLabsFixtures/LoginLogoutHookAsFixtures';

// test.beforeEach('Add product to Cart', async ({ page }) => {

//     const loginPage = new LoginPage(page);

//     await page.goto(process.env.SWAGLABTESTURL!)
//     await loginPage.userIdField.fill(loginData.UserId);
//     await loginPage.passwordField.fill(loginData.Password);
//     await loginPage.loginBtn.click();

//     await expect(page.getByText('Swag Labs').first()).toBeAttached();

// })

test('Add Product to cart functionality verification', async ({ page, loginHook }) => {
    const homePage = new HomePageswaglabs(page);
    const productPage = new ProductPage(page);
    const cartpage = new CartPage(page);

    await expect(page.getByText('Swag Labs').first()).toBeAttached();
    await homePage.backpack.click();
    await productPage.addToCart.click();
    await expect(productPage.remove).toBeVisible();
    await expect(homePage.cartCount).toHaveText('1');
    await homePage.cart.click();

    await expect(cartpage.price).toContainText('29.99');
    await expect(productPage.remove).toBeVisible();
    console.log('test');


})

// test.afterEach('Logout of application', async ({ page }) => {

//     const homePage = new HomePageswaglabs(page);


//     await homePage.rhsMenu.hover();
//     await homePage.rhsMenu.click()
//     await homePage.logOut.click();

//     await page.waitForTimeout(3000);  //Manual wait time added
//      expect(page.url()).toContain('https://www.saucedemo.com/');



// })

