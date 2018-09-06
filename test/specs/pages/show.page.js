const PostPage = require('./PostPage.js');

class ShowPage extends PostPage {
  constructor () {
    super('./#/show')
  }
}

module.exports = new ShowPage();