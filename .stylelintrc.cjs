module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer', 'variants', 'responsive'],
      },
    ],
    'at-rule-no-deprecated': null,
    'shorthand-property-no-redundant-values': true,
    'declaration-property-value-disallowed-list': {
      'margin-top': ['.*'],
      'margin-bottom': ['.*'],
      'padding-top': ['.*'],
      'padding-bottom': ['.*'],
      'margin-left': ['.*'],
      'margin-right': ['.*'],
      'padding-left': ['.*'],
      'padding-right': ['.*'],
    }, // Sets it so you can't use margin-top, margin-bottom, padding-top, padding-bottom, margin-left, margin-right, padding-left, padding-right but must combine them either into padding-block or padding-inline or padding
    'declaration-property-value-no-unknown': null,
    'no-descending-specificity': null,
  },
};
