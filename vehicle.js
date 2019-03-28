class Vehicle{
  constructor(model, make, year, color){
    this.vehicleID = Math.random()*100000000000000000;
    this.vehicleModel = model;
    this.vehicleMake = make;
    this.vehicleYear = year;
    this.vehicleColor = color;
  }
display(){
console.log("Vehicle ID: " + this.vehicleID );
console.log("Vehicle Model: " + this.vehicleModel );
console.log("Vehicle Make: " + this.vehicleMake);
console.log("Vehicle Year: " + this.vehicleYear);
console.log("Vehicle Color: "  + this.vehicleColor);


  }
}

class Car extends Vehicle{

constructor(model, make, year, color, licensePlate, wheelCount, cylinders, miles, fuelType){
  super(model, make, year, color);

  this.licensePlate = licensePlate;
  this.wheelCount = wheelCount;
  this.cylinders = cylinders;
  this.miles = miles;
  this.fuelType = fuelType;

}
}
class MotorBike extends Vehicle{
  constructor(model, make, year, color, licensePlate, chain, tires, cylinders, hourPower){
    super(model, make, year, color);
    this.licensePlate = licensePlate;
    this.chain = chain;
    this.tires = tires;
    this.cylinders = cylinders;
    this.hourPower = hourPower;

  }

}
//Inheritamce One Using car with different Prametres
let legitCar = new Car("Golf", "VW", 2001, "silver", "1HGK908", 4, 8, 50000, "diesel");
console.log(legitCar.vehicleModel);
//Inheritance TWo with Motor Bike
let bikeOne = new MotorBike("ninja", "kawasaki", 2015, "black", "1J525G", "Single", 2, 4, 100);
let bikeTwo = new MotorBike("ninjaTwo", "kawasakiTwo", 2018, "red", "1H54GQ", "Single", 3, 4, 125);
console.log(bikeOne.tires);
console.log(bikeOne.vehicleModel);
console.log(bikeTwo.vehicleYear);

//Manually Created Cars
var carOne = new Vehicle("Prius","Toyota", 2018, "red" );
var carTwo = new Vehicle("Corola", "Toyota", 2017, "white");
var carThree = new Vehicle("Camry", "Toyota", 2015, "Black");
var carFour = new Vehicle("Yaris", "Toyota", 2016, "pink");
var carFive = new Vehicle("Camry", "Toyota", 2019, "Black");
