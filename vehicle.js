class vehicle{
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
  // searchOne(){
  //   var name = prompt();
  //   if (name == "Toyota"){
  //     console.log("Vehicle ID: " + this.vehicleID );
  //     console.log("Vehicle Model: " + this.vehicleModel );
  //     console.log("Vehicle Make: " + this.vehicleMake);
  //     console.log("Vehicle Year: " + this.vehicleYear);
  //     console.log("Vehicle Color: "  + this.vehicleColor);
  //
  //   }
  // }
}

var carOne = new vehicle("Prius","Toyota", 2018, "red" );
var carTwo = new vehicle("Corola", "Toyota", 2017, "white");
var carThree = new vehicle("Camry", "Toyota", 2015, "Black");
var carFour = new vehicle("Yaris", "Toyota", 2016, "pink");
var carFive = new vehicle("Camry", "Toyota", 2019, "Black");
var search = new vehicle();

carFive.display();
search.searchOne();
