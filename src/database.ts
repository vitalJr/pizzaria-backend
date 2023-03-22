import mongoose from 'mongoose';

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect('mongodb://localhost/pizzaria', {});
    console.log('DataBase connected');
  }
}

export default new DataBase();
