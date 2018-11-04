//Things added to ES7: .includes() and exponential operator

//.includes()

.includes()//added for strings and arrays.

'Hello'.includes('o'); //true

const pets = ['cat','dog','bat'];

pets.includes('dog') //true
pets.includes('bird') //false


//Exponential Operator

const square = (x) => x**2 //x^2

square(2) //4
square(4) //16

const cube = (y) => y**3 //y^3

cube(3) //27
cube(4) //64