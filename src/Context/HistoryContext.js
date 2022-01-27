import React, { useContext, useState } from 'react';
import propTypes from 'prop-types';

const HistoryContext = React.createContext();

export function useHistory() {
  return useContext(HistoryContext);
}

export function HistoryProvider({ children }) {
  const [isHistoryOpen, setisHistoryOpen] = useState(false);

  const value = { isHistoryOpen, setisHistoryOpen };

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  );
}

HistoryProvider.propTypes = {
  children: propTypes.node.isRequired,
};
