import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const EXTERNAL_LIBS = ['react', 'react-dom', 'next', 'zod'];

const eslintConfig = [
    ...compat.config({
        extends: [
            'next',
            'next/core-web-vitals',
            'next/typescript',
            'plugin:prettier/recommended',
            'plugin:jsx-a11y/recommended',
        ],
        plugins: ['jsx-a11y', 'import', 'unused-imports'],
        ignorePatterns: ['node_modules', 'dist', 'build', 'out', '.next'],
        rules: {
            'newline-before-return': 'error',
            'no-prototype-builtins': 'error',
            'max-lines': ['warn', 300],
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/consistent-type-imports': 'error',
            'react/react-in-jsx-scope': 'off',
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/aria-props': 'warn',
            'jsx-a11y/aria-proptypes': 'warn',
            'jsx-a11y/aria-unsupported-elements': 'warn',
            'jsx-a11y/role-has-required-aria-props': 'warn',
            'jsx-a11y/role-supports-aria-props': 'warn',
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                },
            ],
            'no-undef': 'off',
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'import/no-duplicates': 'warn',
            'import/prefer-default-export': 'off',
            'import/no-default-export': 'off',
            'import/no-absolute-path': 'error',
            'import/no-cycle': 'error',
            'import/no-self-import': 'error',
            'import/no-named-as-default': 'error',
            'import/no-internal-modules': 'off',
            'import/order': [
                'error',
                {
                    'pathGroups': [
                        ...EXTERNAL_LIBS.map((lib) => ({
                            pattern: `${lib}**`,
                            group: 'external',
                            position: 'before',
                        })),
                        {
                            pattern: './**/*.css',
                            group: 'sibling',
                            position: 'after',
                        },
                        {
                            pattern: './**/*.module.css',
                            group: 'sibling',
                            position: 'before',
                        },
                    ],
                    'newlines-between': 'always',
                    'pathGroupsExcludedImportTypes': ['builtin'],
                    'distinctGroup': true,
                    'alphabetize': {
                        order: 'asc',
                        orderImportKind: 'asc',
                    },
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                },
            ],
        },
    }),
];

export default eslintConfig;
