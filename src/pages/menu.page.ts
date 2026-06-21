import { Page } from "@playwright/test";

export default class MenuPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Action
    public async goToMenuPage() {
        await this.page.goto("https://demo-restaurant.smap.ph/?table=1");
    }
}