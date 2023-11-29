module.exports = {
  "env": {
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "generators": false,
      "objectLiteralDuplicateProperties": false
    }
  },

  "rules": {
    // https://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": "off",

    // https://eslint.org/docs/rules/arrow-parens
    "arrow-parens": ["error", "always"],

    // https://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": ["error", { "before": true, "after": true }],

    // https://eslint.org/docs/latest/rules/constructor-super
    "constructor-super": "off",

    // https://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": ["error", "after"],

    // https://eslint.org/docs/rules/no-class-assign
    "no-class-assign": "off",

    // https://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": ["error", {
      "allowParens": true,
    }],

    // https://eslint.org/docs/latest/rules/no-const-assign
    "no-const-assign": "error",

    // https://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": "error",

    // https://eslint.org/docs/rules/no-duplicate-imports
    // replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "no-duplicate-imports": "off",

    // https://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": "error",

    // https://eslint.org/docs/rules/no-restricted-exports
    "no-restricted-exports": "off",

    // https://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": ["off", {
      "paths": [],
      "patterns": []
    }],

    // https://eslint.org/docs/rules/no-this-before-super
    "no-this-before-super": "off",

    // https://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": "off",

    // https://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": "off",

    // https://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": ["off", {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false,
    }],

    // https://eslint.org/docs/latest/rules/no-var
    "no-var": "error",

    // https://eslint.org/docs/rules/object-shorthand
    "object-shorthand": ["error", "always"],

    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    "prefer-arrow-callback": ["error", {
      "allowNamedFunctions": false,
      "allowUnboundThis": true,
    }],

    // https://eslint.org/docs/latest/rules/prefer-const
    "prefer-const": "error",

    // https://eslint.org/docs/rules/prefer-destructuring
    "prefer-destructuring": ["off", {
      "VariableDeclarator": {
        "array": false,
        "object": true,
      },
      "AssignmentExpression": {
        "array": true,
        "object": false,
      },
    }, {
      "enforceForRenamedProperties": false,
    }],

    // https://eslint.org/docs/rules/prefer-numeric-literals
    "prefer-numeric-literals": "off",

    // https://eslint.org/docs/rules/prefer-reflect
    "prefer-reflect": "off",

    // https://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": "off",

    // https://eslint.org/docs/rules/prefer-spread
    "prefer-spread": "off",

    // https://eslint.org/docs/rules/prefer-template
    "prefer-template": "error",

    // https://eslint.org/docs/rules/require-yield
    "require-yield": "off",

    // https://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/sort-imports
    "sort-imports": ["off", {
      "ignoreCase": false,
      "ignoreDeclarationSort": false,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
    }],

    // https://eslint.org/docs/rules/symbol-description
    "symbol-description": "off",

    // https://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": ["error", "after"]
  }
};
