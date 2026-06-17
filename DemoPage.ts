
import { chromium } from 'playwright';

async function run() {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate to Wikipedia and search for "TypeScript"
    await page.goto('https://www.wikipedia.org/');
    await page.fill('input[name="search"]', 'TypeScript');
    await page.keyboard.press('Enter');

    // Wait for the article heading and grab some content
    await page.waitForSelector('#firstHeading');
    const title = (await page.textContent('#firstHeading')) || '';
    const firstPara = (await page.textContent('p')) || '';

    console.log('Article title:', title.trim());
    console.log('First paragraph (truncated):', firstPara.trim().slice(0, 500));

    // Save a screenshot to the workspace
    await page.screenshot({ path: 'wikipedia-typescript.png', fullPage: true });

    await browser.close();
}

run().catch(err => {
    console.error('Script failed:', err);
    process.exit(1);
});

// This script uses Playwright to automate a browser, navigate to Wikipedia, search for "TypeScript", and extract the article title and first paragraph. It also saves a screenshot of the article page.git