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
  it('gets blog post by index', () => {
    const state = [{
      title: 'first title',
      body: 'first body'
    },
    {
      title: 'second title',
      body: 'second body'
    },
    {
      title: 'third title',
      body: 'third body'
    }];

    const post = postsByIndex(state, 0);

    expect(post).toEqual({
      title: 'first title',
      body: 'first body'
    });
  });
});

//oh no I was on master branch the whole time, my bad 
