import { AngularCesiumPage } from './app.po';

describe('angular-cesium App', () => {
  let page: AngularCesiumPage;

  beforeEach(() => {
    page = new AngularCesiumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
