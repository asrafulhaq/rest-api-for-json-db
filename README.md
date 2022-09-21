<img src="./mahdi.jpeg">

## REST API with Express Server

This is our first REST API for React JS Apps.

## First clone this repo and then install its packages 

```console
$ npm install    
```


## Server structure

```js
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();


// init environment variable 
const PORT = process.env.PORT || 8080;

// express init 
const app = express();

// express middlewares 
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));



// listen port 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});


```

## Packages 

* Express Js
* Nodemon 
* Colors 
* dotenv 
* multer 
* nodemailer 

## Live Project Link 
[Edu Board Result](http://www.educationboardresults.gov.bd/)

