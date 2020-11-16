const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../modals/User');

//@route POST api/users/resgister
//@desc Register User
//@access Public
router.post('/register', async (req, res) => {
  //get value from body
  const user = new User(req.body);
  try {
    const token = await user.generateAuthToken();
    await user.save();
    res.status(200).json({ token });
  } catch (error) {
    // checking where the Error Come from MongoDB Unique Or Mongoose Validation Error
    // if it true mean it from Mongoose validation Error
    const errorFromValidation = 'errors' in error;
    if (!errorFromValidation) {
      return res.status(400).json({
        errors: {
          email: {
            name: error.name,
            message: 'duplicate email',
          },
        },
        message: 'Email is Already in used',
      });
    }
    res.status(400).json(error.message);
  }
});

//@route POST api/users/login
//@desc Login User
//@access Public
router.post('/login', async (req, res) => {
  //check if user exist
  const { email, password } = req.body;
  try {
    const user = await User.findByCredential(email, password);
    const token = await user.generateAuthToken();
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: 'Invalid Credential',
      message: error.message,
    });
  }
});
//@route PATCH api/users/update/info
//@desc Update User infomation
//@access Private
router.patch('/update/info', auth, async (req, res) => {
  //req.user.id getting from auth middleware
  try {
    // const user = await User.findByIdAndUpdate(req.user.id,{name:req.body.name});
    // res.status(200).json({sucess:'update Success'})
    const user = await User.findById(req.user.id, 'name');
    user.name = req.body.name;
    await user.save();
    return res.status(200).json({ sucess: 'update Success' });
  } catch (error) {
    //checking where the Error Come from User.FindById Or Mongoose Validation Error on save
    //if it true mean it from Mongoose validation Error
    const errorFromValidation = 'errors' in error;
    if (!errorFromValidation) {
      return res.status(400).json({
        error: 'User is not Exist',
        message: 'user not found',
      });
    }
    res.status(400).json(error);
  }
});

//@route PATCH api/users/update/password
//@desc Update User Password
//@access Private
router.patch('/update/password', auth, async (req, res) => {
  try {
    //req.user.id getting from auth middleware`
    var user = await User.checkPasswordWithId(
      req.user.id,
      req.body.oldPassword
    );
    user.password = req.body.newPassword;
    await user.save();
    res.status(200).json({ success: 'update Success' });
  } catch (error) {
    // checking where the Error Come from User.checkPasswordWithId Or Mongoose Validation Error on save
    // if it true mean it from Mongoose validation Error
    const errorFromValidation = 'errors' in error;
    if (!errorFromValidation) {
      return res.status(400).json({
        error: error.name,
        message: error.message,
      });
    }
    res.status(400).json(error);
  }
});

router.patch('/update/resetPassword', async (req, res) => {});

module.exports = router;

const errorHandler = (error) => {
  const allError = error.errors;
  const errorName = Object.keys(allError);
  var errorMessage = new Object();
  var message = '';
  errorName.forEach((e) => {
    errorMessage[e] = allError[e].properties.message;
    message = message + allError[e].properties.message + ', ';
  });
  return {
    errorMessage,
    message,
  };
};
