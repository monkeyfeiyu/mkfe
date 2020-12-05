# `config`

## 使用

> yarn add @mkfe/config -D

### Eslint

```
// .eslintrc.js

// vue
const EslintConfig = require('@mkfe/config/eslint-vue');

// react
const EslintConfig = require('@mkfe/config/eslint-vue');

module.exports = EslintConfig;
```

### prettier

// prettier.config.js

```
const PrettierConfig = require('@mkfe/config/prettier.config');

module.exports = {
    ...PrettierConfig
};
```
