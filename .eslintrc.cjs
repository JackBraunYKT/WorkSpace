module.exports = {
    "env": {
        "node": 1,
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint:recommended", "google"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "require-jsdoc" : 0,
        'max-len': ["error", { "code": 200 }],
        'indent': 'off',
        "quotes": 'off',
    }
}
