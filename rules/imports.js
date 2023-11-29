module.exports = {
  "env": {
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 12,
  },
  "plugins": [
    "import"
  ],
  "extends": [
    "plugin:import/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".mjs", ".js", ".json"]
      }
    },
    "import/extensions": [
      ".js",
      ".mjs",
      ".jsx"
    ],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ],
  },

  "rules": {
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": ["error", { "commonjs": true, "caseSensitive": true }],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    "import/named": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    "import/default": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/export.md
    "import/export": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
    "import/namespace": "off",
    
    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    "import/no-named-as-default": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    "import/no-named-as-default-member": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    "import/no-deprecated": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    "import/no-commonjs": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    "import/no-amd": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
    "import/first": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-duplicates": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    "import/no-namespace": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", ["parent", "sibling"], "index", "type"],
        "pathGroups": [
          {
            "pattern": "{react,react*}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "{next,next*}",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "express*",
            "group": "builtin",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["buildin", "object"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "never"
      }
    ],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    "import/newline-after-import": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    "import/prefer-default-export": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    "import/no-restricted-paths": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    "import/max-dependencies": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    "import/no-absolute-path": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    "import/no-dynamic-require": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    "import/no-internal-modules": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    "import/unambiguous": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    "import/no-webpack-loader-syntax": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    "import/no-unassigned-import": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    "import/no-named-default": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
    "import/exports-last": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
    "import/group-exports": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
    "import/no-default-export": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
    "import/no-named-export": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
    "import/no-self-import": "error",

    // https://github.com/import-js/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
    "import/no-cycle": ["off", { "maxDepth": "∞" }],

    // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
    "import/no-useless-path-segments": ["error", { "commonjs": true }],

    // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
    "import/no-relative-packages": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/consistent-type-specifier-style.md
    "import/consistent-type-specifier-style": ["off", "prefer-inline"],

    // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/no-empty-named-blocks.md
    "import/no-empty-named-blocks": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
    "import/no-relative-parent-imports": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
    // "import/no-anonymous-default-export": ["off", {
    //   allowArray: false,
    //   allowArrowFunction: false,
    //   allowAnonymousClass: false,
    //   allowAnonymousFunction: false,
    //   allowLiteral: false,
    //   allowObject: false,
    // }],

    // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
    // "import/dynamic-import-chunkname": ["off", {
    //   importFunctions: [],
    //   webpackChunknameFormat: "[0-9a-zA-Z-_/.]+",
    // }],

    // https://github.com/import-js/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
    // "import/no-unused-modules": ["off", {
    //   ignoreExports: [],
    //   missingExports: true,
    //   unusedExports: true,
    // }],

    // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
    // "import/no-import-module-exports": ["error", {
    //   exceptions: [],
    // }],

    // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // "import/extensions": ["error", "ignorePackages", {
    //   js: "never",
    //   mjs: "never",
    //   jsx: "never",
    // }],
  },
};
