module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs, .ts, .tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        'unused-imports',
        'prettier'     
    ],
    "rules": {       
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'no-console': 'error',
            '@typescript-eslint/no-unused-vars': ['error'],
            'react/jsx-no-literals': 'error',
            'react/jsx-curly-brace-presence': ['error', {props: 'always', children: 'always'}],
            'function-call-argument-newline': ['error', 'consistent'],
            'arrow-parens': ['error', 'as-needed'],
            'object-shorthand': ['error', 'always']
    }
}
