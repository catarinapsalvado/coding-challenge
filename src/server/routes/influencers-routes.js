const router = require("express").Router();
const mongoose = require("mongoose");
const Influencers = require("./models/influencers_model");


/*Usage with typescript interface Error {
  status?: number;
  message?: string;
} */

//Try create a route with a get to find/show the influencers 

router.get("/", (req, res) => {
   Influencers.find()
    .then((allInfluencers) => {
      res.status(200).json(allInfluencers);
    })
    .catch((err) =>
      res.status(400).json({ message: "No Influencers were found" })
    ); 
   
});



module.exports = router;


/* 

export default async function main() {
  // something here
} */