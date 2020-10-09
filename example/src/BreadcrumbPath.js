import React, { useContext } from 'react';
import { BreadcrumbStoreContext } from '@thojou/react-breadcrumb';
import { Link } from 'react-router-dom';

const BreadcrumbPath = () => {
  const { state } = useContext(BreadcrumbStoreContext);

  return (
    <ul
      style={{
        display: 'flex',
        listStyle: 'none',
        backgroundColor: '#ccc',
        padding: 6,
        margin: 6
      }}
    >
      {state.map(item => (
        <li
          key={item.path}
          style={{
            padding: 6
          }}
        >
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BreadcrumbPath;
