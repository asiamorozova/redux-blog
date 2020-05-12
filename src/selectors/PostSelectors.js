


export const getPosts = state => state; 

export const postsByIndex = (state, index) => {
  const byIndex = getPosts(state).findIndex(entry => entry === state[index]);
  return state[byIndex];
};
