import { createContext, useState, useEffect } from 'react';

import { socket as socketClient } from '../api/ApiBase';

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    socketClient.connect();
    setSocket(socketClient);
  }, []);

  return <SocketContext.Provider value={{ socket, setSocket }}>{children}</SocketContext.Provider>;
};

export { SocketContext, SocketContextProvider };
