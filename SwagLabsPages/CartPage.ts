import { Page,Locator } from "@playwright/test";


export class CartPage{
    readonly price:Locator;
        readonly addToCart: Locator;
        readonly page:Page;
        readonly remove:Locator;


    constructor(page:Page){

        this.page=page;
        this.price=page.locator('[data-test= "inventory-item-price"]');
        this.addToCart=page.getByRole('button', {name: 'Add to cart'});
        this.remove=page.getByText('Remove');
     
    }


}