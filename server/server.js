"use strict";
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const anime = require('./routes/routes.js');
const app = express();
const port = process.env.PORT || 5000;
// app.use(cors({ origin: 'http://localhost:8080' }));
app.use(cors());
app.use('/anime', anime);
app.listen(port, () => {
    console.log(`Server running successfully at ${port}`);
});
//# sourceMappingURL=server.js.map