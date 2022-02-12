module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
        project: './tsconfig.eslint.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import'],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    rules: {
        'import/no-unresolved': [2, { ignore: ['^vscode$'] }],
        curly: ['error'],
        'no-control-regex': ['error'],
        'prefer-const': ['error'],
        'no-useless-escape': ['error'],
        'prefer-rest-params': ['error'],
        'no-empty': ['error'],
        'no-irregular-whitespace': ['error'],
        'no-extra-boolean-cast': ['error'],
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-case-declarations': ['error'],
        'no-fallthrough': ['error'],

        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        'typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        'no-prototype-builtins': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'prefer-spread': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'import/no-duplicates': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/await-thenable': 'off',
        'import/no-named-as-default-member': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
