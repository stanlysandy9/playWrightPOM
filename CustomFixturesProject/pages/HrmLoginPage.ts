import { Locator, Page } from "@playwright/test";
import 'dotenv/config';
import hrmLoginData from '../testData/loginData.json'



export class HrmLoginPage{
    readonly page:Page
    readonly companyLogo:Locator;
    readonly userIdFld:Locator;
    readonly PasswordFld: Locator;
    readonly loginBtn:Locator;

constructor (page:Page){
    this.page=page;
    this.companyLogo=page.getByAltText('company-branding');
    this.userIdFld=page.getByPlaceholder('Username');
    this.PasswordFld=page.getByPlaceholder('Password');
    this.loginBtn=page.getByRole('button', {name:'Login'});

}

    async navigateToHomePage(){

        await this.page.goto(process.env.HRMLOGINPAGE!)

    }

    async fillLoginCredentials(){

        await this.userIdFld.fill(hrmLoginData.validUserId);
        await this.PasswordFld.fill(hrmLoginData.validPassword);
        

    }

}