# babel-typescript-react-webpack-example
Practical configuration example for Babel 7 + TypeScript + React + Webpack

## Contains
- [x] TypeScript 3
- [x] Babel 7
- [x] Webpack 4
- [x] Jest
- [x] TSLint

## Development
Following commands install dependencies and start dev server:
```
yarn
yarn run start
```

### Test
Jest, TSLint and tsc's type check are executable with following commands:
```
yarn run test
yarn run lint
yarn run compile
```

#### Why type check?
`@babel/preset-typescript` doesn't check any type of TypeScript files because the preset just for transpile to JavaScript code by removing type information.

Thus, you should compile TypeScript code with `tsc` manually before generating bundle files.

## License
MIT
