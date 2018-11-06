//.padStart()
//.padEnd()
//examples

"dog".padStart(10) //prints "          dog" with 10 spaces before 'dog'

"dog".padEnd(10) //prints "dog          " with 10 spaces after 'dog'

const fun = (
    a,
    b,
    c,
    d,
    ) => {
    console.log(a);
}
fun(1,2,3,4,)
//prints 1, logging fun() into variable fun

///////////////////////////////////////////////////////////

let obj= {
    username0: 'santa',
    username1: 'rudolf',
    username2: 'mr. grinch'

}

//Object.keys(obj) treated the object like an array

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

///////////////////////////////////////////////////////////


Object.values
Object.entries

Object.values(obj).forEach(value => {
    console.log(value);
}) //prints santa, rudolf, mr. grinch

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
}) //prints [santa0, rudolf1, mr. grinch2]
