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
    const media = result.data.secure_url;
    if (media) {
      return media;
    }
  } catch (err) {
    console.log('Cloudinary upload error: ', err?.response?.data);
  }
};

export default uploadToCloudinary;
