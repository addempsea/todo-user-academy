import { cloudinaryConfig } from '../utils';

const cloudinaryUpload = async (req, res, next) => {
  try {
    console.log(req.files);
    const data = await cloudinaryConfig(req.files.file.tempFilePath);
    console.log('data', data);

    req.body.profilePictureUrl = data.secure_url;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default cloudinaryUpload;
