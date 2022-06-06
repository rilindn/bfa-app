import { useContext } from 'react';

import { SocketContext } from '../contexts/SocketContext';

const useSocket = () => {
  const context = useContext(SocketContext);

  if (context === undefined) {
    throw new Error('SocketContext was used outside of its Provider');
  }

  return context;
};

export default useSocket;
