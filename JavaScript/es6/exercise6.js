//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property 'a' for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor(name, type, color, sound) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.sound = sound;
    }
    introduce() {
        alert(`${this.sound}, I am ${this.name}. I am a proud ${this.type} and I am ${this.color}.`);
    }
} 

class Mamal extends Animal {
    constructor(name, type, color, sound) {
        super(name, type, color, sound)
    }
}

const cow = new Mamal('Milk', 'cow', 'white with black spots', 'Mooooooo!!');
const dog = new Mamal('Spot','dog','black','Woof!');