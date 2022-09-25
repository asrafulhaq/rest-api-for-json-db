const path = require('path');
const { readFileSync, writeFileSync } = require('fs');



/**
 * @desc get all teacher
 * @name GET /api/v1/teacher/
 * @access public 
 */
const getTeachers = (req, res ) => {
    // get users data form json db 
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));

    // send data 
    res.status(200).json(teachers);


}

/**
 * @desc create a teacher
 * @name PORT /api/v1/teacher/
 * @access public 
 */
 const createTeacher = (req, res ) => {
    // get users data form json db 
    const teachers = JSON.parse(readFileSync(path.join(__dirname, '../db/teacher.json')));


     // get body data 
     const { name, age, cell } = req.body;

     // validation 
     if( !name || !age || !cell  ){
         res.status(400).json({
             message : "all fields is required"
         });
     } else {    
 
        teachers.push({
             id : Math.floor(Math.random() * 10000000000).toString(),
             name : name, 
             age : age,
             cell : cell
         });
 
         writeFileSync(path.join(__dirname, '../db/teacher.json'), JSON.stringify(teachers));
         res.status(201).json({
             message : "Teacher created successful"
         });
     }



}



// export controller 
module.exports = {
    getTeachers, 
    createTeacher
}