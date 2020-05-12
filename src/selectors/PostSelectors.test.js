import { getPosts, postsByIndex } from '../selectors/PostSelectors';

describe('blog post selectors', () => {
  it('gets all blog posts', () => {
    const state = [{
      title: 'first title',
      body: 'first body'
    }];

    const posts = getPosts(state);

    expect(posts).toEqual([{
      title: 'first title',
      body: 'first body'
    }]);
  });

});
