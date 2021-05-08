const fs = require('fs');
// eslint-disable-next-line import/newline-after-import
const dotenv = require('dotenv');
dotenv.config({ path: '../../../configs.env' });
// eslint-disable-next-line no-unused-vars
const mongooseConn = require('../../configs/mongoose.config');

const User = require('../../models/userModel');

// READ JSON FILE
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/users.mock.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
