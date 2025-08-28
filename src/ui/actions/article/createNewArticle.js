import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { CreateArticlePage } from '../../pages/article/CreateArticlePage';
import { ViewArticlePage } from '../../pages/article/ViewArticlePage';

export async function createNewArticle(page, article) {
  await test.step('Create new article', async () => {
    const homePage = new HomePage(page);
    const createArticlePage = new CreateArticlePage(page);
    const viewArticlePage = new ViewArticlePage(page);

    await homePage.clickNewArticleLink();

    await createArticlePage.submitCreateArticleForm(article);

    await viewArticlePage.assertArticleTitleIsVisible(article.title);
    await viewArticlePage.assertArticleTextIsVisible(article.text);
  });
}
