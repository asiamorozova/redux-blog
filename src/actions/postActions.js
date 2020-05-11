export const post = (title, body) => ({
  type: 'ADD-POST',
  payload: {
    title, 
    body
  }
});


