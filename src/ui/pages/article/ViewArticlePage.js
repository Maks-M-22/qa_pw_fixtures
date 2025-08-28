import { test, expect } from '@playwright/test';

export class ViewArticlePage {
  constructor(page) {
    this.page = page;
    this.articleTitleHeader = page.getByRole('heading');
    this.editArticleButton = page
      .getByRole('link', { name: 'Edit Article' })
      .nth(1);
  }

  async assertArticleTitleIsVisible(title) {
    await test.step(`Assert the article has correct title'`, async () => {
      await expect(this.articleTitleHeader).toContainText(title);
    });
  }

  async assertArticleTextIsVisible(text) {
    await test.step(`Assert the article has correct text'`, async () => {
      await expect(this.page.getByText(text)).toBeVisible();
    });
  }

  async assertArticleTagsAreVisible(tags) {
    await test.step(`Assert the article has correct tags'`, async () => {
      for (const tag of tags) {
        await expect(this.page.getByText(tag)).toBeVisible();
      }
    });
  }

  async assertDeletedArticleTags(tag) {
    await test.step(`Assert the article has no tags'`, async () => {
      await expect(this.page.getByText(tag)).toBeHidden();
    });
  }

  async clickEditArticleButton() {
    await test.step(`Click the 'Edit Article' button`, async () => {
      await this.editArticleButton.click();
    });
  }
}
