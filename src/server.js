// Import dependecies
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// Initalize express
const server = express()

// Get body from req
server.use(express.urlencoded({extended: true}))

// Get static files
server.use(express.static('public'))

// Configure template engine
server.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// Create paths
server
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Initialize server
server.listen(5500)