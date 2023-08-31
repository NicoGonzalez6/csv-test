import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  displayName: {
    name: 'backend2',
    color: 'greenBright',
  },
  verbose: true,
  setupFiles: ['dotenv/config'],
  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'node',
  collectCoverage: true,
  globalTeardown: '<rootDir>/__tests__/global-teardown.ts',
  forceExit: true,
  testPathIgnorePatterns: ['<rootDir>/__tests__/global-teardown.ts'],
};

export default config;
