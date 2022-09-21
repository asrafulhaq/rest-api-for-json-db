## REST API with Express Server

This is our first REST API for React JS Apps.

## First clone this repo and then install its packages 

```console
$ npm install    
```

[![NPM Version][npm-version-image]][npm-url]
[![NPM Install Size][npm-install-size-image]][npm-install-size-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]


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

