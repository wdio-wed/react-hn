class Page {
  constructor (path) {
    this.path = path;
  }
  get menu () {
    return $('.App__header')
  }

  load () {
    browser.url(this.path);
  }
}

module.exports = Page;