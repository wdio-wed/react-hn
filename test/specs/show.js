const showPage = require('./pages/show.page.js')

describe('Show Page', function () {
  beforeEach(function () {
    showPage.load();
  })
  it('should have a main menu bar', function () {
    expect(showPage.menu.isExisting(), 'Menu not found').to.be.true;
  })
  it('should have a list of top posts', function () {
    expect(showPage.posts.length).to.equal(30);
  })
  it('should have "Show HN" in post title', function () {
    showPage.posts.forEach(post => {
      expect(post.title.getText()).to.have.string('Show HN:')
    })
  })
})