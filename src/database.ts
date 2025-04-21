import mongoose from "mongoose";

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // mongoose.connect('mongodb://localhost/pizzaria', {});
    mongoose.connect("mongodb+srv://pizzaria-backend.eckccpe.mongodb.net/", {});
    console.log("DataBase connected");
  }
}

export default new DataBase();
