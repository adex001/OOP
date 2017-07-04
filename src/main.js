"use strict"


// to define a vehicle class! it is also called a base class.
class Vehicle{

//Initializes the constructor
//'now' means number of wheels and regNo means 'registration number'
constructor(name, model, now, regNo){

// this shows an example of encapsulation and abstraction
//it sets the name to the Vehicle object.

this.name = name;
this.model = model;
this.now = now;
this.regNo = regNo;

}

//This is a drive method for the Vehicle class as all vehicles can drive
drive () {

	return "Vehicle driving!";
}
//To turn off the engine
engineOff(){

	return "Engine switched off!";
}
// To turn the engine on
engineOn () {

	return "Engine swiched on!"
}




}

// A subclass of Vehicle
//Displays Inheritance.
//A Car IS_A Vehicle
class Car extends Vehicle {

	constructor(name,model,now,regNo, speed){
		super();
		this.speed = speed;
	}

//Overriding the drive method in the super class

drive () {

	return "This car is cruising at a speed of " +this.speed +" Km/h";
}






}

//Creates a Train Class which is a type of vehicle
class Train extends Vehicle {
	
	//Here is the constructor for the Train class
	constructor(name,model,now,regNo){
		super();
		this.speed = 40;
		
	}
	//Overriding the Vehicle drive() method
	drive (){

		return "The Train is moving at " +this.speed +" Km/h";
	}


}

//Creates a new Car Object
const bentley = new Car("Bentley", "GL-450", "4", "AAA 654 XB", "300" );

console.log(bentley.engineOn()); //calls the engine method from 
console.log(bentley.drive());
console.log(bentley.engineOff());


//Creates a new Train Object
const lagosTrain = new Train("lagosTrain", "Tr-123", "15", "AAA 111 CM");
console.log(lagosTrain.engineOn());
console.log(lagosTrain.drive());
console.log(lagosTrain.engineOff());
