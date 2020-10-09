import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from './Breadcrumb';

const withBreadcrumb = (label, path = '/') => WrappedComponent => {
  const WithBreadcrumb = ({ addBreadcrumb, removeBreadcrumb, ...rest }) => (
    <Breadcrumb
      label={label}
      path={path}
      add={addBreadcrumb}
      remove={removeBreadcrumb}
    >
      <WrappedComponent {...rest} />
    </Breadcrumb>
  );

  WithBreadcrumb.displayName = `withBreadcrumb(${WrappedComponent.displayName ||
    WrappedComponent.name})`;

  WithBreadcrumb.WrappedComponent = WrappedComponent;

  WithBreadcrumb.propTypes = {
    addBreadcrumb: PropTypes.func,
    removeBreadcrumb: PropTypes.func
  };

  WithBreadcrumb.defaultProps = {
    addBreadcrumb: undefined,
    removeBreadcrumb: undefined
  };

  return WithBreadcrumb;
};

export default withBreadcrumb;
