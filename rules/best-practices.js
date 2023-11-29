module.exports = {
  "rules": {
    // https://eslint.org/docs/rules/accessor-pairs
    "accessor-pairs": "off",

    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": "off",

    // https://eslint.org/docs/rules/block-scoped-var
    "block-scoped-var": "error",

    // https://eslint.org/docs/rules/complexity
    "complexity": ["off", 20],

    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": ["off", {
      "exceptMethods": [],
    }],

    // https://eslint.org/docs/rules/consistent-return
    "consistent-return": "off",

    // https://eslint.org/docs/rules/curly
    "curly": ["error", "all"],

    // https://eslint.org/docs/rules/default-case
    "default-case": ["error", { "commentPattern": "^no default$" }],

    // https://eslint.org/docs/rules/default-case-last
    "default-case-last": "error",

    // https://eslint.org/docs/rules/default-param-last
    "default-param-last": "error",

    // https://eslint.org/docs/rules/dot-notation
    "dot-notation": ["off", { "allowKeywords": true }],

    // https://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // https://eslint.org/docs/rules/eqeqeq
    "eqeqeq": ["error", "always", { "null": "ignore" }],

    // https://eslint.org/docs/rules/grouped-accessor-pairs
    "grouped-accessor-pairs": "error",

    // https://eslint.org/docs/rules/guard-for-in
    "guard-for-in": "off",

    // https://eslint.org/docs/rules/max-classes-per-file
    "max-classes-per-file": ["off", 1],

    // https://eslint.org/docs/rules/no-alert
    "no-alert": "off",

    // https://eslint.org/docs/rules/no-caller
    "no-caller": "off",

    // https://eslint.org/docs/rules/no-case-declarations
    "no-case-declarations": "error",

    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "off",

    // https://eslint.org/docs/rules/no-div-regex
    "no-div-regex": "off",

    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": ["error", { "allowElseIf": true }],

    // https://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [
      "off",
      {
        "allow": [
          "functions",
          "arrowFunctions",
          "generatorFunctions",
          "methods",
          "generatorMethods",
          "getters",
          "setters",
          "constructors",
          "asyncFunctions",
          "asyncMethods",
        ]
      }
    ],

    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "off",

    // https://eslint.org/docs/latest/rules/no-empty-static-block
    "no-empty-static-block": "off",

    // https://eslint.org/docs/rules/no-eq-null
    "no-eq-null": "off",

    // https://eslint.org/docs/rules/no-eval
    "no-eval": "error",

    // https://eslint.org/docs/rules/no-extend-native
    "no-extend-native": "off",

    // https://eslint.org/docs/rules/no-extra-bind
    "no-extra-bind": "off",

    // https://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "off",

    // https://eslint.org/docs/rules/no-fallthrough
    "no-fallthrough": "off",

    // https://eslint.org/docs/rules/no-floating-decimal
    "no-floating-decimal": "error",

    // https://eslint.org/docs/rules/no-global-assign
    "no-global-assign": ["off", { "exceptions": [] }],

    // https://eslint.org/docs/rules/no-native-reassign
    "no-native-reassign": "off",

    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": ["error"],

    // https://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "off",

    // https://eslint.org/docs/rules/no-implied-eval
    "no-implied-eval": "error",

    // https://eslint.org/docs/rules/no-invalid-this
    "no-invalid-this": "off",

    // https://eslint.org/docs/rules/no-iterator
    "no-iterator": "off",

    // https://eslint.org/docs/rules/no-labels
    "no-labels": ["off", { "allowLoop": false, "allowSwitch": false }],

    // https://eslint.org/docs/rules/no-lone-blocks
    "no-lone-blocks": "off",

    // https://eslint.org/docs/rules/no-loop-func
    "no-loop-func": "off",

    // https://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": ["off", {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": false,
    }],

    // https://eslint.org/docs/rules/no-multi-spaces
    "no-multi-spaces": ["off", {
      "ignoreEOLComments": false,
    }],

    // https://eslint.org/docs/rules/no-multi-str
    "no-multi-str": "off",

    // https://eslint.org/docs/rules/no-new
    "no-new": "off",

    // https://eslint.org/docs/rules/no-new-func
    "no-new-func": "off",

    // https://eslint.org/docs/rules/no-new-wrappers
    "no-new-wrappers": "off",

    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    "no-nonoctal-decimal-escape": "error",

    // https://eslint.org/docs/rules/no-octal
    "no-octal": "off",

    // https://eslint.org/docs/rules/no-octal-escape
    "no-octal-escape": "error",

    // rule: https://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": ["off", {
      "props": true,
      "ignorePropertyModificationsFor": [
        "acc", // for reduce accumulators
        "accumulator", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "context", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "$scope", // for Angular 1 scopes
        "staticContext", // for ReactRouter context
      ]
    }],

    // https://eslint.org/docs/rules/no-proto
    "no-proto": "off",

    // https://eslint.org/docs/rules/no-redeclare
    "no-redeclare": "off",

    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
      "error",
      {
        "object": "arguments",
        "property": "callee",
        "message": "arguments.callee is deprecated",
      },
      {
        "object": "global",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead",
      },
      {
        "object": "self",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead",
      },
      {
        "object": "window",
        "property": "isFinite",
        "message": "Please use Number.isFinite instead",
      },
      {
        "object": "global",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead",
      },
      {
        "object": "self",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead",
      },
      {
        "object": "window",
        "property": "isNaN",
        "message": "Please use Number.isNaN instead",
      },
      {
        "property": "__defineGetter__",
        "message": "Please use Object.defineProperty instead.",
      },
      {
        "property": "__defineSetter__",
        "message": "Please use Object.defineProperty instead.",
      },
      {
        "object": "Math",
        "property": "pow",
        "message": "Use the exponentiation operator (**) instead.",
      }
    ],

    // https://eslint.org/docs/rules/no-return-assign
    "no-return-assign": "off",

    // https://eslint.org/docs/rules/no-return-await
    "no-return-await": "off",

    // https://eslint.org/docs/rules/no-script-url
    "no-script-url": "error",

    // https://eslint.org/docs/rules/no-self-assign
    "no-self-assign": ["error", {
      "props": true,
    }],

    // https://eslint.org/docs/rules/no-self-compare
    "no-self-compare": "error",

    // https://eslint.org/docs/rules/no-sequences
    "no-sequences": "error",

    // https://eslint.org/docs/rules/no-throw-literal
    "no-throw-literal": "error",

    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "off",

    // https://eslint.org/docs/rules/no-unused-expressions
    "no-unused-expressions": ["off", {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false,
    }],

    // https://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": "error",

    // https://eslint.org/docs/rules/no-useless-call
    "no-useless-call": "off",

    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "off",

    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "off",

    // https://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "off",

    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "off",

    // https://eslint.org/docs/rules/no-void
    "no-void": "off",

    // https://eslint.org/docs/rules/no-warning-comments
    "no-warning-comments": [
      "warn",
      {
        "terms": ["TODO", "FIXME", "XXX", "BUG"],
        "location": "anywhere"
      }
    ],

    // https://eslint.org/docs/rules/no-with
    "no-with": "off",

    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],

    // https://eslint.org/docs/rules/prefer-named-capture-group
    "prefer-named-capture-group": "off",

    // https://eslint.org/docs/rules/prefer-object-has-own
    "prefer-object-has-own": "off",

    // https://eslint.org/docs/rules/prefer-regex-literals
    "prefer-regex-literals": ["off", {
      "disallowRedundantWrapping": true,
    }],

    // https://eslint.org/docs/rules/radix
    "radix": "off",

    // https://eslint.org/docs/rules/require-await
    "require-await": "off",

    // https://eslint.org/docs/rules/require-unicode-regexp
    "require-unicode-regexp": "off",

    // https://eslint.org/docs/rules/vars-on-top
    "vars-on-top": "off",

    // https://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["off", "outside", { "functionPrototypeMethods": false }],

    // https://eslint.org/docs/rules/yoda
    "yoda": "off"
  }
};
