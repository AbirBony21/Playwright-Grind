// const { test, expect, chromium } = require("@playwright/test")

// test('Slow Motion and Video Recording Demo', async () => {

//     // Launch Browser
//     const browser = await chromium.launch({
//         slowMo: 500,
//         headless: true
//     })

//     // Create a new incognito browser context
//     const context = await browser.newContext({
//         recordVideo: {
//             dir: 'videos/',
//             size: {width: 800, height: 600}
//         }
//     })

//     // Create a new page inside context
//     const page = await context.newPage()
//     await page.goto('https://admin-demo.nopcommerce.com/login')
//     await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com')
//     await page.getByRole('textbox', { name: 'Password:' }).fill('admin')
//     await page.getByRole('button', { name: 'Log in' }).click()
//     await page.getByRole('link', { name: 'Logout' }).click()

//     // Dispose context once it's no longer needed
//     await context.close()
//     await browser.close();
    
// });