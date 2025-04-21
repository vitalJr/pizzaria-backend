import mongoose from "mongoose";

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    // mongoose.connect('mongodb://localhost/pizzaria', {});
    mongoose.connect(
      "mongodb+srv://vitaljr:vital123@pizaaria-backend.udkaydl.mongodb.net/?retryWrites=true&w=majority&appName=pizaaria-backend",
      {}
    );
    console.log("DataBase connected");
  }
}

export default new DataBase();
