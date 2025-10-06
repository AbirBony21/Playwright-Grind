const { test, expect } = require("@playwright/test")

// Annotations
test.skip('Skip this test', async ({ page }) => {

})

test('Not yet ready', async ({ page }) => {
    // page.goto('https://www.google.com')
    test.fail()
})

test.fixme('Test to be fixed', async ({ page }) => {
    // ...
})

test('Slow Test', async ({ page }) => {
    // test.slow()
    // ...
})

test('Only this test', async ({ page }) => {
    await page.goto('https://www.google.com')
})

test('skip this test for condition', async ({ page, browserName }) => {
    // test.skip(browserName == 'chromium', 'Still working on it');
})

// Tags
test('Test login page @smoke', async ({ page }) => {
    // ...
})