import tseslint from 'typescript-eslint';
import globals from 'globals';
import rootConfig from '../../eslint.config.mjs';

export default tseslint.config(
  ...rootConfig,
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  // TODO: Uncomment and switch to es modules
  // {
  //   rules: {
  //     "import/extensions": [ `error`, `ignorePackages` ],
  //   },
  // },
  {
    files: [ `**/*.spec.{ts}` ],
    languageOptions: {
      globals: {
        ...globals.jest,
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
      "@typescript-eslint/explicit-function-return-type": `off`,
      "@typescript-eslint/explicit-module-boundary-types": `off`,
      "@typescript-eslint/interface-name-prefix": `off`,
      "@typescript-eslint/no-explicit-any": `off`,
    },
  },
);
