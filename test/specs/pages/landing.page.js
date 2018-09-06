const PostPage = require('./PostPage.js');

class LandingPage extends PostPage {
  constructor () {
    super('./')
  }
}

module.exports = new LandingPage();