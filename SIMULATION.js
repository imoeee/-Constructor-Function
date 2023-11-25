
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || 'Petrol';
}

Vehicle.prototype.accelerate = function (speed) {
    if (speed > 0) {
        this.speed += speed;
    }
    console.log(`The speed is accelerating. Current speed : ${this.speed}`)
}

Vehicle.prototype.brake = function (speed) {
    if (speed > 0) {
        this.speed -= speed;
    }
    console.log(`The speed is decreasing. Current speed : ${this.speed}`)
}

Vehicle.prototype.refuel = function () {
    console.log(`The vehicle is refueling`)
}


//  Define the constructor
function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
}
// Inherit from Vehicle

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking. Honk! Honk!`);
}
let car1 = new Car('Toyota', 'Camry', 50);
// console.log(car1);

// car1.accelerate(120);
// car1.honk();

//  Define the constructor 2

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || 'NA';
}


Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function () {
    console.log("The airplane is taking off");
}


let myAirplane= new Airplane('Boeing', '747',10000, 'Jet Fuel', 4, true);

console.log(myAirplane);
myAirplane.accelerate(1000);
myAirplane.brake(900);
myAirplane.refuel();
myAirplane.takeOff(); 