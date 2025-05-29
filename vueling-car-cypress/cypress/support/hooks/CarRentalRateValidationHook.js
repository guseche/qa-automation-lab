const { chromium, devices } = require('playwright');


const searchCarRentalRate = async (info) => {

    const browser = await chromium.launch();
    const context = await browser.newContext(devices['Desktop Chrome']);
    const page = await context.newPage();

    // process
    // await page.goto(constants.URLS.BASE);
    await page.getByRole('listbox', { name: 'Pick-up location' }).click();
    await page.getByRole('listbox', { name: 'Pick-up location' }).fill('Barcelona');
    await page.locator('#item-0-0').click();
    await page.getByRole('textbox', { name: 'Start date' }).click();
    await page.getByText('27').first().click();
    await page.locator('#ct-pickup-timers').getByText('09:30').click();
    await page.getByRole('textbox', { name: 'End date' }).click();
    await page.getByText('29').nth(1).click();
    await page.locator('#ct-return-timers').getByText('22:30').click();
    await page.getByRole('button', { name: 'search' }).click();

    // Wait for the URL to contain 'book'
    await page.waitForURL('**/book*');
    await page.getByText('Confirmation').isVisible();

    await context.close();
    await browser.close();

    return 'hello';

}

module.exports = { searchCarRentalRate };