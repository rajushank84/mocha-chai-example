var Car = function (color, driveType, fe) {
  this.wheels = 4;
  this.color = color || null;
  this.driveType = driveType || "fwd";
  this.fe = fe || 20;
  this.fuel = 0;
  this.totalMileage = 0;
  this.maxFuel = 15;
};

Car.prototype.drive = function (miles) {
  if (!this.fuel) {
    throw new Error("No fuel in car!");
    return;
  }

  var milesLeftOnCar = this.fuel * this.fe;

  if (milesLeftOnCar < miles) {
    throw new Error("Not enough fuel in car!");
    return;
  }

  this.totalMileage = this.totalMileage + miles;
  this.fuel = this.fuel - (miles/this.fe);
};

Car.prototype.fill = function (gallons) {
  if (this.fuel + gallons > this.maxFuel) {
    throw new Error("Can't fill " + gallons + " in a car that can hold only " + this.maxFuel + " when it alreadh has " + this.fuel + ".");
    return;
  }

  if (typeof gallons === "undefined") {
    this.fuel = this.maxFuel;
  } else {
    this.fuel = this.fuel + gallons;
  }
};
