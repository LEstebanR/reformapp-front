import { useEffect, useState } from 'react';
import LandinPage from './LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../utils/history';
import axios from '../utils/axios';



const Home = () => {
  const { isAuthenticated, user, } = useAuth0();
  const [userDb, setUserDb] = useState();

  useEffect(() => {
    const getUser = async() => {
    try {
      const userVerify = await axios.get(`/user/${user.sub}`)
      setUserDb(userVerify.data)
    } catch (error) {
      console.error(error)
    }
  }
  getUser()
  }, [user])
  
  return (
    <div>
      
      {!isAuthenticated ? <LandinPage /> : history.push('/profile/home')}
      {console.log(userDb)}
      
    </div>
  );


}

export default Home;