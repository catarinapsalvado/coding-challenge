const { Schema, model } = require("mongoose");

const influencersSchema = new Schema({
    influencer_name: {
      type: String,
    },
  
    instagram_name: {
      type: String,
    },
  
    category: {
      type: String,
    },
  
    followers: {
      type: String,
    },
  
    country: {
      type: String,
    },
  
    engagement_avg: {
      type: String,

    },
  

  });
  
  const Influencers = model("Influencers", influencersSchema);


module.exports = Influencers;