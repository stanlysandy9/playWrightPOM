import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../SwagLabsPages/LoginPage";
import loginData from '../SwagLabsTestData/Logindata.json'

type Hooks={

loginHook: LoginPage
}

export const test= baseTest.extend<Hooks>({
    loginHook: async ({page}, use)=>{
  const   loginHook= new LoginPage(page);
 await page.goto(process.env.SWAGLABTESTURL!)
    await loginHook.userIdField.fill(loginData.UserId);
    await loginHook.passwordField.fill(loginData.Password);
    await loginHook.loginBtn.click();

    await use(loginHook);

    }



}) ;
