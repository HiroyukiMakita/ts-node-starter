/**
 * Configuring Jest
 * https://deltice.github.io/jest/docs/ja/configuration.html
 */
import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',

    // https://qiita.com/tontoko/items/ab14529448219058e3f0
    testRunner: 'jest-circus/runner',
  };
};
