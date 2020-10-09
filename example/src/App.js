import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BreadcrumbStore } from '@thojou/react-breadcrumb';
import createPage from './createPage';
import Home from './pages/Home';
import Category from './pages/Category';
import BreadcrumbPath from './BreadcrumbPath';
import Navigation from './Navigation';

const pages = [
  createPage('Category', '/category', Category),
  createPage('Home', '/', Home)
];

export default class App extends Component {
  render() {
    return (
      <BreadcrumbStore>
        <BrowserRouter>
          <div
            style={{
              width: 1000,
              margin: '0 auto',
              padding: '20px 0'
            }}
          >
            <div>
              <strong>Navigation</strong>
              <Navigation />
            </div>
            <div>
              <strong>Breadcrumb</strong>
              <BreadcrumbPath />
            </div>
            <Switch>
              {pages.map(page => (
                <Route
                  key={page.path}
                  path={page.path}
                  component={page.component}
                />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </BreadcrumbStore>
    );
  }
}
