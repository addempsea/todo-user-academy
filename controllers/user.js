const { addNewUser, getSingleUserByEmail } = require('../services');
const { addDataToToken } = require('../utils');

const registerUser = (req, res) => {
  try {
    addNewUser(req.body);
    res
      .status(201)
      .json({ status: 'success', message: 'Registration successful.' });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const user = getSingleUserByEmail(email);

    if (user && user.password === password) {
      const token = addDataToToken({ email, isAdmin: user.isAdmin });
      return res.status(200).json({ status: 'success', message: 'Login successful.', data: { token } });
    }
    return res.status(401).json({ status: 'fail', message: 'Invalid login details' });
  } catch (error) {
    return res.status(500).json({ status: 'fail', message: 'Something went wrong.' });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
