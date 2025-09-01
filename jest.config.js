/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
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
