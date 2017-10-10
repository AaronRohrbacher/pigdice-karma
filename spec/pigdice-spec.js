var Player = require('./../js/pigdice.js').pigdiceModule;

describe('Player', function () {
  it('should return a name entered by user', function() {
    var playa = new Player("Javi")
    expect(playa.name).toEqual("Javi");
  });
  it('should return a number when user rolls', function() {
    var playa = new Player("AAron")
    expect(playa.roll()).toEqual(jasmine.any(Number));
  });
});
