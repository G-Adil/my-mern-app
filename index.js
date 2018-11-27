const express = require('express');
const app = new express();

require('./routes/testRoutes')(app);

const port = process.env.port || 5000;
app.listen(port);