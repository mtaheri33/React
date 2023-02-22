const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const usersSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
});
const User = mongoose.model('User', usersSchema);

const add = async function (user) {
  await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
  const userDocumentToSave = new User(user);
  await userDocumentToSave.save();
  const userDocumentCreated = await User.find({ userName: user.userName }).exec();
  await mongoose.connection.close();
  return userDocumentCreated[0];
};

module.exports = add;