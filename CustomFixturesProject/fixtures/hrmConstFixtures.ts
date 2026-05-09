import { HrmPageMainHeader } from "../pages/HrmPageMainHeader"
import { RhsMenu } from "../pages/RhsMenu";
import { HrmHomePage } from '../pages/HrmHomePage'
import { test as base } from '@playwright/test'
import { HrmLoginPage } from "../pages/HrmLoginPage";



type Myfixtures = {

    hrmPageMainHeaders: HrmPageMainHeader;
    rhsMenu: RhsMenu;
    hrmHomePage: HrmHomePage;
    hrmLoginPage: HrmLoginPage;

};
export const constTest = base.extend<Myfixtures>({

    hrmPageMainHeaders: async ({ page }, use) => {

        await use(new HrmPageMainHeader(page));

    },
    rhsMenu: async ({ page }, use) => {

        await use(new RhsMenu(page));
    },
    hrmHomePage: async ({ page }, use) => {

        await use(new HrmHomePage(page))
    },

    hrmLoginPage: async ({ page }, use) => {

        await use(new HrmLoginPage(page));
    }

});
