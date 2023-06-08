require('dotenv').config();
let dbConn =  'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
module.exports = {
  // 'secret': 'expressapitest',
  'dbConnection': dbConn
}


