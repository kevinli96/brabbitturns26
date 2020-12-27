import About from './components/About/index';
import AppFooter from './components/AppFooter/index';
import AppHeader from './components/AppHeader/index';
import Blog from './components/Blogs/Blog';
import Blogs from './components/Blogs/index';
import Home from './components/Home/index';
import Photos from './components/Photos/index';
import Videos from './components/Videos/index';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <AppHeader />
        <Switch>
          <Route component={About} exact path="/about" strict />
          <Route component={Photos} exact path="/photos" strict />
          <Route component={Blog} exact path={`/blogs/:blogId`} strict />
          <Route component={Blogs} exact path="/blogs" strict />
          <Route component={Videos} exact path="/videos" strict />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
