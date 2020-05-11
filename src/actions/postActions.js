
export const ADD_POST = 'ADD_POST';
export const addPost = entry => ({
  type: 'ADD_POST',
  payload: entry
});

export const DELETE_POST = 'DELETE_POST';
export const deletePost = index => ({
  type: 'DELETE_POST',
  payload: 
    index
});

export const UPDATE_POST = 'UPDATE_POST';
export const updatePost = (index, entry) => ({
  type: 'UPDATE_POST',
  payload: { 
    index,
    entry
  }
});
