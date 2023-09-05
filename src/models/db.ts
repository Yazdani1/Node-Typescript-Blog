const mongoose = require('mongoose');
require('dotenv').config();

//"mongodb://0.0.0.0:27017/BlogTestTypescript"

mongoose
  .connect(process.env.localdb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error: any) => {
    console.log('Error connecting to database:', error.message);
  });
