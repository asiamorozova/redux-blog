import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions';

describe('blog posts', () => {
  it('creates a blog post', () => {
    const action = addPost({
      title: 'Dear Diary', 
      body: 'Today I walked dog.' });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'Dear Diary',
        body: 'Today I walked dog.'
      }
    });
  });
  it('deletes a blog post', () => {
    const deletedPost = deletePost(0);

    expect(deletedPost).toEqual({
      type: DELETE_POST,
      payload: 0
    });
  });

  it('creates and update for blog', () => {
    const action = updatePost (1, {
      title: 'New Adventure',
      body: 'almost died, but it was cool'
    });

    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        index: 1,
        entry: {
          title: 'New Adventure',
          body: 'almost died, but it was cool'

        }
      }
    });
  });

});
