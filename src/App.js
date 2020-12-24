import About from './components/About/index';
import AppHeader from './components/AppHeader/index';
import Home from './components/Home/index';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route component={About} path="/about"></Route>
        <Route component={Home} path="/"></Route>
        <Route component={Home} path="/photos"></Route>
        <Route component={Home} path="/videos"></Route>
      </Switch>
    </Router>
  );
}

export default App;
