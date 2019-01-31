module.exports = {
  roots: [
    '<rootDir>'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./enzyme.config.ts'],
  moduleNameMapper: {
    '\\.(png|jpg|gif|ttf|eot|svg)$': '<rootDir>/__tests__/fileMock.js'
  }
};
