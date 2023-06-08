const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const database = require('./config/database')

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
mongoose.connect(database.dbConnection, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology:true
  ,dbName: "expensify"
})
  .then(() => console.log('connection successfull'))
  .catch((err)=>{
    console.log(err)
  });

const incomeRouter =require('./routes/income');
app.use('/api',incomeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
