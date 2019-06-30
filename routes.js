const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const phonesRoutes = require('./routes/phones');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/phones', phonesRoutes);

// Export our changes
module.exports = app;