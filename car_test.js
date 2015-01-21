var expect = chai.expect;

describe("Car tests", function () {
  var car = new Car();

  describe("Constructor", function () {
    it("should have zero fuel", function () {
      expect(car.fuel).to.equal(0);
    });
  });

  describe("Driving tests", function () {
    it("should throw error when attempted to drive without fuel", function () {
      expect(function () {
        car.drive(5);
      }).to.throw(Error);
    });

    it("should set fuel to max when fill is called without argument", function () {
      car.fill();
      expect(car.fuel).to.equal(car.maxFuel);
    });

    it("should set fuel according to driving", function () {
      var initFuel = car.fuel,
        miles = 5;
      var expectedFuelLeft = initFuel - (miles / car.fe);

      car.drive(miles);
      expect(car.fuel).to.equal(expectedFuelLeft);
    });

    it("should throw error when attempted to drive more than fuel left in car", function () {
      expect(function () {
        car.drive(10000);
      }).to.throw(Error);
    });
  });
});
