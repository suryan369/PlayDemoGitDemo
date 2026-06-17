import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly searchInput = 'input[name="search"]';

    constructor(page: Page) {
        super(page);
    }

    async search(term: string) {
        await this.page.fill(this.searchInput, term);
        await this.page.keyboard.press('Enter');
    }
}
