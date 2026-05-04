import {test as baseTest} from '@playwright/test';


type MyFixtures ={
    LoginFixture:string;
    
}

export const test=baseTest.extend<MyFixtures>({
    LoginFixture: async ({}, use)=>{ 

        const loginFixture= "test fixture";
        console.log('before fixture');
        await use(loginFixture);
        console.log ('after fixture');
         
    },

    });
    export const expect = test.expect;




