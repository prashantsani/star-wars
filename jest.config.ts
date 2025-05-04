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
  // Enable coverage collection
  collectCoverage: true,
  // Specify which files to include (e.g., all files in the src directory)
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts" // exclude type declaration files
  ],
  coverageDirectory: "coverage",  // output directory for coverage reports

  globals: {
    // This is because `next` requires `"jsx": "preserve",` (During build)
    // while Jest requires `"jsx": "preserve",`"jsx": "react"` 
    // (Plus some more differences between jest and next)
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
};