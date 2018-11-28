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