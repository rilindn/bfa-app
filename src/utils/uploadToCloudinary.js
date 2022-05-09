import { CLOUDINARY_API_URL, CLOUDINARY_UPLOAD_PRESET } from '@env';
import axios from 'axios';

const uploadToCloudinary = async (media) => {
  const apiUrl = CLOUDINARY_API_URL;
  const data = {
    file: media,
    upload_preset: CLOUDINARY_UPLOAD_PRESET,
  };

  try {
    const result = await axios.post(apiUrl, {
      ...data,
    });
    const photo = result.data.secure_url;
    if (photo) {
      return photo;
    }
  } catch (err) {
    console.log(err.response.data);
  }
};

export default uploadToCloudinary;
