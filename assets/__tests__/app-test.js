jest.autoMockOff();

describe("Application's entry point", function() {
  var app = require('../app');

  it('Does not have syntax errors', function() {
    expect(1).toBe(1);
  });

});