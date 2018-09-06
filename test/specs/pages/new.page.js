const PostPage = require('./PostPage.js');

class NewPage extends PostPage {
  constructor () {
    super('./#/newest')
  }
}

module.exports = new NewPage();