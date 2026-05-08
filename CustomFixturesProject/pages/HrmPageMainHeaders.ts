import { Locator, Page } from "@playwright/test";



export class HrmPageMainHeader {

    readonly page: Page;
    readonly adminPageHdr: Locator;
    readonly pimPageHdr: Locator;
    readonly leavePageHdr: Locator;
    readonly TimePageHdr: Locator;
    readonly recruitmentPageHdr: Locator
    readonly myInfoPageHdr: Locator;
    readonly performancePageHdr: Locator;
    readonly dashBoardPageHdr: Locator;
    readonly directoryPageHdr: Locator;
    readonly maintenancepageHdr: Locator;
    readonly claimPageHdr: Locator;
    readonly buzzPageHdr: Locator;



    constructor(page: Page) {
        this.page = page;
        this.adminPageHdr=page.getByRole('heading',{name:'User Management'})
        this.pimPageHdr=page.getByRole('heading',{name:'PIM'})
        this.leavePageHdr=page.getByRole('heading',{name:'Leave'})
        this.TimePageHdr=page.getByRole('heading',{name:'Timesheets'})
        this.recruitmentPageHdr=page.getByRole('heading',{name:'Recruitment'})
        this.myInfoPageHdr=page.getByRole('heading',{name:'PIM'})
        this.performancePageHdr=page.getByRole('heading',{name:'Manage Reviews'})
        this.dashBoardPageHdr=page.getByRole('heading',{name:'Dashboard'})
        this.directoryPageHdr=page.getByRole('heading',{name:'Directory'})
        this.maintenancepageHdr=page.getByRole('heading',{name:'Maintenance'})
        this.claimPageHdr=page.getByRole('heading',{name:'Claim'})
        this.buzzPageHdr=page.getByRole('heading',{name:'Buzz'})





    }



}