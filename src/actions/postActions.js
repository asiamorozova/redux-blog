export const post = (title, body) => ({
  type: 'ADD-POST',
  payload: {
    title, 
    body
  }
});

export const deletePost = title => ({
  type: 'DELETE-POST',
  payload: {
    title
  }
});

export const updatePost = ({ title, body }) => ({
  type: 'UPDATE-POST',
  payload: { 
    title,
    body 
  }
});
