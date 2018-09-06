const newPage = require('./pages/new.page.js')

describe('New Page', function () {
  beforeEach(function () {
    newPage.load();
  })
  it('should have a main menu bar', function () {
    expect(newPage.menu.isExisting(), 'Menu not found').to.be.true;
  })
  it('should have a list of top posts', function () {
    expect(newPage.posts.length).to.equal(30);
  })
})