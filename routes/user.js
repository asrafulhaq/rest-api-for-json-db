const express = require('express');
const { getAllUser, createUser, singleUser, deleteUser, updateUser } = require('../controllers/userController');


// create a router 
const router = express.Router();


// users routes
router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(singleUser).delete(deleteUser).put(updateUser).patch(updateUser);





// export router 
module.exports = router;


