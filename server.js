const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors')


app.use(cors())
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

// Defining Server
app.listen(3000, () => console.log('listening at 3000'));



// Define routes
app.get('/api', async (request, response) => {
  console.log("Got a GET request from the Index Page");

  const res = await fetch('http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals');
  const data = await res.json();
  console.log(JSON.stringify(data));

  response.json({
    status: 'GET Request Received',
    data: data
  })
})
