# Joyent Dashboard Frontend

## start

```
npm run start
```

## test

```
npm run test
```

## structure

```
.
├── src
│   ├── containers
│   ├── index.js
│   ├── root.js
│   └── state
│       ├── actions.js
│       ├── reducers
│       ├── store.js
│       └── thunks
├── static
├── test
├── webpack
├── .babelrc
└── .eslintrc
```

 - **src/index.js**: Renders `src/root.js` and bootstraps hot module reloading.
 - **src/root.js**: The main component that wraps `react-redux`, `react-router` and `react-hot-loader`.
 - **src/state/store.js**: Exports a function that creates a `redux` store instance with all the middlewares and reducers configured.
 - **src/state/actions.js**: Not only exports all the actions available (declared in the file), but also goes through all the thunks and exports them.
 - **src/state/thunks**: Directory to place thunks so that actions or reducers don't get too confusing.
 - **src/state/reducers**: Each file here represents a reducer scope. So, `state.app` will be controlled in `reducers/app.js`.
 - **test**: Self explanatory.
 - **webpack**: Webpack configuration for multiple enviroments. Development configuration includes a dev-server and hot module replacement support.
 - **.babelrc**: This babel configuration outputs ES2015 code, so it will produce code only for modern browsers.
Also, async/await is supported.
 - **.eslintrc**:ESLint configuration. It's basically [semistandard](https://github.com/Flet/semistandard) with `space-before-function-paren` probited;