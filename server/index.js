// we are importing next and express
const next = require('next')
const express = require('express')
const bodyParser = require('body-parser')


// we are checking if we are in a development environment. Its true or false
const dev = process.env.NODE_END !== 'production'


// we are creating our application in nextjs, in development mode
const app = next({ dev })
const handle = app.getRequestHandler()


const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const moviesData = require(filePath)


// preparing the app to run from pages folder
app.prepare().then(() => {
    //creating express server
    const server = express()
    server.use(bodyParser.json())

    server.get('/api/Prod', (req, res) => {
        return res.json(moviesData)
    })

    //we are handling all the requests comming to our server
    server.get("*", (req, res) => {
        // next.js is handling requests and providing pages where we are navigating to
        return handle(req, res)
        // return res.json({message: 'Hello friends welcome to my site'})
    })

    server.post("*", (req, res) => {
        // next.js is handling requests and providing pages where we are navigating to
        return handle(req, res)
        // return res.json({message: 'Hello friends welcome to my site'})
    })

    // trying to get a value for the port, or 3000 if first is not defined
    const PORT = process.env.PORT || 3000
    server.use(handle).listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})