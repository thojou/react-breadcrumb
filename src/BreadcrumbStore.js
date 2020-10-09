import React, { createContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { addBreadcrumb, removeBreadcrumb } from './actions';
import breadcrumbReducer from './reducer';

export const BreadcrumbStoreContext = createContext({
  state: [],
  add: () => {
    throw new Error(
      'You must either wrap your application with <BreadcrumbStore /> component or inject your own "add" function via component property.'
    );
  },
  remove: () => {
    throw new Error(
      'You must either wrap your application with <BreadcrumbStore /> component or inject your own "remove" function via component property.'
    );
  }
});

const BreadcrumbStore = ({ children }) => {
  const [state, dispatch] = useReducer(breadcrumbReducer, []);

  const add = useCallback(
    (label, path, level) => dispatch(addBreadcrumb(label, path, level)),
    [dispatch]
  );
  const remove = useCallback(label => dispatch(removeBreadcrumb(label)), [
    dispatch
  ]);

  return (
    <BreadcrumbStoreContext.Provider value={{ state, add, remove }}>
      {children}
    </BreadcrumbStoreContext.Provider>
  );
};

BreadcrumbStore.propTypes = {
  children: PropTypes.node.isRequired
};

export default BreadcrumbStore;
