import { Expect } from "@playwright/test";
import { test } from "../fixtures/fixture";

test("Extract Data as Low,high,last and weight avg Data as CSV in  Market Results Page Test", async ({ marketResultsPage, basePage, page }) => {


    await test.step('Navigate to Market Results Page', async () => {
        await marketResultsPage.navigateToMarketResultsPage();
    })

    await test.step('Click Allow all cookies from Market Results Page', async () => {
        await marketResultsPage.clickAllowAllCookies();
    })
    await test.step('select Trading modality continous option from Market Results Page', async () => {
        await marketResultsPage.selectTradingModalityContinous();


    })

   await test.step('select Filter product from Market Results Page', async () => {

        await marketResultsPage.selectFilterProduct();
    })

    await test.step('select Tabel view from Market Results Page', async () => {
        await marketResultsPage.isDeliveryDateEnabled();
        await marketResultsPage.deliveryDateDropdownclick();
        await marketResultsPage.selectDeliveryDate();
        await marketResultsPage.waitforTableviewEnabled();
        await marketResultsPage.selectTableView();

    })

 
    await test.step('select Market Area from Market Results Page', async () => {
        await marketResultsPage.selectMarketArea();
    })

 await test.step('Export Data from Market Results Page', async () => {
        await marketResultsPage.exportMarketTableToCSV();
    })



})