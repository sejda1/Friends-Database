import React, { createContext, useState, useMemo, useContext } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authInfo, setAuthInfo] = useLocalStorage('s11d2', {});
  const history = useHistory();

  // isLoggedIn, authInfo değiştiğinde yeniden hesaplanır
  const isLoggedIn = useMemo(() => !!authInfo?.token, [authInfo]);

  const initAuth = (authFormData) => {
    axios
      .post(
        'https://nextgen-project.onrender.com/api/s11d2/login',
        authFormData
      )
      .then((response) => {
        console.log('LOGIN', response);
        setAuthInfo(response.data);
        history.push('/friends');
      })
      .catch((err) => {
        console.log('LOGIN', err);
      });
  };

  const logOut = () => {
    setAuthInfo({});
    history.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{
        authInfo,
        initAuth,
        isLoggedIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
