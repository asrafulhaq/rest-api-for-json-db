const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');


// create a router 
const router = express.Router();


// users routes
router.get('/', getAllUser);
router.post('/', createUser);


// export router 
module.exports = router;


