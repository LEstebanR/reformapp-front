import React, { createContext } from "react";
import { useAuth0 } from '@auth0/auth0-react';

export const DataContext = createContext(); 

export const DataProvider = ({children}) => {
  const { user } = useAuth0();

  return (

    <DataContext.Provider value={{user}}>
      {children}
    </DataContext.Provider>
  )
}