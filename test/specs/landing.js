const landingPage = require('./pages/landing.page.js')

describe('Landing Page', function () {
  beforeEach(function () {
    landingPage.load();
  })
  it('should have a main menu bar', function () {
    expect(landingPage.menu.isExisting(), 'Menu not found').to.be.true;
  })
  it('should have a list of top posts', function () {
    expect(landingPage.posts.length).to.equal(30);
  })
})