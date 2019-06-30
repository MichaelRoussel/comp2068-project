const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const phonesRoutes = require('./routes/phones');
const monitorsRoutes = require('./routes/monitors');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/phones', phonesRoutes);
app.use('/monitors', monitorsRoutes)

// Export our changes
module.exports = app;