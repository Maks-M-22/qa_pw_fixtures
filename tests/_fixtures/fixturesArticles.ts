import { test as base } from '@playwright/test';
import { CreateArticlePage } from '../../src/ui/pages/article/CreateArticlePage';
import { EditArticlePage } from '../../src/ui/pages/article/EditArticlePage';
import { ViewArticlePage } from '../../src/ui/pages/article/ViewArticlePage';
import { generateNewArticleData } from '../../src/common/testData/generateNewArticleData';
import { Logger } from '../../src/common/logger/Logger';

export const test = base.extend<{
  createArticlePage;
  editArticlePage;
  viewArticlePage;
  articleWithoutTags;
  articleWithOneTag;
  articleWithTwoTags;
  logger;
}>({
  createArticlePage: async ({ page }, use) => {
    const createArticlePage = new CreateArticlePage(page);

    await use(createArticlePage);
  },
  editArticlePage: async ({ page }, use) => {
    const editArticlePage = new EditArticlePage(page);

    await use(editArticlePage);
  },
  viewArticlePage: async ({ page }, use) => {
    const viewArticlePage = new ViewArticlePage(page);

    await use(viewArticlePage);
  },
  logger: [
    async ({}, use) => {
      const logger = new Logger('error');

      await use(logger);
    },
  ],
  articleWithoutTags: async ({ logger }, use) => {
    const articleWithoutTags = generateNewArticleData(logger);

    await use(articleWithoutTags);
  },
  articleWithOneTag: async ({ logger }, use) => {
    const articleWithOneTag = generateNewArticleData(logger, 1);

    await use(articleWithOneTag);
  },
  articleWithTwoTags: async ({ logger }, use) => {
    const articleWithTwoTags = generateNewArticleData(logger, 2);

    await use(articleWithTwoTags);
  },
});
