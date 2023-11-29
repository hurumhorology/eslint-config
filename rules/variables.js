module.exports = {
  "rules": {
    // https://eslint.org/docs/latest/rules/init-declarations
    "init-declarations": "off",

    // https://eslint.org/docs/latest/rules/no-catch-shadow
    "no-catch-shadow": "off",

    // https://eslint.org/docs/latest/rules/no-delete-var
    "no-delete-var": "off",

    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // https://eslint.org/docs/latest/rules/no-shadow
    "no-shadow": "off",

    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    "no-shadow-restricted-names": "off",

    // https://eslint.org/docs/latest/rules/no-undef
    "no-undef": "off",

    // https://eslint.org/docs/latest/rules/no-undef-init
    "no-undef-init": "off",

    // https://eslint.org/docs/rules/no-undefined
    "no-undefined": "off",

    // https://eslint.org/docs/latest/rules/no-unused-vars
    "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],

    // https://eslint.org/docs/latest/rules/no-use-before-define
    "no-use-before-define": ["off", { "functions": true, "classes": true, "variables": true }],
  }
};
