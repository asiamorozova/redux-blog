/* eslint-disable no-undef */
import { addPost, deletePost, updatePost } from '../actions/postActions';
import reducer from '../reducers/postReducer';


describe('post reducer', () => {
  it('handle the ADD_POST action', () => {
    const state = [];
    const action = addPost({
      title: 'entry',
      body: 'entry entry'
    });
        
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'entry',
        body:'entry entry'
      }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const state = [
      {
        title: 'post title',
        body: 'post body'
      }
    ];

    const action = deletePost(0);

    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});

it('handle the UPDATE_POST action', () => {
  const state = [
    {
      title: 'title',
      body: 'body body '
    }
  ];

  const action = updatePost(0, {
    title: 'update title',
    body: 'update body body'
  });

  const newState = reducer(state, action);

  expect(newState).toEqual([
    {
      title: 'update title',
      body: 'update body body'
    }
  ]);
});


