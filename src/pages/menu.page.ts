import { expect, Page } from "@playwright/test";

export default class MenuPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private restaurantLogo = () => this.page.locator("img[alt='Restaurant Logo']");

    // Action
    public async goToMenuPage() {
        await this.page.goto('https://demo-restaurant.smap.ph/?table=1');
    }

    // Assertions
    public async isRestaurantLogoVisible() {
        await expect(this.restaurantLogo()).toBeVisible();
    }
}