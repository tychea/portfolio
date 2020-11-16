const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  try {
    //get token from the header
    var token = req.header('Authorization');
    //check if no token
    if (!token) {
      return res.status(401).json({
        error: 'No Token, Access Denied',
        message: 'Please Login',
      });
    }
    token = token.replace('Bearer ', '');
    const decode = jwt.verify(token, config.get('access_Token_Secret'));
    req.user = decode.user;
    next();
  } catch (error) {
    console.log('middleware error', error);
    return res.status(401).json({
      error: error.message,
      message: 'Invalid Token,Please Login',
    });
  }
};
