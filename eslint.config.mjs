import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
    js.configs.recommended,
    ...vue.configs['flat/recommended'],
    prettier,
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                process: 'readonly',
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',
                alert: 'readonly',
            },
        },
        plugins: {
            vue,
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                    tabWidth: 4,
                    trailingComma: 'es5',
                    printWidth: 100,
                    bracketSpacing: true,
                    arrowParens: 'always',
                    endOfLine: 'lf',
                },
            ],
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': 'off',
            'vue/first-attribute-linebreak': 'off',
            'vue/max-attributes-per-line': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'any',
                        normal: 'never',
                        component: 'always',
                    },
                },
            ],
        },
    },
    {
        ignores: [
            'node_modules/**',
            'vendor/**',
            'public/**',
            'storage/**',
            'bootstrap/cache/**',
            '*.min.js',
        ],
    },
];
