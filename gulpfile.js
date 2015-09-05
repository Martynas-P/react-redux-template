var path = require('path');

var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell');
var _ = require('lodash');

gulp.task('development', function() {

  // start webpack
  shell.task('./node_modules/.bin/webpack-dev-server --config webpack.development.js --progress --colors --hot')();

  // If a file inside our project changes, then run all the tests
  // in the folder where the file was changed.
  // Ignoring files in /node_modules/ because we don't care about these
  // files and because we might run into limits of files
  // OS allows us to watch
  watch(['./**/*.js', '!./node_modules/'], function(files) {
    var additionalParameters = '';

    var testFolder = path.dirname(files.path);

    if (!_.endsWith(testFolder, '__tests__')) {
      testFolder = path.join(testFolder, '__tests__');
    }

    if (_.startsWith(testFolder, path.resolve(__dirname, 'assets'))) {
      // we are using Babel to transpile all frontend resources, therefore,
      // we need to transpile them when we run the tests
      additionalParameters = ' --config jest-babel.json';
    }

    shell.task([
      './node_modules/.bin/jest ' + testFolder + ' --verbose' + additionalParameters
    ], {
      ignoreErrors: true
    })();
  });

  // start the app using nodemon and print only errors to the shell
  shell.task('NODE_ENV=development ./node_modules/.bin/nodemon app.js 2>&1 >/dev/null')();

});

