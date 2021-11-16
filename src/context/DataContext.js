import React, { useState, createContext, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import axios from '../utils/axios'

export const DataContext = createContext(); 

export const DataProvider = ({children}) => {
  const { user } = useAuth0();
  const [userDb, setUserDb] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getUser = async() => {
      if(user){
    try {
      const userVerify = await axios.get(`/user/${user.sub}`)
      setUserDb(userVerify.data)
    } catch (error) {
      console.error(error)
    }
  }
  
  }
  const getCategories = async() => {
    try {
      const Allcategories = await axios.get('/categories')
      setCategories(Allcategories.data.categories.splice(1, Allcategories.data.categories.length))
      
      } catch (error) {
      console.error(error)
    }
  }
  getUser()
  getCategories()
  }, [user])

  return (
    <DataContext.Provider value={{user, userDb, categories}}>
      {children}
    </DataContext.Provider>
  )
}