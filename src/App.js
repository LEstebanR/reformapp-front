import { Router, Switch, Route } from 'react-router-dom';
import './App.css'
import history from './utils/history';
import Layout from  './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/homePage.jsx'
import createPage from './pages/createPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
import CompanySearchPage from './pages/CompanySearchPage.jsx'
import InvitationsPage from './pages/Invitations.jsx'
import ReformPage from './pages/ReformPage.jsx'
import ProfileHome from './pages/ProfileHome';
import UpdatePage from './pages/updatePage.jsx';
import InvitePage from './pages/InvitePage.jsx';
import Register from './pages/Register.jsx'
import Proposal from './pages/Proposal';

const App = () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/update" component={UpdatePage} />
          <Route exact path="/profile/home" component={ProfileHome} />
          <Route exact path="/profile/create" component={createPage} />
          <Route exact path="/profile/ownersearch" component={SearchPage} />
          <Route exact path="/invite/:id" component={InvitePage} />
          <Route exact path="/profile/companysearch" component={CompanySearchPage} />
          <Route exact path="/profile/invitations" component={InvitationsPage} />
          <Route exact path="/reform/:id" component={ReformPage} />
          <Route exatc path="/register" component={Register} />
          <Route exatc path="/propuesta/:id" component={Proposal} />
          <Route  path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
