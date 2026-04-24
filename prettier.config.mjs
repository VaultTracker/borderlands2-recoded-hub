/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  printWidth: 120,

  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-jsdoc', 'prettier-plugin-tailwindcss'],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@libs/(.*)$', '^@/styles/(.*)$', '^@/(.*)$', './index.css', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
