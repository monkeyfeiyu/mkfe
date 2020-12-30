const EslintConfig = require('@mkfe/config/eslint');

module.exports = {
    ...EslintConfig,
    rules: {
        ...EslintConfig.rules
    }
};
