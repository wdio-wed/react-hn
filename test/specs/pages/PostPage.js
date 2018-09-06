const Page = require('./Page.js');
const Post = require('../components/Post.component.js');

class PostPage extends Page {
  get posts () { return $$('.Items__list .ListItem').map(post => new Post(post)) }
}

module.exports = PostPage;