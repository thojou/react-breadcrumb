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

### Default Usage

Wrap your application with the `BreadcrumbStore`

```jsx
// app.js
import React, { Component } from 'react'

import BreadcrumbStore from '@thojou/react-breadcrumb'
import Home

class App extends Component {
  render () {
    return (
      <BreadcrumbStore>
        // ...children
      </BreadcrumbStore>
    )
  }
}
```

### Usage with [react-redux](https://redux.js.org/basics/usage-with-react)

## API


## Example Project

## License

MIT © [thojou](https://github.com/thojou)
