import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

console.log('es')

export default tseslint.config(
  {
    ignores: ['dist/*'],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      // Указываем версию ECMAScript для ESLint, чтобы он проверял синтаксические конструкции,
      // которые не соответствуют указанной версии. Например, если указать `ecmaVersion: 2015`,
      // ESLint будет ругаться на синтаксис, появившийся после ES6 (например, `**`, `async/await`,
      // trailing commas в параметрах функций и т.д.).
      // Важно помнить, что `ecmaVersion` контролирует только синтаксические конструкции,
      // но не глобальные объекты (например, `Promise`, `Set`, `Map` и т.д.). Это означает,
      // что даже если вы укажете `ecmaVersion: 5`, ESLint не будет ругаться на использование
      // `Promise`, так как он не знает, в какой среде выполнения будет запускаться код.
      // Чтобы запретить использование глобальных объектов, которые не соответствуют указанной
      // версии ECMAScript, нужно явно указать их в параметре `globals`. Например, для ES5
      // можно использовать `globals: { ...globals.es5 }`, чтобы запретить использование
      // `Promise`, `Set`, `Map` и других объектов, появившихся в более новых версиях.
      // Таким образом, ESLint будет проверять как синтаксис, так и использование глобальных
      // объектов, соответствующих указанной версии ECMAScript.
      // Но это все работает для js, не ts
      // ecmaVersion: 2015,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslintPluginPrettierRecommended,
)
