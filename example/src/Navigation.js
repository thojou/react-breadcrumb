import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul
    style={{
      display: 'flex',
      listStyle: 'none'
    }}
  >
    <li
      style={{
        padding: 6
      }}
    >
      <Link to="/">Home</Link>
    </li>
    <li
      style={{
        padding: 6
      }}
    >
      <Link to="/category">Category</Link>
    </li>
    <li
      style={{
        padding: 6
      }}
    >
      <Link to="/category/cats">Cats </Link>
    </li>
    <li
      style={{
        padding: 6
      }}
    >
      <Link to="/category/dogs">Dogs</Link>
    </li>
  </ul>
);

export default Navigation;
