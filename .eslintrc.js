module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  globals: {
    "fetch": false,
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ios.js", ".android.js"],
      },
    }
  },
  rules: {
    "semi": ["error", "never"],
    "space-before-function-paren": ["error", "never"],
    "no-use-before-define": "off",
    "consistent-return": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "off",
    "no-console": "off",
    "func-names": "off",
    "no-else-return": "off",
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "no-return-assign": "off",
  },

}
