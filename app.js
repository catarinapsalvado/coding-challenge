// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs');

// convert users.csv file to JSON array
CSVToJSON().fromFile('./data/instagram_influencers.csv')
    .then(influencers => {
          // write JSON array to file
          fs.writeFile('influencers.json', JSON.stringify(influencers, null, 4), (err) => {
            if (err) {
               throw err;
             }
          });
        console.log(influencers);
    }).catch(err => {
        // log error if any
        console.log(err);
    });

    
    
// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

const { isAuthenticated } = require("./middleware/jwt.middleware");

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);



// 👇 Start handling routes here
// Contrary to the views version, all routes are controlled from the routes/index.js
const authRouter = require("./src/server/routes");
app.use("/api", allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
