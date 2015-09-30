//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
};

//Now create three instances of Person with data you make up

  //code here
var person1 = new Person("Alex", 28);
var person2 = new Person("Indiana Jones", 38);
var person3 = new Person("Henry Rollengardner", 13);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	alert("Hello, my name is " + this.name);
};

person1.sayName();