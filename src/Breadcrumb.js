import React, { useContext, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbStoreContext } from './BreadcrumbStore';

export const BreadcrumbContext = React.createContext({ level: 0 });

const useBreadcrumb = (
  label = undefined,
  path = '/',
  enhancedAdd = undefined,
  enhancedRemove = undefined
) => {
  const { level } = useContext(BreadcrumbContext);
  const { add, remove } = useContext(BreadcrumbStoreContext);
  const context = useMemo(() => ({ level: level + 1 }), [level]);

  const addBreadcrumb = useMemo(() => enhancedAdd || add, [enhancedAdd, add]);
  const removeBreadcrumb = useMemo(() => enhancedRemove || remove, [
    enhancedRemove,
    remove
  ]);

  useEffect(() => {
    if (label !== '' && label !== undefined) {
      addBreadcrumb(label, path, level);
    }

    return () => {
      if (label !== '' && label !== undefined) {
        removeBreadcrumb(label, path, level);
      }
    };
  }, [removeBreadcrumb, addBreadcrumb, level, label, path]);

  return context;
};

const Breadcrumb = ({ label, path, add, remove, children }) => {
  const context = useBreadcrumb(label, path, add, remove);

  return (
    <BreadcrumbContext.Provider value={context}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  add: PropTypes.func,
  remove: PropTypes.func,
  path: PropTypes.string
};

Breadcrumb.defaultProps = {
  label: undefined,
  path: '/',
  add: undefined,
  remove: undefined
};

export default Breadcrumb;
