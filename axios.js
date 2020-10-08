const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hello world'
    })
})

axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(result => {
        res.status(200).json({
            message: 'you sent get request'
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
axios.post('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(result => {
        res.status(200).json({
            message: 'you sent post request'
        })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
axios.delete('http://jsonplaceholder.typicode.com/todos?_limit=5')
   .then(result => {
        res.status(200).json({
            message: 'you sent delete request'
           

           })
    }).catch(err => {
        res.status(500).json({
            error: err
        })
    })
    axios.put('http://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(result => {
        res.status(200).json({
            message: 'you sent put request'
        })
    }).catch( err=>{
        res.status(500).json({
            error:err
        })
    })


