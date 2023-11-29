module.exports = {
  "rules": {
    // https://eslint.org/docs/rules/array-bracket-newline
    "array-bracket-newline": ["off", "consistent"],

    // https://eslint.org/docs/rules/array-element-newline
    "array-element-newline": ["off", { "multiline": true, "minItems": 3 }],

    // https://eslint.org/docs/latest/rules/array-bracket-spacing
    "array-bracket-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/block-spacing
    "block-spacing": ["error", "always"],

    // https://eslint.org/docs/latest/rules/brace-style
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],

    // https://eslint.org/docs/latest/rules/camelcase
    "camelcase": "off",

    // https://eslint.org/docs/rules/capitalized-comments
    "capitalized-comments": ["off", "never", {
      "line": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true,
      },
      "block": {
        "ignorePattern": ".*",
        "ignoreInlineComments": true,
        "ignoreConsecutiveComments": true,
      },
    }],

    // https://eslint.org/docs/latest/rules/comma-dangle
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "always-multiline",
    }],


    // https://eslint.org/docs/latest/rules/comma-spacing
    "comma-spacing": ["error", { "before": false, "after": true }],

    // https://eslint.org/docs/latest/rules/comma-style
    "comma-style": ["error", "last", {
      "exceptions": {
        "ArrayExpression": false,
        "ArrayPattern": false,
        "ArrowFunctionExpression": false,
        "CallExpression": false,
        "FunctionDeclaration": false,
        "FunctionExpression": false,
        "ImportDeclaration": false,
        "ObjectExpression": false,
        "ObjectPattern": false,
        "VariableDeclaration": false,
        "NewExpression": false,
      }
    }],

    // https://eslint.org/docs/latest/rules/computed-property-spacing
    "computed-property-spacing": ["error", "never"],

    // https://eslint.org/docs/latest/rules/consistent-this
    "consistent-this": "off",

    // https://eslint.org/docs/latest/rules/eol-last
    "eol-last": ["error", "always"],

    // https://eslint.org/docs/rules/function-call-argument-newline
    "function-call-argument-newline": ["error", "consistent"],

    // https://eslint.org/docs/rules/func-call-spacing
    "func-call-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/func-name-matching
    "func-name-matching": ["off", "always", {
      "includeCommonJSModuleExports": false,
      "considerPropertyDescriptor": true,
    }],

    // https://eslint.org/docs/rules/func-names
    "func-names": "off",

    // https://eslint.org/docs/rules/func-style
    "func-style": ["off", "expression"],

    // https://eslint.org/docs/rules/function-paren-newline
    "function-paren-newline": ["error", "multiline-arguments"],

    // https://eslint.org/docs/rules/id-denylist
    "id-denylist": "off",

    // https://eslint.org/docs/latest/rules/id-length
    "id-length": "off",

    // https://eslint.org/docs/latest/rules/id-match
    "id-match": "off",

    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    "implicit-arrow-linebreak": ["error", "beside"],

    // https://eslint.org/docs/rules/indent
    "indent": "off",

    // https://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": ["off", "prefer-double"],

    // https://eslint.org/docs/latest/rules/key-spacing
    "key-spacing": [
      "error",
      { "beforeColon": false, "afterColon": true, "mode": "strict" }
    ],

    // https://eslint.org/docs/latest/rules/keyword-spacing
    "keyword-spacing": ["error", {
      "before": true,
      "after": true,
      "overrides": {
        "return": { "after": true },
        "throw": { "after": true },
        "case": { "after": true }
      }
    }],

    // https://eslint.org/docs/rules/line-comment-position
    "line-comment-position": ["off", {
      "position": "above",
      "ignorePattern": "",
      "applyDefaultPatterns": true,
    }],

    // https://eslint.org/docs/rules/linebreak-style
    "linebreak-style": "off",

    // https://eslint.org/docs/rules/lines-between-class-members
    "lines-between-class-members": [
      "error",
      "always",
      { "exceptAfterSingleLine": true }
    ],

    // https://eslint.org/docs/latest/rules/lines-around-comment
    "lines-around-comment": "off",

    // https://eslint.org/docs/rules/lines-around-directive
    "lines-around-directive": ["error", {
      "before": "always",
      "after": "always",
    }],

    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    "logical-assignment-operators": ["off", "always", {
      "enforceForIfStatements": true,
    }],

    // https://eslint.org/docs/latest/rules/max-depth
    "max-depth": ["off", 4],

    // https://eslint.org/docs/rules/max-len
    "max-len": ["error", 100, 2, {
      "ignoreUrls": true,
      "ignoreComments": false,
      "ignoreRegExpLiterals": true,
      "ignoreStrings": true,
      "ignoreTemplateLiterals": true,
    }],

    // https://eslint.org/docs/rules/max-lines
    "max-lines": ["off", {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true
    }],

    // https://eslint.org/docs/rules/max-lines-per-function
    "max-lines-per-function": ["off", {
      "max": 50,
      "skipBlankLines": true,
      "skipComments": true,
      "IIFEs": true,
    }],

    // https://eslint.org/docs/latest/rules/max-nested-callbacks
    "max-nested-callbacks": "off",

    // https://eslint.org/docs/latest/rules/max-params
    "max-params": ["off", 3],

    // https://eslint.org/docs/latest/rules/max-statements
    "max-statements": ["off", 10],

    // https://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": ["off", { "max": 1 }],

    // https://eslint.org/docs/rules/multiline-comment-style
    "multiline-comment-style": ["off", "starred-block"],

    // https://eslint.org/docs/rules/multiline-ternary
    "multiline-ternary": ["off", "never"],

    // https://eslint.org/docs/latest/rules/new-cap
    "new-cap": ["error", {
      "newIsCap": true,
      "newIsCapExceptions": [],
      "capIsNew": false,
      "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"],
    }],

    // https://eslint.org/docs/rules/new-parens
    "new-parens": "error",

    // https://eslint.org/docs/latest/rules/newline-after-var
    "newline-after-var": "off",

    // https://eslint.org/docs/rules/newline-before-return
    "newline-before-return": "error",

    // https://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 4 }],

    // https://eslint.org/docs/latest/rules/no-array-constructor
    "no-array-constructor": "off",

    // https://eslint.org/docs/rules/no-bitwise
    "no-bitwise": "off",

    // https://eslint.org/docs/rules/no-continue
    "no-continue": "off",

    // https://eslint.org/docs/latest/rules/no-inline-comments
    "no-inline-comments": "off",

    // https://eslint.org/docs/rules/no-lonely-if
    "no-lonely-if": "off",

    // https://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": ["off", {
      "groups": [
        ["%", "**"],
        ["%", "+"],
        ["%", "-"],
        ["%", "*"],
        ["%", "/"],
        ["/", "*"],
        ["&", "|", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!=="],
        ["&&", "||"],
      ],
      "allowSamePrecedence": false
    }],

    // https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs
    "no-mixed-spaces-and-tabs": "off",

    // https://eslint.org/docs/rules/no-multi-assign
    "no-multi-assign": ["off"],

    // https://eslint.org/docs/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],

    // https://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": "off",

    // https://eslint.org/docs/latest/rules/no-nested-ternary
    "no-nested-ternary": "off",

    // https://eslint.org/docs/latest/rules/no-new-object
    "no-new-object": "off",

    // https://eslint.org/docs/rules/no-plusplus
    "no-plusplus": "off",

    // https://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      "off",
      {
        "selector": "ForInStatement",
        "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        "selector": "ForOfStatement",
        "message": "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
      },
      {
        "selector": "LabeledStatement",
        "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        "selector": "WithStatement",
        "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],

    // https://eslint.org/docs/latest/rules/no-spaced-func
    "no-spaced-func": "off",

    // https://eslint.org/docs/latest/rules/no-tabs
    "no-tabs": "off",

    // https://eslint.org/docs/latest/rules/no-ternary
    "no-ternary": "off",

    // https://eslint.org/docs/latest/rules/no-trailing-spaces
    "no-trailing-spaces": ["error", {
      "skipBlankLines": false,
      "ignoreComments": true,
    }],

    // https://eslint.org/docs/rules/no-underscore-dangle
    "no-underscore-dangle": ["off", {
      "allow": [],
      "allowAfterThis": false,
      "allowAfterSuper": false,
      "enforceInMethodNames": true,
    }],

    // https://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": ["off", { "defaultAssignment": false }],

    // https://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": "error",

    // https://eslint.org/docs/rules/nonblock-statement-body-position
    "nonblock-statement-body-position": ["error", "beside", { "overrides": {} }],

    // https://eslint.org/docs/latest/rules/object-curly-spacing
    "object-curly-spacing": ["error", "always"],

    // https://eslint.org/docs/rules/object-curly-newline
    "object-curly-newline": ["error", {
      "ObjectExpression": { "minProperties": 4, "multiline": true, "consistent": true },
      "ObjectPattern": { "minProperties": 4, "multiline": true, "consistent": true },
      "ImportDeclaration": { "minProperties": 4, "multiline": true, "consistent": true },
      "ExportDeclaration": { "minProperties": 4, "multiline": true, "consistent": true },
    }],

    // https://eslint.org/docs/rules/object-property-newline
    "object-property-newline": ["error", {
      "allowAllPropertiesOnSameLine": true,
    }],

    // https://eslint.org/docs/latest/rules/one-var
    "one-var": ["off", "never"],

    // https://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": ["off", "always"],

    // https://eslint.org/docs/rules/operator-assignment
    "operator-assignment": ["off", "always"],

    // https://eslint.org/docs/rules/operator-linebreak
    "operator-linebreak": ["off", "before", { "overrides": { "=": "none" } }],

    // https://eslint.org/docs/latest/rules/padded-blocks
    "padded-blocks": ["error", {
      "blocks": "never",
      "classes": "never",
      "switches": "never",
    }, {
      "allowSingleLineBlocks": true,
    }],

    // https://eslint.org/docs/rules/padding-line-between-statements
    "padding-line-between-statements": "off",

    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    "prefer-exponentiation-operator": "off",

    // https://eslint.org/docs/rules/prefer-object-spread
    "prefer-object-spread": "off",

    // https://eslint.org/docs/rules/quote-props.html
    "quote-props": ["off", "as-needed", { "keywords": false, "unnecessary": true, "numbers": false }],

    // https://eslint.org/docs/latest/rules/quotes
    "quotes": ["error", "single", { "avoidEscape": true }],

    // https://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": "off",

    // https://eslint.org/docs/latest/rules/semi
    "semi": ["error", "always"],

    // https://eslint.org/docs/latest/rules/semi-spacing
    "semi-spacing": ["error", { "before": false, "after": false }],

    // https://eslint.org/docs/rules/semi-style
    "semi-style": ["error", "last"],

    // https://eslint.org/docs/latest/rules/sort-keys
    "sort-keys": ["off", "asc", { "caseSensitive": false, "natural": true }],

    // https://eslint.org/docs/latest/rules/sort-vars
    "sort-vars": "off",

    // https://eslint.org/docs/latest/rules/space-before-blocks
    "space-before-blocks": ["error", "always"],

    // https://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],

    // https://eslint.org/docs/latest/rules/space-in-parens
    "space-in-parens": ["error", "never"],

    // https://eslint.org/docs/latest/rules/space-infix-ops
    "space-infix-ops": "error",

    // https://eslint.org/docs/rules/space-unary-ops
    "space-unary-ops": ["error", {
      "words": true,
      "nonwords": false,
      "overrides": {
      },
    }],

    // https://eslint.org/docs/rules/spaced-comment
    "spaced-comment": ["off", "always", {
      "line": {
        "exceptions": ["-", "+"],
        "markers": ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
      },
      "block": {
        "exceptions": ["-", "+"],
        "markers": ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
        "balanced": true,
      }
    }],

    // https://eslint.org/docs/rules/switch-colon-spacing
    "switch-colon-spacing": ["error", { "after": true, "before": false }],

    // https://eslint.org/docs/rules/template-tag-spacing
    "template-tag-spacing": ["error", "never"],

    // https://eslint.org/docs/rules/unicode-bom
    "unicode-bom": ["off", "never"],

    // https://eslint.org/docs/latest/rules/wrap-regex
    "wrap-regex": "off"
  }
};
