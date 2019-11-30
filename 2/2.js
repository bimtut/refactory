// import Axios from "axios"
const axios = require('axios')
const postUrl = 'https://jsonplaceholder.typicode.com/posts'
const userUrl = 'https://jsonplaceholder.typicode.com/users'
let postData = ''
let userData = ''
axios.get(postUrl)
    .then(data => {
        postData = data
        // console.log(postData)
    })
    .catch(err => console.log(err));

axios.get(userUrl)
    .then(data => {
        userData = data
        // console.log(userData.data)
        return userData
    })
    .catch(err => console.log(err));

console.log(userData)


// // let post = postData[data]
// // let user = userData.data
// console.log(userData)
// // for (let i = 0; i < postData.length ; i++) {
// //     for (let j = 0; )
// // }
// // let fetch  = require('fetch')
// const fetch = require("node-fetch");
// fetch('http://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(result => {
//     // console.log(result)
//     fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(user => {
//     console.log(user)
//     console.log(result, 'hahahaha')
    
// })
// })
