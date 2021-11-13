import LandinPage from './LandingPage';
import { useAuth0 } from '@auth0/auth0-react';
import history from '../utils/history';


const Home = () => {
  const { isAuthenticated} = useAuth0();
 
  return (
    <div>
      {!isAuthenticated ? <LandinPage /> : history.push('/profile/home')}
    </div>
  );

}

export default Home;