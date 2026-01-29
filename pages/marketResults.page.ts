import { Locator, Page } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import BasePage from "./base.page";
import testData from "../testdata/testdata.json";
export default class MarketResultsPage extends BasePage {
    private readonly tradingModalityContinous: Locator
    private readonly filterProduct: Locator
    private readonly tableView: Locator
    private readonly marketArea: Locator
    private readonly allowAllCookies: Locator
    private readonly deliveryDate: Locator
    private readonly selectPreviousDate: Locator




    constructor(page: Page) {

        super(page);
        this.tradingModalityContinous = page.locator('//input[@value="Continuous"]');
        this.filterProduct = page.getByLabel('30 min');
        this.tableView = page.locator("//label[normalize-space()='Table']");
        this.marketArea = page.getByLabel('GB');
        this.allowAllCookies = page.locator('//button[text()="Allow all cookies"]');
        this.deliveryDate = page.locator('[name="filters[delivery_date]"]');
        this.selectPreviousDate = page.locator('//tr//td//a[@class="ui-state-default ui-state-active"]');


    }


    async navigateToMarketResultsPage() {
        await this.navigateTo(testData.MarketResultsURL);
    }

    async selectTradingModalityContinous() {
        await this.clickElement(this.tradingModalityContinous);
    }

    async selectFilterProduct() {
        await this.waitForElementVisible(this.filterProduct);
        await this.clickElement(this.filterProduct);
    }


    async selectTableView(): Promise<void> {
        await this.isElementVisible(this.tableView);
        await this.page.waitForTimeout(2000);
        await this.clickElement(this.tableView);
        await this.clickElement(this.tableView);
    }
    async selectMarketArea(): Promise<void> {
        await this.clickElement(this.marketArea);
    }
    async clickAllowAllCookies(): Promise<void> {
        await this.clickElement(this.allowAllCookies);
    }

    async isDeliveryDateEnabled(): Promise<void> {
        await this.waitForElementVisible(this.deliveryDate);
    }

    async deliveryDateDropdownclick(): Promise<void> {
        await this.clickElement(this.deliveryDate);
    }
    async waitforTableviewEnabled(): Promise<void> {
        await this.waitForElementVisible(this.tableView);
    }

    async selectDeliveryDate(): Promise<void> {
        await this.clickElement(this.selectPreviousDate);
    }



    async exportMarketTableToCSV() {

        await this.page.waitForSelector('table.table-01 tbody tr');


        await this.page.waitForFunction(() => {
            const cell = document.querySelector('table.table-01 tbody tr td');
            return cell && cell.textContent !== '0.00';
        });


        const rows = await this.page.evaluate(() => {
            return Array.from(
                document.querySelectorAll('table.table-01 tbody tr')
            ).map(row => {
                const cells = row.querySelectorAll('td');
                return [
                    cells[0]?.textContent?.trim(), // Low
                    cells[1]?.textContent?.trim(), // High
                    cells[2]?.textContent?.trim(), // Last
                    cells[3]?.textContent?.trim()  // Weight Avg
                ];
            });
        });

        const header = 'Low,High,Last,Weight Avg\n';
        const csvBody = rows.map(r => r.join(',')).join('\n');
        const csvContent = header + csvBody;


        const outputDir = path.join(process.cwd(), 'testdata');
        const filePath = path.join(outputDir, 'market-data.csv');


        fs.mkdirSync(outputDir, { recursive: true });


        fs.writeFileSync(filePath, csvContent);


    }


}