const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile} = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
  
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  console.info(`${req.method} request received to submit fieedback'`);

  const {time, error_id, errors} = req.body;

  if (time && error_id && errors){
    const newData = {
      time: Date.now(),
      error_id: uuidv4(),
      errors: {
        tip,
        topic,
        username,
      }
    }
    readAndAppend(newData, '../db/diagnostics.json');
    const response = {
      status: 'success',
      body: newData,
    };
  }

});

module.exports = diagnostics;
