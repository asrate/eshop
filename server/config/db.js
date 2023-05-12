const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      //   userNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useCreateIndex: true,
    });
    console.log("database is connected");
  } catch (err) {
    console.log("connection faild");
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
