import React, { useState } from 'react';

import useAuth from '../hooks/useAuth';
import LoadingScreen from '../screens/Loading/Loading';
import RootNavigator from './RootNavigator';

const Navigation = () => {
  const { authData, loading } = useAuth();
  const [delay, setDelay] = useState(true);

  setTimeout(() => setDelay(false), 500); // delay a bit for better UX

  if (loading || delay) {
    return <LoadingScreen />;
  }
  return <RootNavigator authData={authData} />;
};

export default Navigation;
