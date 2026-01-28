import { test as base } from '@playwright/test';
import MarketResultsPage from '../pages/marketResults.page';
import BasePage from '../pages/base.page';



type myfixtures = {
    marketResultsPage: MarketResultsPage;
    basePage: BasePage;
};

export const test = base.extend<myfixtures>({
    marketResultsPage: async ({ page }, use) => {
        const marketResultsPage = new MarketResultsPage(page);
        await use(marketResultsPage);
    },
    basePage: async ({ page }, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
});