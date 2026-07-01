import { test } from "../utility/basePage";

test.describe("Order Page Test", () => {
    test("Verify that user can access the menu page", async ({ menuPage }) => {
        await menuPage.goToMenuPage();
        await menuPage.isRestaurantLogoVisible();
    });

    test("verify that user can add items to cart and the cart bar updates accordingly", async ({ menuPage }) => {
        await menuPage.goToMenuPage();
        const totalItems = await menuPage.getTotalItemsInMenu();
        const { name, price, quantity } = await menuPage.addRandomItemToCart(totalItems);
        console.log(`Added item to cart: ${name}, Price: ${price}, Quantity: ${quantity}`);
        await menuPage.cartBarCountShouldBe(quantity!);
        await menuPage.cartBarTotalShouldBe(price!);
    });
});