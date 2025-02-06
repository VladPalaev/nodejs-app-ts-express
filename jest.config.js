import { createDefaultPreset, pathsToModuleNameMapper } from 'ts-jest'
import tsconfig from './tsconfig.json' with { type: 'json' }

// отключает type checking ts
const presetConfig = createDefaultPreset({ isolatedModules: true })

/** @type {import('ts-jest').JestConfigWithTsJest} **/
const jestConfig = {
  ...presetConfig,
  roots: ['<rootDir>'],
  modulePaths: [tsconfig.compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(tsconfig.compilerOptions.paths),
}

export default jestConfig
