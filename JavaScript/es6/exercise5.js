// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

let array1 = [];
array.forEach(user => {
  let { username } = user;
  username = username + '!';
  array1.push(username);
});

console.log(array1);

//Create an array using map that has all the usernames with a "? to each of the usernames

const userQuestion = array.map(user => {
  let { username } = user; 
  return username + '?';
}); 

console.log(userQuestion);

//Filter the array to only include users who are on team: red

const sportsTeams = array.filter(user => {
  return user.team === 'red';
});

console.log(sportsTeams);


//Find out the total score of all users using reduce

const totalScore = array.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);

console.log(totalScore);

// (1), what is the value of i? 

//i is the value of whatever you index it to. The index of the array.

// (2), Make this map function pure:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log(newArray);


