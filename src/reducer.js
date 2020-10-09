import { ADD_BREADCRUMB, REMOVE_BREADCRUMB } from './actions';

const findItem = (state, search) => state.map(i => i.label).indexOf(search);
const sort = array => {
  array.sort((a, b) => a.level - b.level);
  return array;
};

export default (state = [], action) => {
  switch (action.type) {
    case ADD_BREADCRUMB:
      if (findItem(state, action.payload.label) > -1) {
        return state;
      }

      return sort([...state, action.payload]);
    case REMOVE_BREADCRUMB:
      if (findItem(state, action.payload.label) < 0) {
        return state;
      }

      state.splice(findItem(state, action.payload.label), 1);

      return [...state];
    default:
      return state;
  }
};
