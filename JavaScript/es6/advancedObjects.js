//Three important things in objects: reference type, context, instantiation



//Reference type

var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
//object1 != object3 bc of reference types

//primitive types are types used and known by js, 
//reference types, or not primitive types, are made by the programmer
//objects create different boxes, meaning even if the values in the objects are the same they are not !=



//Context vs Scope

function b () {
    let a = 4;
}
console.log(a); //does not print because 'a' is in the b() universe. This is SCOPE.

//intro to 'this'
//this means - what *object environment* are we in right now, ie what is to the left of the dot.

function a() {
    console.log(this); //this still refers function
}

const object4 = {
    a: function() {
        console.log(this); 
    }
}
//when you run object4.a() it runs the object



//Instantiation - you make instances, or multiple copies of an object.

class Player {
    constructor(name, type) {
        console.log('player',this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`WEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shaun', 'Dark Magic');
