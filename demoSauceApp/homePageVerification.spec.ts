import { test, expect } from '@playwright/test';
import { HomePage } from '../PagesDS/homePage';
import { SearchPage } from '../PagesDS/searchpage';       
import searchData from '../searchData.json';  




for (const searchTextValid of searchData.searchTextValid){
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

for (const searchTextInvalid of searchData.searchTextInvalid){
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

test('Verify search functionality using the search option in the header', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.searchOptionMethod();
    
    await expect(page).toHaveURL(/search/, { timeout: 5000 });
    await expect(page.getByRole('heading', { name: 'Search Results' })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText(`Showing results for `)).toBeVisible({ timeout: 5000 });
})
