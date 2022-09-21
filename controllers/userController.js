const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

/**
 * @desc get all users data 
 * @name GET /api/v1/user/
 * @access public 
 */
const getAllUser = (req, res ) => {
    // get users data form json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // send data 
    res.status(200).json(users);


}

/**
 * @desc create a new user 
 * @name POST /api/v1/user/
 * @access public 
 */
 const createUser = (req, res ) => {

    // get users data form json db 
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));
    
    // get body data 
    const { name, skill } = req.body;

    // validation 
    if( !name || !skill  ){
        res.status(400).json({
            message : "Name & Skill is required"
        });
    } else {    

        users.push({
            id : Math.floor(Math.random() * 10000000000).toString(),
            name : name, 
            skill : skill
        });

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            message : "User created successful"
        });
    }



}





// exports contolers
module.exports = {
    getAllUser,
    createUser
} 