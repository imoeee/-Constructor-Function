// Constructor function for Vehicle
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Method to display vehicle information
Vehicle.prototype.displayInfo = function () {
  console.log(`${this.year} ${this.make} ${this.model}`);
};


// Constructor function for FourWheeler
function FourWheeler(make, model, year, numDoors) {
  // Inherit properties from Vehicle using constructor chaining
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

// Use Object.create() for prototype chaining
FourWheeler.prototype = Object.create(Vehicle.prototype);

// Method specific to FourWheeler
FourWheeler.prototype.displayDoorsInfo = function () {
  console.log(`Number of doors: ${this.numDoors}`);
};

// Example usage
const car = new FourWheeler('Toyota', 'Camry', 2022, 4);

car.displayInfo(); // Displays: 2022 Toyota Camry
car.displayDoorsInfo(); // Displays: Number of doors: 4
