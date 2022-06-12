import React, { useState } from 'react';

import useAuth from '../hooks/useAuth';
import LoadingScreen from '../screens/Loading/Loading';
import RootNavigator from './RootNavigator';

const Navigation = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }
  return <RootNavigator authData={authData} />;
};

export default Navigation;
