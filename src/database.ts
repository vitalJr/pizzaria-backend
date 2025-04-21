import mongoose from "mongoose";

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // mongoose.connect('mongodb://localhost/pizzaria', {});
    mongoose.connect(
      "mongodb://atlas-sql-68062f3e9a95173a1eda5e95-wneoi.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin",
      {}
    );
    console.log("DataBase connected");
  }
}

export default new DataBase();
