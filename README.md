# @thojou/react-breadcrumb

> A React component library for easy breadcrumb integration.

[![NPM](https://img.shields.io/npm/v/react-breadcrumb.svg)](https://www.npmjs.com/package/react-breadcrumb) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

* [Introduction](#introduction)
* [Install](#install)
* [Usage](#usage)
* [API](#api)
* [Example Project](#example-project)
* [License](#license)

## Introduction

@thojou/react-breadcrumb is a simple breadcrumb component library for [react](https://reactjs.org) apps.

It helps you implementing a visual breadcrumb component based on a nested structure. The main focus of this library is on managing state and providing the current breadcrumb data in a hierarchical order.

You can easily integrate this library with [react-router-dom](https://reactrouter.com/), pick your favorite UI component library, or implement the UI components on your own.



## Install

In order to install @thojou/react-breadcrumb to your application, you need to run the following command from your project root

```
#npm
npm install --save @thojou/react-breadcrumb

#yarn
yarn add @thojou/react-breadcrumb
```

## Usage


Wrap your page component render with the `Breadcrumb` component

```jsx
// components/Home.js
import React, { Component } from 'react'
import { Breadcrumb } from '@thojou/react-breadcrumb'

export class Home extends Component {
  render () {
    return (
      <Breadcrumb 
        label="Home"
        path="/"
      >
        <h1>Welcome to Homepage</h1>
      </Breadcrumb>
    )
  }
}
```

Instead of using the `Breadcrumb` component, you can also wrap your existing component with an hoc.

```jsx
// components/Home.js
import React, { Component } from 'react'
import { withBreadcrumb } from '@thojou/react-breadcrumb'

class Home extends Component {
  render () {
    return (
        <h1>Welcome to Homepage</h1>
    )
  }
};

export const HomeWithBreadcrumb = withBreadcrumb('Home', '/')(Home);
```

Create your own presentational component to show the current Breadcrumb path inside you UI.

```jsx
// components/BreadcrumbPath.js
import React, { useContext } from 'react'
import { BreadcrumbStoreContext } from '@thojou/react-breadcrumb'

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
    )
  }
}
```

Put it all together and wrap your application with the `BreadcrumbStore`.

```jsx
// app.js
import React, { Component } from 'react'
import { BreadcrumbStore } from '@thojou/react-breadcrumb'
import Home from './components/Home';
import BreadcrumbPath from './components/BreadcrumbPath';

class App extends Component {
  render () {
    return (
      <BreadcrumbStore>
        <BreadcrumbPath />
        <Home />
      </BreadcrumbStore>
    )
  }
}
```

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
)
```

Instead of using the `BreadcrumbStoreContext` inside your presentational component, you should select the current state from you redux store.

## API

### Components

#### `Breadcrumb`

#### `BreadcrumbStore`

### Context 

#### `BreadcrumbStoreContext`,

### HOC

#### `withBreadcrumb`

### Action

#### `addBreadcrumb`

#### `removeBreadcrumb`

## Example Project

## License

MIT © [thojou](https://github.com/thojou)
