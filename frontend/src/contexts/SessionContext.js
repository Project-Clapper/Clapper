import axios from 'axios';
import { createContext, useCallback, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [, setCookie, removeCookie] = useCookies(['tokens']);

  const handleSignIn = useCallback(
    async (username, password) => {
      setLoading(true);
      await axios
        .post(`${process.env.REACT_APP_API_ENDPOINT}auth/signin`, { username, password })
        .then((res) => {
          console.log(res.data);
          setUser(username);
          setCookie(res.data);
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setCookie]
  );

  return (
    <SessionContext.Provider
      value={{
        isLoading,
        user,
        signIn: handleSignIn,
        // logout: handleLogout,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default SessionContext;
