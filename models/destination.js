const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    enum: ["Mountains", "Beach"],
    required: true,
  },
  budget: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  type: {
    type: String,
    enum: ["Adventure", "Relaxation"],
    required: true,
  },
  owner:{
    type: Schema.Types.ObjectId,
     ref:'User'


  },
});

const destination = mongoose.model("destination", destinationSchema);
module.exports=destination
