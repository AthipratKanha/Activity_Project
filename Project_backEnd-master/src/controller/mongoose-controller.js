const mongoose = require("mongoose");

exports.connectMongoose = async (req, res, next) => {
  try {
    await mongoose.connect('mongodb+srv://m001-student:auto1234@sandbox.jwdf2t3.mongodb.net/?retryWrites=true&w=majority');
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};
