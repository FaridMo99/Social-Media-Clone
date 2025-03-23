import globals from 'globals'
import pluginJs from '@eslint/js'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // Define globals for the browser
    languageOptions: {
      globals: {
        ...globals.browser, // Keep the browser globals
        jest: true, // Add Jest globals (test, expect, describe)
      },
    },
  },

  // Use the recommended ESLint settings
  pluginJs.configs.recommended,
]
