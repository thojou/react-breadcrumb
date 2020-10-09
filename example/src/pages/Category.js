import React from 'react';
import createPage from '../createPage';
import Cats from './Cats';
import Dogs from './Dogs';
import { Switch, Route } from 'react-router-dom';

const pages = [
  createPage('Cats', '/category/cats', Cats),
  createPage('Dogs', '/category/dogs', Dogs)
];

export default ({ children }) => (
  <div>
    <h1>Category</h1>
    <Switch>
      {pages.map(page => (
        <Route key={page.path} path={page.path} component={page.component} />
      ))}
    </Switch>
  </div>
);
