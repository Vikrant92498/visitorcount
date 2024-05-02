// db.js

const mongoose = require('mongoose');

// MongoDB connection URI
const mongoDBURI = 'mongodb+srv://vikrantkumar92498:9jw1lTA4gpyz7FXF@cluster0.g0pcksh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notifications of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to know when we are connected)
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Export the database connection
module.exports = db;
