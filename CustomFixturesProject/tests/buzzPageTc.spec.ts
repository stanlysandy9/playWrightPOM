import {  constTest } from "../fixtures/hrmConstFixtures";
import {expect} from '@playwright/test'



constTest('Verify post functionlity: only text',async ({page,hrmBuzzPage,hrmLoginPage,rhsMenu})=>{

await hrmLoginPage.navigateToHomePage();
await rhsMenu.buzzMenuItem.click();
await hrmBuzzPage.postTextField.fill('QA Test Post');
await hrmBuzzPage.postBtn.click();
await page.reload();
await expect(page.getByText('QA Test Post')).toBeVisible({timeout: 15000});
await page.reload();
await expect(page.locator('.orangehrm-buzz-post-body').nth(1)).toContainText('QA Test Post');
await hrmBuzzPage.deletePost();
await expect(page.locator('.orangehrm-buzz-post-body').nth(1)).not.toContainText('QA Test Post');

})