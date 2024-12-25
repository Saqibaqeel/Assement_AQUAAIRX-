const mongoose = require("mongoose");
const Listing = require("../models/destination"); // Adjust path based on your folder structure
const sampleListings = require("./data"); // Adjust path based on your folder structure

// MongoDB Connection URI
const URL = 'mongodb://127.0.0.1:27017/tree'; 

// Connect to MongoDB
const start = async () => {
    await mongoose.connect(URL)
   
}
start();
  

// Function to seed the database
const saveDatabase = async () => {
  try {
    // Clear existing data
    await Listing.deleteMany({});
    console.log("Cleared existing listings");

    // Insert new data
    await Listing.insertMany(sampleListings);
    console.log("Inserted sample listings");

    // Close the connection
    mongoose.connection.close();
    console.log("Database seeding complete and connection closed");
  } catch (err) {
    console.error("Error seeding the database:", err);
    mongoose.connection.close();
  }
};
saveDatabase()
