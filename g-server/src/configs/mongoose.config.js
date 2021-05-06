const mongoose = require('mongoose');

const mongooseConn = mongoose.connection;
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MONGO_DB Connected!'));

mongooseConn.on('error', (err) => {
  console.log('MONGO_DB connection error:', err.message);
});

module.exports = mongooseConn;
