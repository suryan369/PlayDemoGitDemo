import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ArticlePage extends BasePage {
    readonly heading = '#firstHeading';
    readonly firstParagraph = '#mw-content-text .mw-parser-output > p:not(.mw-empty-elt)';

    constructor(page: Page) {
        super(page);
    }

    async getTitle() {
        return (await this.page.textContent(this.heading)) || '';
    }

    async getFirstParagraph() {
        await this.page.waitForSelector(this.firstParagraph, { state: 'visible' });
        return (await this.page.textContent(this.firstParagraph)) || '';
    }
}
