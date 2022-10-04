const User = require('./user.model');

const createUser = (user) => {
  return User.create(user);
};

const allUsers = () => {
  return User.find({}).populate({
    path: 'bookings',
    select: 'origin destination luggage -_id adults kids babies',
  });
};

const oneUser = (id) => {
  return User.findById(id).populate({
    path: 'bookings',
    select: 'origin destination luggage passengers',
  });
};

const updateUser = (id, user) => {
  return User.findByIdAndUpdate(id, user, { new: true });
};

const deleteUser = (id) => {
  return User.findByIdAndRemove(id);
};

const signUp = async (user, encPassword) => {
  return User.create({ ...user, password: encPassword });
};

const signIn = (email) => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  allUsers,
  oneUser,
  updateUser,
  deleteUser,
  signIn,
  signUp,
};
