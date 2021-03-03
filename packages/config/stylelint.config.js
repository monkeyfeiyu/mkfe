module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-rational-order'],
    plugins: ['stylelint-prettier', 'stylelint-scss'],
    rules: {
        'max-nesting-depth': 10,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['/global/'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['/v-deep/'] }],
        'comment-empty-line-before': null,
        'no-invalid-double-slash-comments': null,
        'no-descending-specificity': null,
        'declaration-empty-line-before': null,
        'unit-no-unknown': null,
        'prettier/prettier': true,
        'font-family-no-missing-generic-family-keyword': null
    }
};
