module.exports = {
  "rules": {
    // https://eslint.org/docs/rules/for-direction
    "for-direction": "off",

    // https://eslint.org/docs/rules/getter-return
    "getter-return": "warn",

    // https://eslint.org/docs/rules/no-async-promise-executor
    "no-async-promise-executor": "warn",

    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "off",

    // https://eslint.org/docs/rules/no-compare-neg-zero
    "no-compare-neg-zero": "error",

    // https://eslint.org/docs/latest/rules/no-cond-assign
    "no-cond-assign": "off",

    // https://eslint.org/docs/latest/rules/no-console
    "no-console": "off",

    // https://eslint.org/docs/rules/no-constant-binary-expression
    "no-constant-binary-expression": "off",

    // https://eslint.org/docs/latest/rules/no-constant-condition
    "no-constant-condition": "off",

    // https://eslint.org/docs/latest/rules/no-control-regex
    "no-control-regex": "off",

    // https://eslint.org/docs/latest/rules/no-debugger
    "no-debugger": "off",

    // https://eslint.org/docs/latest/rules/no-dupe-args
    "no-dupe-args": "off",

    // https://eslint.org/docs/rules/no-dupe-else-if
    "no-dupe-else-if": "off",

    // https://eslint.org/docs/latest/rules/no-dupe-keys
    "no-dupe-keys": "off",

    // https://eslint.org/docs/latest/rules/no-duplicate-case
    "no-duplicate-case": "off",

    // https://eslint.org/docs/latest/rules/no-empty
    "no-empty": "off",

    // https://eslint.org/docs/latest/rules/no-empty-character-class
    "no-empty-character-class": "off",

    // https://eslint.org/docs/latest/rules/no-ex-assign
    "no-ex-assign": "off",

    // https://eslint.org/docs/rules/no-extra-boolean-cast
    "no-extra-boolean-cast": "off",

    // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": ["off", "all", {
      "conditionalAssign": true,
      "nestedBinaryExpressions": false,
      "returnAssign": false,
      "ignoreJSX": "all", // delegate to eslint-plugin-react
      "enforceForArrowConditionals": false,
    }],

    // https://eslint.org/docs/latest/rules/no-extra-semi
    "no-extra-semi": "error",

    // https://eslint.org/docs/latest/rules/no-func-assign
    "no-func-assign": "off",

    // https://eslint.org/docs/rules/no-import-assign
    "no-import-assign": "off",

    // https://eslint.org/docs/latest/rules/no-inner-declarations
    "no-inner-declarations": "off",

    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    "no-invalid-regexp": "off",

    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    "no-irregular-whitespace": "off",

    // https://eslint.org/docs/rules/no-loss-of-precision
    "no-loss-of-precision": "off",

    // https://eslint.org/docs/rules/no-misleading-character-class
    "no-misleading-character-class": "off",

    // https://eslint.org/docs/latest/rules/no-obj-calls
    "no-obj-calls": "off",

    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    "no-new-native-nonconstructor": "off",

    // https://eslint.org/docs/rules/no-promise-executor-return
    "no-promise-executor-return": "off",

    // https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",

    // https://eslint.org/docs/latest/rules/no-regex-spaces
    "no-regex-spaces": "off",

    // https://eslint.org/docs/rules/no-setter-return
    "no-setter-return": "off",

    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    "no-sparse-arrays": "off",

    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "off",

    // https://eslint.org/docs/rules/no-unexpected-multiline
    "no-unexpected-multiline": "off",

    // https://eslint.org/docs/latest/rules/no-unreachable
    "no-unreachable": "off",

    // https://eslint.org/docs/rules/no-unreachable-loop
    "no-unreachable-loop": ["off", {
      "ignore": [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    }],

    // https://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": "off",

    // https://eslint.org/docs/rules/no-unsafe-negation
    "no-unsafe-negation": "error",

    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    "no-unsafe-optional-chaining": ["off", { "disallowArithmeticOperators": true }],

    // https://eslint.org/docs/rules/no-unused-private-class-members
    "no-unused-private-class-members": "off",

    // https://eslint.org/docs/rules/no-useless-backreference
    "no-useless-backreference": "off",

    // https://eslint.org/docs/latest/rules/no-negated-in-lhs
    "no-negated-in-lhs": "off",

    // https://eslint.org/docs/rules/require-atomic-updates
    "require-atomic-updates": "off",

    // https://eslint.org/docs/latest/rules/use-isnan
    "use-isnan": "error",

    // https://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "off",

    // https://eslint.org/docs/rules/valid-typeof
    "valid-typeof": ["off", { "requireStringLiterals": true }],
  }
};
