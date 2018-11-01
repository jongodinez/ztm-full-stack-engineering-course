//Vanilla arrays
//var array = [1, 2, 10, 16];

//es6 syntax

const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num *2);
})
console.log('forEach', double); // returns [2, 4, 20, 32]

//Methods: map, filter, & reduce



//Map
const mapArray = array.map(num => num * 2);
console.log('map', mapArray); //returns [2 , 4, 20, 32]

//map creates a new array = map.array, forEach conducts a bunch of actions that are not defined (susceptible to side effects)



//Filter

const filterArray = array.filter(num => { //filter this array
    return num >5 //return num > 5 until true, then add to filterArray
});
console.log('filter', filterArray); //returns [10. 16]



//Reduce

const reduceArray = array.reduce((accumulator, num) => { //accumulator -- where to store information that happens in body of function
    return accumulator + num

}, 0)

console.log('reduce', reduceArray);