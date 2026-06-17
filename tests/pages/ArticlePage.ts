import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ArticlePage extends BasePage {
    readonly heading = '#firstHeading';
    readonly firstParagraph = 'p';

    constructor(page: Page) {
        super(page);
    }

    async getTitle() {
        return (await this.page.textContent(this.heading)) || '';
    }

    async getFirstParagraph() {
        return (await this.page.textContent(this.firstParagraph)) || '';
    }
}
