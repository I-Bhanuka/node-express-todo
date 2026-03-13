// Import Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Serve static files from the "public" directory when requested with the "/static" path
app.use("/static", express.static("public"));

// Middleware to parse URL-encoded data from the request body
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine for rendering templates
app.set("view engine", "ejs");

// Define the route for the root URL
app.get('/', (req, res) => {
    // Render the "todo.ejs" template when the root URL is accessed 
    res.render('todo.ejs');
});

// Define a POST route to handle form submissions from the root URL
app.post('/', (req, res) => {
    console.log(req.body); // Log the form data to the console
})

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});