const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,scss}'), ...createGlobPatternsForDependencies(__dirname)],
    theme: {
        extend: {},
    },
    plugins: [],
};
