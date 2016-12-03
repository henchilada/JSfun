// a quick way to test out JSON
var i = 0;
var person = { 
	"name" : ["Henry","Dominique","Keiko"],
	"age" : ["28","25","12"],
	"size" : ["medium","small","tiny"],
	"type" : ["human", "human", "kitty"]
};
function printy () {
	while (i < person.name.length) {
		console.log(person.name[i] + " is age " + person.age[i] + " and size " + person.size[i]);
		i++;
	}
	console.log(person.name[2] + " is a " + person.size[2] + " " + person.size[2] + " " + person.type[2]);
}

//trying to run through the person object and print each name with a for loop
function printy2(){
	for (var idx = 0; idx < person.name.length; idx++){
		console.log(person.name[idx]);
	}
}

printy2();
