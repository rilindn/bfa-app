module.exports = {
  extends: 'universe/native',
  rules: {
    'import/namespace': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
