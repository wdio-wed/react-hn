class Post {
  constructor(element) {
    this.element = element;
  }

  get title () { return this.element.$('.Item__title') }
}

module.exports = Post;