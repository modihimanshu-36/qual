module.exports = function(config) {
    config.set({
      frameworks: ['qunit'],
      files: [
        { pattern: 'src/main/js/calculator.js', type: 'module' },
        { pattern: 'src/main/myAppTests.test.js', type: 'module' }
      ],
      browsers: ['ChromeHeadless'],
      singleRun: true,
      autoWatch: false,
      esm: {
        nodeResolve: true
      }
    });
  };