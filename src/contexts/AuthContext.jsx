import * as SecureStore from 'expo-secure-store';
import React, { createContext, useState, useEffect } from 'react';

import Client from './../api/ApiBase';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState({});

  const loadStorageData = async () => {
    try {
      const authDataSerialized = await SecureStore.getItemAsync('AuthData');
      if (authDataSerialized) {
        const _authData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
        Client.defaults.headers.common['Authorization'] = 'Bearer ' + _authData?.token;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (data) => {
    const _authData = JSON.stringify(data);
    await SecureStore.setItemAsync('AuthData', _authData);
    await loadStorageData();
  };

  const handleSignOut = async () => {
    await SecureStore.deleteItemAsync('AuthData');
    setAuthData({});
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, loading, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
