import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactPlugin from 'eslint-plugin-react';
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import rootConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default tseslint.config(
  ...rootConfig,
  jsxA11y.flatConfigs.recommended,
  reactRefresh.configs.vite,
  {
    ignores: [ `**/*.min.js`, `**/public/tinymce`, `**/dev-dist/*` ],
  },
  ...fixupConfigRules(compat.extends(
    `plugin:react-hooks/recommended`,
  )),
  {
    ...reactPlugin.configs.flat.recommended,
    files: [ `**/*.{tsx,jsx}` ],
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.commonjs,
        ...globals.browser,
        ...globals.jquery,
      },
    },
    plugins: {
      "react": reactPlugin,
      "react-hooks": fixupPluginRules(reactHooks),
    },
    rules: {
      "@stylistic/indent-binary-ops": 0,
      "@stylistic/jsx-closing-bracket-location": 0,
      "@stylistic/jsx-closing-tag-location": 0,
      "@stylistic/jsx-one-expression-per-line": 0,
      "@stylistic/jsx-wrap-multilines": 0,
      "@stylistic/max-len": [ 2, {
        code: 120,
        ignoreComments: true,
        ignorePattern: `className?="[^"]+"`,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      }],
      "jsx-quotes": [ 2, `prefer-double` ],
      "no-extra-parens": [ 2, `all`, {
        nestedBinaryExpressions: false,
      }],
      "react-hooks/exhaustive-deps": `warn`,
      "react-hooks/rules-of-hooks": `error`,
      "react/destructuring-assignment": 2,
      "react/function-component-definition": [ 2, {
        namedComponents: `arrow-function`,
        unnamedComponents: `arrow-function`,
      }],
      "react/jsx-boolean-value": [ 2, `never` ],
      "react/jsx-closing-bracket-location": [ 2, `line-aligned` ],
      "react/jsx-curly-brace-presence": [ 2, {
        children: `never`,
        propElementValues: `always`,
        props: `never`,
      }],
      "react/jsx-curly-newline": [ 2, `consistent` ],
      "react/jsx-curly-spacing": [ 2, {
        children: true,
        when: `never`,
      }],
      "react/jsx-equals-spacing": 2,
      "react/jsx-first-prop-new-line": [ 2, `multiline-multiprop` ],
      "react/jsx-fragments": [ 2, `syntax` ],
      "react/jsx-indent": [ 2, 2, {
        indentLogicalExpressions: true,
      }],
      "react/jsx-indent-props": [ 2, 2 ],
      "react/jsx-max-props-per-line": [ 2, {
        maximum: 1,
        when: `multiline`,
      }],
      "react/jsx-no-useless-fragment": 2,
      "react/jsx-one-expression-per-line": [ 2, {
        allow: `non-jsx`,
      }],
      "react/jsx-pascal-case": 2,
      "react/jsx-props-no-multi-spaces": 2,
      "react/jsx-tag-spacing": [ 2, {
        afterOpening: `never`,
        beforeClosing: `never`,
        beforeSelfClosing: `always`,
        closingSlash: `never`,
      }],
      "react/jsx-wrap-multilines": [ 2, {
        arrow: `never`,
        assignment: `never`,
        condition: `never`,
        declaration: `never`,
        logical: `never`,
        prop: `never`,
        return: `never`,
      }],
      "react/no-unescaped-entities": 0,
      "react/prop-types": 0,
      "react/self-closing-comp": 2,
      'tailwindcss/no-custom-classname': 0,
    },
    settings: {
      react: {
        version: `detect`,
      },
    },
  },
  {
    files: [ `**/*.{ts,tsx}` ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/unbound-method": 0,
    },
  }, {
    files: [ `**/*.tsx` ],
    rules: {
      "@stylistic/indent": [ 2, 2, {
        SwitchCase: 1,
      }],
      "@stylistic/no-extra-parens": [ 2, `all`, {
        nestedBinaryExpressions: false,
      }],
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
    },
  },
  // Specific to Shadcn UI Components
  {
    files: [ `**/components/ui/*.tsx` ],
    rules: {
      "@stylistic/max-len": 0,
    },
  },
);
