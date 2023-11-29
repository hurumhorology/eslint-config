# eslint-config-hurumhorology

typescript eslint config packages for watchlab developments
Referenced by [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), (not based on).

## Installation

Install `eslint-config-hurumhorology` package:

1. Install the correct versions of each package, which are listed by the command:

```
npm info "eslint-config-hurumhorology" peerDependencies
```

if using **npm 5+**, use this shortcut

```
npx install-peerdeps --dev eslint-config-hurumhorology
```

if using **yarn**, use this command

```
yarn add --peer --dev eslint-config-hurumhorology
```

2. Install via package manager:

```
npm install --save-dev eslint-config-hurumhorology
```

or

```
yarn --dev eslint-config-hurumhorology
```

## Usage

### eslint-config-hurumhorology

Rule about javascript, but it does not have babel setting.
if you want only javascript rule setting, should set eslint babel

> - eslint
> - eslint-plugin-import

```javascript
module.exports = {
  extends: ["eslint-config-hurumhorology"],
};
```

- CAUTION: if you are using `sourceType: module`, you should add it in you config file

```javascript
module.exports = {
  parserOptions: {
    sourceType: "module",
  },
};
```

### eslint-config-hurumhorology/typescript

> - @typescript-eslint/eslint-plugin
> - @typescript-eslint/parser
> - eslint-import-resolver-typescript

```javascript
module.exports = {
  extends: [
    "eslint-config-hurumhorology",
    "eslint-config-hurumhorology/typescript",
  ],
};
```

- CAUTION: if you are using `sourceType: module`, you should add it in you config file

```javascript
module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {
        // if you have another tsconfig file, you should change it
        // if not, you don't have to write it
        project: ["./tsconfig.json"],
        sourceType: "module",
      },
    },
  },
};
```

### eslint-config-hurumhorology/prettier

> - eslint-config-prettier
> - eslint-plugin-prettier

```javascript
module.exports = {
  extends: [
    "eslint-config-hurumhorology",
    "eslint-config-hurumhorology/typescript",
    "eslint-config-hurumhorology/prettier",
  ],
};
```
