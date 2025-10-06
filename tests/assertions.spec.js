const { test, expect } = require("@playwright/test")

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')
    // await page.pause()
    
    // Assertions
    // Check element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if(await page.$('text=The Kitchen')){
        await page.getByRole('heading', { name: 'The Kitchen' }).click()
    }

    // Check element is visible or hidden
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // Check element to be enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // Check element matches text or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    await page.pause()
    // Check element's attributes, match-partialmatch
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('chakra-heading css-dpmy2a')

    // Check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    // Visual validation with screenshot
    await expect(page).toHaveScreenshot()


});