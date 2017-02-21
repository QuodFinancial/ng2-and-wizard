import { Ng2AndWizardPage } from './app.po';

describe('ng2-and-wizard App', () => {
  let page: Ng2AndWizardPage;

  beforeEach(() => {
    page = new Ng2AndWizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
