import { createDefaultEsmPreset, pathsToModuleNameMapper } from 'ts-jest'
import tsconfig from './tsconfig.json' with { type: 'json' }

// отключает type checking ts с помощью isolatedModules если нужна скорость
const presetConfig = createDefaultEsmPreset({ isolatedModules: true })

/** @type {import('ts-jest').JestConfigWithTsJest} **/
const jestConfig = {
  ...presetConfig,
  roots: ['<rootDir>'],
  modulePaths: [tsconfig.compilerOptions.baseUrl],
  // useEsm включает поддержку moduleResolution: "node16"
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths, { useESM: true }),
}

export default jestConfig
