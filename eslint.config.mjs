import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.,
  eslintConfigPrettier,
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.cursor/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'public/**',
    'dist/**',
    '.temp/**',
  ]),
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
]);

export default eslintConfig;
