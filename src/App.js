import About from './components/Writings/index';
import AppHeader from './components/AppHeader/index';
import Home from './components/Home/index';
import Photos from './components/Photos/index';
import Writings from './components/Writings/index';
import Videos from './components/Videos/index';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        <Switch>
          <Route component={Photos} exact path="/photos" strict />
          <Route component={Videos} exact path="/videos" strict />
          <Route component={Writings} exact path="/writings" strict />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
