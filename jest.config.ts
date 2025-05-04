/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',              // Use ts-jest preset for TS support
  testEnvironment: 'jsdom',       // Simulate browser environment for React tests
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform .ts and .tsx files with ts-jest
  },
  // This setting tells Jest to transform files even in Next.js dependencies if needed.
  transformIgnorePatterns: [
    '/node_modules/(?!next/)',    // Add exceptions for Next.js modules if necessary
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',  // Stub out CSS imports
  },
};