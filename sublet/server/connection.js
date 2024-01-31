const mongoose = require("mongoose");

const connection = async (URL) => {
  await mongoose.connect(URL);
};

module.exports = connection;
