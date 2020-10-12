# @thojou/react-breadcrumb

> A React component library for easy breadcrumb integration.

[![NPM](https://img.shields.io/npm/v/react-breadcrumb.svg)](https://www.npmjs.com/package/react-breadcrumb)

@thojou/react-breadcrumb is a simple breadcrumb component library for [react](https://reactjs.org) apps.

It helps you implementing a visual breadcrumb component based on a nested structure. The main focus of this library is on managing state and providing the current breadcrumb data in a hierarchical order.

You can easily integrate this library with [react-router-dom](https://reactrouter.com/), [react-redux](https://redux.js.org/basics/usage-with-react), pick your favorite UI component library, or implement the UI components on your own.

## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [API](#api)
* [Example Project](#example-project)
* [License](#license)

## Install

In order to install @thojou/react-breadcrumb to your application, you need to run the following command from your project root

```
#npm
npm install --save @thojou/react-breadcrumb

#yarn
yarn add @thojou/react-breadcrumb
```

## Usage


Wrap your page component body with the `Breadcrumb` component

```jsx
// components/Home.js
import React, { Component } from 'react';
import { Breadcrumb } from '@thojou/react-breadcrumb';

export class Home extends Component {
  render () {
    return (
      <Breadcrumb 
        label="Home"
        path="/"
      >
        <h1>Welcome to Homepage</h1>
      </Breadcrumb>
    );
  }
};
```

> Instead of using the `Breadcrumb` component, you can also wrap your existing component with an hoc.

```jsx
// components/Home.js
import React, { Component } from 'react';
import { withBreadcrumb } from '@thojou/react-breadcrumb';

class Home extends Component {
  render () {
    return (
        <h1>Welcome to Homepage</h1>
    );
  }
};

export const HomeWithBreadcrumb = withBreadcrumb('Home', '/')(Home);
```

Create your own presentational component to show the current breadcrumb path inside your UI.

```jsx
// components/BreadcrumbPath.js
import React, { useContext } from 'react';
import { BreadcrumbStoreContext } from '@thojou/react-breadcrumb';

export function BreadcrumbPath()  {
  const {state} = useContext(BreadcrumbStoreContext);

  render () {
    return (
      <ul>
         {state.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
         ))}
      </ul>
    );
  }
};
```

Put it all together and wrap your application with the `BreadcrumbStore`.

```jsx
// app.js
import React, { Component } from 'react';
import { BreadcrumbStore } from '@thojou/react-breadcrumb';
import Home from './components/Home';
import BreadcrumbPath from './components/BreadcrumbPath';

class App extends Component {
  render () {
    return (
      <BreadcrumbStore>
        <BreadcrumbPath />
        <Home />
      </BreadcrumbStore>
    );
  }
};
```

Checkout the [example project](#example-project) for a more complex use case.

### Usage with [react-redux](https://redux.js.org/basics/usage-with-react)

Internally @thojou/react-breadcrumb uses react reducers to manage the state.
In large applications, you may be using react-redux for state management instead.
You can easily integrate this project into react-redux with just some small adjustments.

This package ships with a built-in reducer and actions to update the represented state. You can reuse this implementation to move the state management into the redux store.

> Note: If you are using react-redux for state management, wrapping your App inside `BreadcrumbStore` is not required.

Create a BreadcrumbContainer component to connect the breadcrumb to the redux store and use this container component instead of the origin Breadcrumb component. 

```jsx
import {connect} from 'react-redux';
import {Breadcrumb, addBreadcrumb, removeBreadcrumb } from '@thojou/react-breadcrumb';

export const BreadcrumbContainer = connect(
  null,
  {
    addBreadcrumb,
    removeBreadcrumb
  }
);
```

Instead of using the `BreadcrumbStoreContext` inside your presentational component, you should select the current state from you redux store.

```jsx
// components/BreadcrumbPath.js
import React from 'react';
import {connect} from 'react-redux';

export function BreadcrumbPath({state})  {
  render () {
    return (
      <ul>
         {state.map((item) => (
          <li key={item.path}>
            <a href={item.path}>{item.label}</a>
          </li>
         ))}
      </ul>
    );
  }
};

export const BreadcrumbPathContainer = connect(
  (state) => ({
    state: state.breadcrumb
  })
)(BreadcrumbPath);
```

## API

### `Breadcrumb` Component props

```js
import { Breadcrumb } from '@thojou/react-breadcrumb';
```

| name | type | default | description
| ---  | --- | --- | --- |
label | string | undefined | The label of this breadcrumb item
path  | string | "/"       | The path of this breadcrumb item
add   | function | undefined | Custom function to add a breadcrumb to e.g. redux store
remove | function | undefeined | Custom function to remove a breadcrumb from e.g. redux store

### `withBreadcrumb` HOC props

```js
import { withBreadcrumb } from '@thojou/react-breadcrumb';
```

| name | type | default | description
| ---  | --- | --- | --- |
label | string | undefined | The label of this breadcrumb item
path  | string | "/"       | The path of this breadcrumb item

You can pass `addBreadcrumb` or `removeBreadcrumb` to you enhanced component to override the default state management functions.

## Example Project

Want to see this package in action? Checkout the [codesandbox]() to see a working example of checkout this repository and start the example application by running the following commands:

```bash
cd example/

#npm
npm install
npm start

#yarn
yarn install
yarn start
```

Open a Browser and navigate to [localhost:3000](http://localhost:3000) to get started.

## License

MIT © [thojou](https://github.com/thojou)
