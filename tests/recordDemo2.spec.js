const { test, chromium } = require("@playwright/test")

test('Verify record demo with target js and save to existing file', async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="reset-sidebar-link"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // ---------------------
  await context.close();
  await browser.close();
});