var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(user, pass) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === user &&
            database[i].password === pass) {
            return true;

            }
        }
    return false;    
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
            console.log(newsfeed);
        } else {
            alert("Sorry, wrong username or password!");
        }

}

var database = [
    {
    username: "jonathan",
    password: "password1"
    },
    {
    username:"ingrid",
    password:"777"
    }
];

var newsfeed = [{
    username: "Robert",
    timeline: "wow this video game sucks"
    }, {
    username: "Susy",
    timeline: "wow this video game sucks"
    }, {
    username: "Sally",
    timeline: "I love you :)"
    }
]


signIn(userNamePrompt, passwordPrompt);