import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { me, signIn, signUp } from '../api/auth.api';

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const handleSignUp = useCallback(
    async (email, username, password) => {
      setLoading(true);
      await signUp(email, username, password)
        .then(() => {
          history.push('/signin');
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history]
  );

  const handleSignIn = useCallback(
    async (username, password) => {
      setLoading(true);
      await signIn(username, password)
        .then(({ data }) => {
          setUser(data.user[0]);
          setCookie('token', data.idToken);
          history.push('/');
        })
        .catch((error) => {
          throw error;
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history, setCookie]
  );

  const handleSignOut = useCallback(async () => {
    removeCookie('token', { maxAge: 86400 });
    setUser(null);
    history.push('/');
  }, [removeCookie]);

  useEffect(() => {
    setLoading(true);
    const { token } = cookie;
    const queryMe = async () => {
      try {
        const { data: user } = await me(token);
        setUser(user);
      } catch ({ message }) {}
      setLoading(false);
    };
    queryMe();
  }, [cookie]);

  return (
    <SessionContext.Provider
      value={{
        isLoading,
        user,
        signIn: handleSignIn,
        signUp: handleSignUp,
        signOut: handleSignOut,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);

export default SessionContext;
