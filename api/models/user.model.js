import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    usermail: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required : true,
    },
    message: {
      type: String,
      required : true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;