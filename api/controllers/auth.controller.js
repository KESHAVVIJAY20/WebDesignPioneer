import User from '../models/user.model.js';
import {errorHandler} from '../utils/error.js';
export const register = async (req, res, next) => {
    const { username, usermail, phone, message } = req.body;
  
    if (
      !username ||
      !usermail ||
      !phone ||
      !message ||
      username === '' ||
      usermail === '' ||
      phone === '' ||
      message === '' 
    ) {
      next(errorHandler(400, 'All fields are required'));
    }  
    const newUser = new User({
      username,
      usermail,
      phone,
      message,
    });
  
    try {
      await newUser.save();
      res.json('Registered successfully');
    } catch (error) {
      console.log(error);
      next(errorHandler(400, 'registered already!'));
    }
  };