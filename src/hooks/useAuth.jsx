import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('AuthContext was used outside of its Provider');
  }

  return context;
};

export default useAuth;
