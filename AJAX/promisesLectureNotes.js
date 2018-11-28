const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke!');
    }
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'first promise')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second promise')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'last promise')
})

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values);
    })

const urls = [
'https://jsonplaceholder.typicode.com/users', 
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/comments'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const successPromise = new Promise((resolve, reject) => {
    setTimeout(resolve,4000, "success")
})

Promise.all([successPromise])
    .then(values => {
    console.log(values);
})

// #2) Run the above promise and make it console.log "success"
const successPromise = new Promise((resolve, reject) => {
    setTimeout(resolve,4000, "success")
})

Promise.all([successPromise])
    .then(console.log('success'));

////////////////////////////////////////////////////////////////////////////////////////

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() {
    await movePlayer(100, 'Left')
    await movePlayer(400, 'Left')
    await movePlayer(10, 'Right')
    await movePlayer(330, 'Left')
}