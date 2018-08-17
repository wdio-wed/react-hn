const landingPage = require('./pages/landing.page.js')

describe('Landing Page', function () {
  beforeEach(function () {
    landingPage.load();
  })
  it('should have a main menu bar', function () {
    expect(landingPage.menu.isExisting(), 'Menu not found').to.be.true;
  })
})