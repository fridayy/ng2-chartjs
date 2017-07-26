import { Ng2ChartjsPage } from './app.po';

describe('ng2-chartjs App', () => {
  let page: Ng2ChartjsPage;

  beforeEach(() => {
    page = new Ng2ChartjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
