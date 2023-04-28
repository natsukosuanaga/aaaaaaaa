import { test, expect } from "@playwright/test";

test("example test", async ({ page }) => {
  await page.goto("https://connpass.com/event/279324/");
  await expect(page).toHaveScreenshot({fullPage: true, scale: 'device', animations: 'disabled'});
});