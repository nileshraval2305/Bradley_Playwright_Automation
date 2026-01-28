import { Locator, Page } from "@playwright/test";

export default class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }
   async isElementVisible(element: Locator) {
        
        await element.isVisible();
    }
    
    async clickElement(element: Locator) {
        
        await element.click();
    }


     async checkRadioButtonElement(element: Locator) {
        await element.check();
    }
   
    async fillFormField(element: Locator, value: string) {
        await element.fill(''); // Clear existing text
        await element.click(); // Focus the element
        await element.focus();
        await element.type(value, { delay: 20 });
    }

    
    async getElementText(element: Locator): Promise<string> {
        return element.innerText();
    }

   
    async waitForElementVisible(element: Locator | string) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'visible' });
        } else {
            await element.waitFor({ state: 'visible' });
        }
    }

    
    async waitForElementHidden(element: Locator) {
        if (typeof element === 'string') {
            await this.page.waitForSelector(element, { state: 'hidden' });
        } else {
            await element.waitFor({ state: 'hidden' });
        }
    }

    async takeScreenshot(fileName: string) {
        await this.page.screenshot({ path: fileName });
    }
    
    
  async waitforElementEnabled(element: Locator) {
    await element.isEnabled();
  }

}