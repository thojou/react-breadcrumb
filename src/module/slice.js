import { createSlice } from '@reduxjs/toolkit';
import { equals, findIndex, prop, propEq, sortBy } from 'ramda';

const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState: [],
  reducers: {
    addBreadcrumb(state, { payload }) {
      if (findIndex(equals(payload))(state) > -1) {
        return undefined;
      }

      const newState = [...state, payload];

      return sortBy(prop('level'), newState);
    },
    removeBreadcrumb(state, { payload }) {
      const index = findIndex(propEq('label', payload))(state);
      if (index === -1) {
        return undefined;
      }

      state.splice(index, 1);
      return state;
    }
  }
});

const { actions, reducer } = breadcrumbSlice;

export const { addBreadcrumb, removeBreadcrumb } = actions;
export default reducer;
