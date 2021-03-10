const { verifyToken } = require('../utils');

const authenticate = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res
        .status(401)
        .json({ status: 'fail', message: 'You need to be signed in' });
    }
    const token = authorization.split(' ')[1];
    req.user = verifyToken(token);
    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ status: 'fail', message: 'You need to be signed in' });
  }
};

module.exports = { authenticate };
