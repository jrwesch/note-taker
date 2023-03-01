
//import express and path for usage within our file
const express = require('express');
const uuid = require('./helper/uuid');
const dbData = require('./db/db.json');

//create path to interact with our path
const path = require('path');

//create a port for the server to run on
const PORT =  3001;

//initialize an instance of express.js and assign int to the variable app
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//set up static middleware and point it at the public folder
app.use(express.static('public'));

app.get('*', (req,res) =>{
  res.sendFile(path.join(_dirname, 'index.html'));
});

app.get('/notes', (req,res) =>{
  res.sendFile(path.join(_dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => res.json(dbData));

//app.post()


//this function binds and listens for functions on the specified port
//the callback function is called when the server starts listening for requests
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });