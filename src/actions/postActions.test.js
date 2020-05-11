import { post } from './postActions';

describe('blog posts', () => {
  it('creates a blog post', () => {
    const action = post('Dear Diary', 'Today I walked dog.');

    expect(action).toEqual({
      type: 'ADD-POST',
      payload: {
        title: 'Dear Diary',
        body: 'Today I walked dog.'
      }
    });
  });
});
