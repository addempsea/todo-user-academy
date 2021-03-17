import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String },
    password: { type: String, required: true, min: 7 },
    profilePictureUrl: { type: String, required: true },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('user', userSchema);

export default UserModel;
