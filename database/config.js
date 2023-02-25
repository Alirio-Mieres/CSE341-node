const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.set('strictQuery', true)
    await mongoose.connect( process.env.MONGODB_CNN );
    console.log("Database running");
  } catch (error) {
    console.log(error);
    throw new Error("Error while connecting to database");
  }
};

module.exports = {
  dbConnection,
};
