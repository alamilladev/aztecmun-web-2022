module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^@modules/(.*)': '<rootDir>/src/modules/$1',
    '^@shared/(.*)': '<rootDir>/src/shared/$1',
    '^@ui/(.*)': '<rootDir>/src/ui/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/ui/components/**/*.vue',
    '<rootDir>/src/ui/pages/**/*.vue',
    '<rootDir>/src/app/**/*.js',
    '!<rootDir>/src/app/**/*.mock.js'
  ],
  testEnvironment: 'jsdom'
}
