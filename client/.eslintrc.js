module.exports = {
     env: {
          browser: true,
          es2021: true,
     },
     extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
     parserOptions: {
          ecmaFeatures: {
               jsx: true,
          },
          ecmaVersion: 'latest',
          sourceType: 'module',
     },
     plugins: ['react', 'prettier', 'react-hooks'],
     rules: {
          'prettier/prettier': 'error',
          'import/prefer-default-export': [0],
          'import/extensions': 'off',
          'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
          'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
          'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
     },
};
