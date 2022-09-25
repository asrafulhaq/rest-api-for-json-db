const express = require('express');
const { getTeachers, createTeacher } = require('../controllers/teacherController');



// create a router 
const router = express.Router();


// routes 
router.route('/').get(getTeachers).post(createTeacher);




// export router 
module.exports = router;


