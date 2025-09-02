/** @type {import('ts-jest').JestConfigWithTsJest} **/
const config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.test.ts$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1"
  }
};

module.exports = config;