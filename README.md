# React Universal

An vanilla example of Server-side rendered React app with Node. 

> This project doesn't use frameworks like [Next.js](https://github.com/zeit/next.js/), [MERN](http://mern.io) or [react-starter-kit](https://github.com/kriasoft/react-starter-kit).

## Dependencies

Our goal is to use the minimal configuration so it is up to you extend the ecosystem. The current dependencies are just:

### Server
* express

### Shared
* webpack
* babel-loader, babel-core, babel-preset-env, babel-preset-react
* react, react-dom

## Usage

```bash

git clone https://github.com/ahlechandre/react-universal

## Installs all dependencies.
yarn install

## Creates bundles for server (./build) and client (./static).
yarn build

## App starts running on localhost:3000
yarn start

## Removes all bundled files if necessary.
yarn clear
```