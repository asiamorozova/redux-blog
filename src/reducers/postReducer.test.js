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
  });
});

