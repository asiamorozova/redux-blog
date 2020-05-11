import { post, deletePost, updatePost } from './postActions';

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
  it('deletes a blog post', () => {
    const deletedPost = deletePost('crappy title that I hate');

    expect(deletedPost).toEqual({
      type: 'DELETE-POST',
      payload: {
        title: 'crappy title that I hate',
      }
    });
  });

  it('creates and update for blog', () => {
    const action = updatePost ({
      title: 'New Adventure',
      body: 'almost died, but it was cool'
    });

    expect(action).toEqual({
      type: 'UPDATE-POST',
      payload: {
        title: 'New Adventure',
        body: 'almost died, but it was cool'
      }
    });
  });

});
