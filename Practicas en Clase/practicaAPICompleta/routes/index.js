const express = require('express');
const professorRoutes = require('./professor');
const studentRoutes = require('./student');
const courseRoutes = require('./course');


const apiRoutes = express.Router();

apiRoutes.use('/professor', professorRoutes);
apiRoutes.use('/student', studentRoutes);
apiRoutes.use('/course', courseRoutes);


module.exports = apiRoutes;