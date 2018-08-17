const Page = require('./Page.js');

class LandingPage extends Page {
  constructor () {
    super('./')
  }
}

module.exports = new LandingPage();