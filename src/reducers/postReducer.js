import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];

    case UPDATE_POST: 
      return state.map((entry, i) => {
        if(i === action.payload.index) return action.payload.entry;
        return entry;
      });
    case DELETE_POST: 
      return state.filter((_, i) => i !== action.payload);
    default: 
      return state;
  }
}
