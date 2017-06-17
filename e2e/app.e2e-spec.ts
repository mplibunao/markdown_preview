import { Angular2MarkdownPreviewPage } from './app.po';

describe('angular2-markdown-preview App', () => {
  let page: Angular2MarkdownPreviewPage;

  beforeEach(() => {
    page = new Angular2MarkdownPreviewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
