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