let mongoose = require('mongoose');

const server = 'mongodb+srv://sanstar03:c0874419271@cluster0.ifent.mongodb.net/User_Cecoin?retryWrites=true&w=majority'; // REPLACE WITH YOUR DB SERVER
const database = 'cluster0';

class Database {
  constructor() {
    this._connect()
  }

  _connect() {
    mongoose.connect(`${server}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error');

      })
  }
}

module.exports = new Database()