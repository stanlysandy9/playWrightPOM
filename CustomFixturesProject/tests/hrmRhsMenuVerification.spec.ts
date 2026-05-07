import { test } from '../fixtures/hrmLoginPageFixtures'
import { HrmLoginPage } from '../pages/HrmLoginPage'
import { RhsMenu } from '../pages/RhsMenu';
import {expect} from '@playwright/test'

test('RHS menu Verification', async ({ page, loginFixture }) => {
    const hrmLoginPage = new HrmLoginPage(page);
    const hrmRhsMenu = new RhsMenu(page);

    //Login to Application 
    await loginFixture.loginBtn.click();

    //Verification of RHS menu expand and collapse functionality)
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

    console.log("search is working as expected for")
    




})