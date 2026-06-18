import { test, expect } from '../fixtures/fixtures';

test('search TypeScript on Wikipedia', async ({ homePage, articlePage }) => {
    await homePage.goto('https://en.wikipedia.org/');
    await homePage.search('TypeScript');

    await articlePage.page.waitForSelector(articlePage.heading);
    const title = (await articlePage.getTitle()).trim();
    const para = (await articlePage.getFirstParagraph()).trim();

    expect(title).toContain('TypeScript');
    expect(para.length).toBeGreaterThan(20);

    await articlePage.screenshot('tests-output/wikipedia-typescript.png');
});
//small changes