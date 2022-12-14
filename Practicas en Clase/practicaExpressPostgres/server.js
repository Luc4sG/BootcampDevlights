const express = require('express');
const app = express();
const apiRoutes = require('./routes/index');
app.use(express.json());


app.use("/api", apiRoutes);


app.listen(3000, () => {
    console.log('Server on port 3000');
});
