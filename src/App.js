import { Router, Switch, Route } from 'react-router-dom';
import './App.css'
import history from './utils/history';
import Layout from  './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Login from './pages/Login.jsx'
import ProfileHome from './pages/ProfileHome.jsx'
import createPage from './pages/createPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import CompanySearchPage from './pages/CompanySearchPage.jsx'
import Invitations from './pages/Invitations.jsx'
import ReformPage from './pages/ReformPage.jsx'

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/home" component={ProfileHome} />
          <Route exact path="/profile/create" component={createPage} />
          <Route exact path="/profile/ownersearch" component={SearchPage} />
          <Route exact path="/profile/companysearch" component={CompanySearchPage} />
          <Route exact path="/profile/invitations" component={Invitations} />
          <Route exact path="/reform" component={ReformPage} />
          <Route  path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
