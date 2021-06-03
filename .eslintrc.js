module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'node': true
    },
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'dollar-sign'
    ],
    'extends': ['eslint:recommended'],
    'rules': {
        'dollar-sign/dollar-sign': ['error', 'ignoreProperties'],
        'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
        'no-unused-vars': 'warn',
        'quotes': ['warn', 'single'],
        'no-var': 'error',
        'no-console': 'warn',
    }
}
