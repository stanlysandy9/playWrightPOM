import { Page, Locator } from "@playwright/test";
import searchData from '../demoSauceTestData/searchData.json'; 


export class SearchPage {

    readonly page: Page;

    //Search page locators
    readonly searchResultsTitle: Locator;
    readonly searchResultsDescriptionValid: Locator;
    readonly searchResultsDescriptionInvalid: Locator;
    //readonly searchText: string;
    
    constructor(page:Page, searchText: string) {
        this.page = page;
        //this.searchText = searchText;
        this.searchResultsTitle = page.getByRole('heading', { name: 'Search Results' });
        this.searchResultsDescriptionValid = page.getByText(`Showing results for `);
        this.searchResultsDescriptionInvalid = page.getByText(`No results found for`);

    }
      /*/ 
        searchResultsDescription(searchText: string): Locator 
        { return this.page.getByText(`Showing results for '${searchText}'`);
    }
        /*/

}

