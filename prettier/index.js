module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["prettier"],
  "extends": ["plugin:prettier/recommended"],

  "rules": {
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "tabs": false,
      "semicolons": true,
      "singleQuote": false,
      "jsxSingleQuote": false,
      "trailingComma": "all",
      "bracketSpacing": true,
      "bracketSameLine": false,
      "arrowParens": "always",
      "endOfLine": "auto",
      "printWidth": 80
    }],
  }
}