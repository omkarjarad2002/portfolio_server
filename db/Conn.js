const mongoose = require("mongoose");

const connection = async (req, res) => {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://omkarjaradit2020:s6xcMg2ydKplkGM1@cluster0.2btrsmn.mongodb.net/?retryWrites=true&w=majority"
    );

    if (response) {
      console.log("connection successfull");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connection };
