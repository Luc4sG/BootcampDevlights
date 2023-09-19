const professor = require('./professor');
const student = require('./student');
const course = require('./course');

function setAssociations() {
course.hasOne(professor);
professor.belongsToMany(course);

course.hasMany(student);
student.belongsToMany(course);
}

module.exports = setAssociations