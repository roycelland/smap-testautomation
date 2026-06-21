import {test } from "../utility/basePage";

test.describe("Order Page Test", () => {
    test("Verify that user can add items to the cart", async ({ menuPage }) => {
        await menuPage.goToMenuPage();
    });
});