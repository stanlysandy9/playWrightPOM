import { Locator, Page } from "@playwright/test";



export class RhsMenu {
    readonly page: Page;
    readonly rhsMenuExpandIcon: Locator;
    readonly rhsMenuCollapseIcon: Locator;
    readonly searchFld: Locator;
    readonly adminMenuItm: Locator;
    readonly pimMenuItm: Locator;
    readonly leaveMenuItm: Locator;
    readonly timeMenuItm: Locator;
    readonly recruitmentMenuItm: Locator;
    readonly myInfoMenuItm: Locator;
    readonly performanceMenuItm: Locator;
    readonly dashboardMenuItm: Locator;
    readonly directoryMenuItm: Locator;
    readonly maintenenceMenuItm: Locator;
    readonly claimMenuItem: Locator;
    readonly buzzMenuItem: Locator;



    constructor(page: Page) {
        this.page = page;

        this.rhsMenuCollapseIcon = page.locator('.oxd-icon.bi-chevron-left'); //oxd-icon bi-chevron-left
        this.rhsMenuExpandIcon = page.locator('i.oxd-icon.bi-chevron-right');
        this.searchFld = page.getByPlaceholder('Search');
        this.adminMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Admin');
        this.pimMenuItm = page.locator('.oxd-main-menu-item--name').getByText('PIM');
        this.leaveMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Leave');
        this.timeMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Time');
        this.recruitmentMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Recruitment');
        this.myInfoMenuItm = page.locator('.oxd-main-menu-item--name').getByText('My Info');
        this.performanceMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Performance');
        this.dashboardMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Dashboard');
        this.directoryMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Directory');
        this.maintenenceMenuItm = page.locator('.oxd-main-menu-item--name').getByText('Maintenance');
        this.claimMenuItem = page.locator('.oxd-main-menu-item--name').getByText('Claim');
        this.buzzMenuItem = page.locator('.oxd-main-menu-item--name').getByText('Buzz');

    }
    


}