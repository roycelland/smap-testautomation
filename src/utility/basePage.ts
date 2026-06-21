import {test as base} from "@playwright/test";
import MenuPage from "../pages/menu.page";

export const test = base.extend<{
    menuPage: MenuPage;
    
}>({
    menuPage: async ({ page }, use) => {
        await use(new MenuPage(page));
    }
});