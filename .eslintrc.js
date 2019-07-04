module.exports = {
    extends: [
        'airbnb',
        'plugin:react/recommended',
    ],
    env: {
        browser: true,
        es6: true,
    },
    parser: 'babel-eslint',
    plugins: [
        'react-hooks',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'operator-linebreak': [2, 'after'],
        indent: [
            2, 
            2,
        ],
        'max-len': [
            1, 
            80, 
            4,
            {
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
                ignorePattern: '^(import.*|const\\s.*\\s=\\srequire.*)',
                ignoreRegExpLiterals: true,
            }, 
        ],
        'jsx-ally/label-has-associated-control': 1,
        'jsx-ally/label-has-for': 1,
        'jsx-ally/anchor-is-valid': 1,
        'react/display-name': 0,
        'react/no-array-index-key': 1,
        'react/destructuring-assignment': 1,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': [
            2,
            2,
        ],
        'react/jsx-key': 1,
        'react/require-default-props': 1,
        'react/forbid-props-types': 1,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'import/no-extraneous-dependencies': [
            2, {devDependencies: ['config/**/*', '**/*.spec.js'] },
        ],
    },
    globals: {
        describe: true,
        beforeEach: true,
        expect: true,
        it: true,
        jest: true,
        afterEach: true,
        fail: true,
    }
}