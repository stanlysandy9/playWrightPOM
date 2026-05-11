import {expect, test} from '@playwright/test'

test.use({storageState:'Noauth.json'});

test('Verify file upload/s',async ({page})=>
{
    //single file upload with element having input html tag
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('demoSauceProject/uploadTestfiles/uploadFile001.pdf');
    await page.locator('#file-upload').setInputFiles([]);
    await page.locator('#file-upload').setInputFiles('demoSauceProject/uploadTestfiles/uploadFile002.pdf');
    await page.locator('#file-submit').click();
    
    await expect(page.getByText('uploadFile001.pdf')).not.toBeVisible();
    await expect(page.getByText('uploadFile002.pdf')).toBeVisible();
    await page.context().clearCookies();

    await page.goto('https://the-internet.herokuapp.com/upload');
   const fileChooserPromise=  page.waitForEvent('filechooser');

    await page.locator('#drag-drop-upload').click();
    const fileChooserResolved =await fileChooserPromise;
    await fileChooserResolved.setFiles('demoSauceProject/uploadTestfiles/uploadFile001.pdf');
    await expect(page.getByText('uploadFile001.pdf')).toBeVisible();

})
