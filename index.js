// Import Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define the route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});