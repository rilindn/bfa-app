import { API_URL } from '@env';
import axios from 'axios';
import Constants from 'expo-constants';

const { manifest } = Constants;

if (API_URL.includes('localhost')) {
  API_URL = API_URL.replace('localhost', manifest.debuggerHost.split(':').shift());
}

const Client = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Client;
