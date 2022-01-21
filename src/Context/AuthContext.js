/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isHistoryOpen, setisHistoryOpen] = useState(false);

  const value = { isHistoryOpen, setisHistoryOpen };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired,
};
