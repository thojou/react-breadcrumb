import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_CONTEXT = {
  level: 0
};

export const Context = React.createContext(DEFAULT_CONTEXT);

export const Provider = ({ children }) => {
  const { level } = useContext(Context);
  const context = useMemo(() => ({ level: level + 1 }), [level]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};
