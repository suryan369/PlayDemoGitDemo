Playwright TypeScript demo with POM & fixtures

Structure added:

- tests/pages: Page Object Model classes (`BasePage`, `HomePage`, `ArticlePage`)
- tests/fixtures: Playwright Test fixtures wrapper
- tests/e2e: example E2E test `wikipedia.spec.ts`
- playwright.config.ts: Playwright Test configuration

Quick start

1. Install dependencies:

```bash
npm install
```

2. Download Playwright browsers:

```bash
npx playwright install
```

3. Run tests:

```bash
npm test
```

Test output and screenshot will be under `tests-output/` when the test runs.
