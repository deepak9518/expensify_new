const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  name: {
    type: String,
  } ,
  date: {
      type: String,
     default:Date.now
    },
    amount: {
        type: Number,
  
      },
      desc: {
          type: String,
         
        },
  
});

module.exports = Income = mongoose.model("Income", incomeSchema);