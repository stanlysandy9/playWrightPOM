import { Locator, Page } from "@playwright/test";


export class HrmBuzzPage {
    readonly page : Page;
    readonly postTextField: Locator;
    readonly sharePhotoBtm:Locator;
    readonly uploadPhotos:Locator;
    readonly shareBtmInUploadpopup:Locator;
    readonly postBtn:Locator;
    readonly postMenu:Locator;
    readonly postMenudeleteopt:Locator;
    readonly postDeleteBtn:Locator;


    constructor (page:Page){
        this.page= page
        this.postTextField = page.getByPlaceholder("What's on your mind?");
        this.sharePhotoBtm=page.getByRole('button',{name:'Share Photos' } );
        this.uploadPhotos= page.getByText('Add Photos');
        this.shareBtmInUploadpopup=page.getByText(' Share ');
        this.postBtn=page.getByRole('button',{name: ' Post ', exact: true});
        this.postMenu=page.locator('button.oxd-icon-button').nth(2);
        this.postMenudeleteopt=page.getByText('Delete Post', { exact: true });
        this.postDeleteBtn=page.getByRole('button', {name: ' Yes, Delete '});
    }
   async deletePost(){
    await this.postMenu.click();
    await this.postMenudeleteopt.click();
    await this.postDeleteBtn.click();
    
    }

}