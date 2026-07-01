import { expect, Page } from "@playwright/test";

export default class MenuPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    private restaurantLogo = () => this.page.getByRole('img', { name: 'Demo Restaurant' });
    private menuItems = () => this.page.getByRole('listitem');

    private addQuantity = () => this.menuItems().getByLabel('Add to cart');
    private decreaseQuantity = () => this.menuItems().getByLabel('Decrease quantity');

    private cartBarCount = () => this.page.locator('#cart-bar-count');
    private cartBarTotal = () => this.page.locator('#cart-bar-total');

    
    // Action
    public async goToMenuPage() {
        await this.page.goto('https://demo-restaurant.smap.ph/?table=1');
    }

    public async getTotalItemsInMenu() {
        return await this.addQuantity().count();
    }

    public async addRandomItemToCart(totalItems: number){
            let randomIndex: string | number;
            randomIndex = Math.floor(Math.random() * (totalItems -2)) + 1;
            await this.addQuantity().nth(randomIndex).click();
            const itemName = await this.menuItems().nth(randomIndex).locator('span').nth(0).textContent(); //ITEM NAME
            const itemPrice = await this.menuItems().nth(randomIndex).locator('span').nth(1).textContent(); //ITEM PRICE
            const itemQuantity = await this.menuItems().nth(randomIndex).locator('span').nth(2).textContent(); //ITEM QUANTITY
            return { name: itemName?.trim(), price: itemPrice?.slice(1), quantity: itemQuantity?.trim() };
    }

    // Assertions
    public async isRestaurantLogoVisible() {
        await expect(this.restaurantLogo()).toBeVisible();
    }

    public async cartBarCountShouldBe(expectedCount: number) {
        await expect(this.cartBarCount()).toHaveText(expectedCount.toString());
    }

    public async cartBarTotalShouldBe(expectedTotal: number) {
        await expect(this.cartBarTotal()).toHaveText(expectedTotal.toString());
    }
}