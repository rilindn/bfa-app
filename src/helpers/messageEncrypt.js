import CryptoJs from 'react-native-crypto-js';
const { MESSAGES_SECRET_KEY } = process.env;

export const encryptMsg = (message, chatId, userId) => {
  const messagesEncryptionKey = `${chatId}${userId}${MESSAGES_SECRET_KEY}`;
  return CryptoJs.AES.encrypt(message, messagesEncryptionKey).toString();
};

export const decryptMsg = (message, chatId, userId) => {
  const messagesEncryptionKey = `${chatId}${userId}${MESSAGES_SECRET_KEY}`;
  const bytes = CryptoJs.AES.decrypt(message, messagesEncryptionKey);
  return bytes.toString(CryptoJs.enc.Utf8);
};
