import { verify } from 'node:crypto';
import { test } from '../fixtures/hrmLoginPageFixtures'
import { constTest } from '../fixtures/hrmConstFixtures'
import { HrmLoginPage } from '../pages/HrmLoginPage'
import { HrmPageMainHeader } from '../pages/HrmPageMainHeader';
import { RhsMenu } from '../pages/RhsMenu';
import { expect } from '@playwright/test'
import { LoginPage } from '../../SwagLabsProject/SwagLabsPages/LoginPage';
import { get } from 'node:http';



test('RHS menu Verification', async ({ page }) => {
    const hrmLoginPage = new HrmLoginPage(page);
    const hrmRhsMenu = new RhsMenu(page);

    //Login to Application 
    // await loginFixture.loginBtn.click();

    //Verification of RHS menu expand and collapse functionality)
    await hrmLoginPage.navigateToHomePage();
    await page.reload();
    await page.waitForTimeout(10000)
    await expect(hrmRhsMenu.rhsMenuExpandIcon).not.toBeVisible();
    await hrmRhsMenu.rhsMenuCollapseIcon.click();
    await expect(hrmRhsMenu.adminMenuItm).not.toBeVisible()
    await hrmRhsMenu.rhsMenuExpandIcon.click();
    await expect(hrmRhsMenu.adminMenuItm).toBeVisible()
    await hrmRhsMenu.rhsMenuCollapseIcon.click();
    await expect(hrmRhsMenu.rhsMenuCollapseIcon).not.toBeVisible();
    await hrmRhsMenu.rhsMenuExpandIcon.click();

    //Verification of search field functionality
    //using single letter R (uppercase)
    await hrmRhsMenu.searchFld.fill('R');
    await page.waitForTimeout(2000);
    await expect(hrmRhsMenu.adminMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.pimMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.leaveMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.timeMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.recruitmentMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.myInfoMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.performanceMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.dashboardMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.directoryMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.claimMenuItem).not.toBeVisible();
    await expect(hrmRhsMenu.buzzMenuItem).not.toBeVisible();

    //clearing the previously entered text
    await hrmRhsMenu.searchFld.clear();

    //using single letter R (lowercase)
    await hrmRhsMenu.searchFld.fill('r');
    await page.waitForTimeout(2000);
    await expect(hrmRhsMenu.adminMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.pimMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.leaveMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.timeMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.recruitmentMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.myInfoMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.performanceMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.dashboardMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.directoryMenuItm).toBeVisible();//search Result expected
    await expect(hrmRhsMenu.claimMenuItem).not.toBeVisible();
    await expect(hrmRhsMenu.buzzMenuItem).not.toBeVisible();

    //Verify search with invalid search keyword
    await hrmRhsMenu.searchFld.clear();

    //using single letter R (lowercase)
    await hrmRhsMenu.searchFld.fill('Customer Page');
    await page.waitForTimeout(2000);
    //expected: No menu suggesions should be displayed
    await expect(hrmRhsMenu.adminMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.pimMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.leaveMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.timeMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.recruitmentMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.myInfoMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.performanceMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.dashboardMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.directoryMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.claimMenuItem).not.toBeVisible();
    await expect(hrmRhsMenu.buzzMenuItem).not.toBeVisible();

    await hrmRhsMenu.searchFld.clear();

    //using valid search keyword
    await hrmRhsMenu.searchFld.fill('Dashboard');
    await page.waitForTimeout(2000);
    //expected: only Dashboard should be suggested
    await expect(hrmRhsMenu.adminMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.pimMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.leaveMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.timeMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.recruitmentMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.myInfoMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.performanceMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.dashboardMenuItm).toBeVisible(); //should display
    await expect(hrmRhsMenu.directoryMenuItm).not.toBeVisible();
    await expect(hrmRhsMenu.claimMenuItem).not.toBeVisible();
    await expect(hrmRhsMenu.buzzMenuItem).not.toBeVisible();
    //clear search field
    await hrmRhsMenu.searchFld.clear();

})
test('Verify RHS menu actions', async ({ page }) => {


    const hrmLoginPage = new HrmLoginPage(page);

    await hrmLoginPage.navigateToHomePage();

})
/* This is to verify if the application is allowing to navigate to respective pages when clicking on 
 RHS menu actions */
constTest('verify rhs menu list navigation', async ({ page, rhsMenu, hrmLoginPage, hrmPageMainHeaders }) => {

    await hrmLoginPage.navigateToHomePage();
    await rhsMenu.adminMenuItm.click();
    await expect(hrmPageMainHeaders.adminPageHdr).toBeVisible();
    await rhsMenu.pimMenuItm.click();
    await expect(hrmPageMainHeaders.pimPageHdr).toBeVisible();
    await rhsMenu.leaveMenuItm.click();
    await expect(hrmPageMainHeaders.leavePageHdr).toBeVisible();
    await rhsMenu.recruitmentMenuItm.click();
    await expect(hrmPageMainHeaders.recruitmentPageHdr).toBeVisible();
    await rhsMenu.performanceMenuItm.click();
    await expect(hrmPageMainHeaders.performancePageHdr).toBeVisible();
    await rhsMenu.dashboardMenuItm.click();
    await expect(hrmPageMainHeaders.dashBoardPageHdr).toBeVisible();
    await rhsMenu.maintenenceMenuItm.click();
    await expect(page).toHaveURL(/maintenance/)
    await expect(hrmPageMainHeaders.maintenancepageHdr).not.toBeVisible();
    await page.goBack();
    await rhsMenu.claimMenuItem.click();
    await expect(hrmPageMainHeaders.claimPageHdr).toBeVisible();
    await rhsMenu.buzzMenuItem.click();
    await expect(hrmPageMainHeaders.buzzPageHdr).toBeVisible();

})
