import { OnesapyPage } from './app.po';

describe('onesapy App', function() {
  let page: OnesapyPage;

  beforeEach(() => {
    page = new OnesapyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
