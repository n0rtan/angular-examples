import { NgrecipesPage } from './app.po';

describe('ngrecipes App', () => {
  let page: NgrecipesPage;

  beforeEach(() => {
    page = new NgrecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
