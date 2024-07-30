const config = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    jsxSingleQuote: true,
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
