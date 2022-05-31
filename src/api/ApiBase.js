import { API_URL, API_URL_PROD } from '@env';
import axios from 'axios';
import Constants from 'expo-constants';

const { manifest } = Constants;

if (API_URL.includes('localhost')) {
  API_URL = API_URL.replace('localhost', manifest.debuggerHost.split(':').shift());
}

const apiUrl = !__DEV__ ? API_URL_PROD : API_URL;

const Client = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Client;
