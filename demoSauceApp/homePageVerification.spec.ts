import { test, expect } from '@playwright/test';
import { HomePage } from '../PagesDS/homePage';
import { SearchPage } from '../PagesDS/searchpage';
import searchData from '../searchData.json';
import { AboutUsPage } from '../PagesDS/aboutUsPage';
import { LoginPage } from '../PagesDS/loginPage';


for (const searchTextValid of searchData.searchTextValid) {
    test('Verify search functionality with valid search text: ' + searchTextValid, async ({ page }) => {

        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page, searchTextValid);
        const searchTextValidText = page.getByText(searchTextValid, { exact: true });

        await homePage.navigateToHomePage();
        await homePage.searchField(searchTextValid);

        await expect(searchPage.searchResultsTitle).toBeVisible({ timeout: 5000 });
        await expect(searchPage.searchResultsDescriptionValid).toBeVisible({ timeout: 5000 });
        await expect(searchTextValidText).toBeVisible({ timeout: 5000 });
        console.log('Search functionality with valid search text: ' + searchTextValid + ' is working as expected');
    })
}

for (const searchTextInvalid of searchData.searchTextInvalid) {
    test('Verify search functionality with invalid search: ' + searchTextInvalid, async ({ page }) => {

        const homePage = new HomePage(page);
        const searchPage = new SearchPage(page, searchTextInvalid);
        const searchTextInvalidText = page.getByText(searchTextInvalid, { exact: true });
        await homePage.navigateToHomePage();
        await homePage.searchField(searchTextInvalid);

        await expect(searchPage.searchResultsTitle).toBeVisible({ timeout: 5000 });
        await expect(searchPage.searchResultsDescriptionInvalid).toBeVisible({ timeout: 5000 });
        await expect(searchTextInvalidText).toBeVisible({ timeout: 5000 });
    })
}
test.describe('other search options verification', () => {
    test.fail('Verify search functionality using the search option in the header', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.searchOptionMethod();

        await expect(page).toHaveURL(/search/, { timeout: 5000 });
        await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible({ timeout: 5000 });
        await expect(page.getByText(`Showing results for `)).toBeVisible({ timeout: 5000 });
    })
    test.fail('Verify search functionality using the search link 1 option in the footer', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.searchButton1.click();

        await expect(page).toHaveURL(/search/, { timeout: 5000 });
        await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible({ timeout: 5000 });
        await expect(page.getByText(`Showing results for `)).toBeVisible({ timeout: 5000 });

    })
    test.fail('Verify search functionality using the search link 2 option in the footer', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        await homePage.searchButton2.click();

        await expect(page).toHaveURL(/search/, { timeout: 5000 });
        await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible({ timeout: 5000 });
        await expect(page.getByText(`Showing results for `)).toBeVisible({ timeout: 5000 });
    })

})
test('Verify about us page', async ({ page }) => {
    const homePage = new HomePage(page);
    const aboutUsPage = new AboutUsPage(page);
    await homePage.navigateToHomePage();

    //To Verify AboutUs link in the header
    await homePage.HomePageHeader.click();
    await homePage.aboutUsLink.click();

    await expect(aboutUsPage.aboutUsTitle).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText1).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText3).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText4).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsTitle2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText12).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText22).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText32).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText42).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink2).toBeVisible({ timeout: 5000 });

    //To Verify AboutUs link 2 in the RHS menu
    await homePage.HomePageHeader.click();
    await homePage.aboutUsLink2.click();

    await expect(aboutUsPage.aboutUsTitle).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText1).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText3).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText4).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsTitle2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText12).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText22).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText32).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText42).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink2).toBeVisible({ timeout: 5000 });

    //To Verify AboutUs link 1 in the footer
    await homePage.HomePageHeader.click();
    await homePage.aboutUsButton1.click();

    await expect(aboutUsPage.aboutUsTitle).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText1).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText3).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText4).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsTitle2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText12).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText22).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText32).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText42).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink2).toBeVisible({ timeout: 5000 });

    //To Verify AboutUs link 2 in the footer
    await homePage.HomePageHeader.click();
    await homePage.aboutUsButton2.click();

    await expect(aboutUsPage.aboutUsTitle).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText1).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText3).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText4).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsTitle2).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText12).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText22).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText32).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionText42).toBeVisible({ timeout: 5000 });
    await expect(aboutUsPage.aboutUsDescriptionlink2).toBeVisible({ timeout: 5000 });

})

test('Verify login Page elements', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await homePage.navigateToHomePage();
    await homePage.loginLink.click();

    await expect(loginPage.loginPageHeader).toBeVisible();
    await expect(loginPage.emailLabel).toBeVisible();
    await expect(loginPage.emailField).toBeEnabled();
    await expect(loginPage.passwordlabel).toBeVisible();
    await expect(loginPage.emailField).toBeEnabled();
    await expect(loginPage.forgotPassLink).toBeAttached();
    await expect(loginPage.signInBtn).toBeVisible();
})