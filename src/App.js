import './App.css';
import MainMenu from './components/MainMenu'
import Banner from './components/Banner'
import Posts from './components/Posts.js'
import Post from './components/Post.js'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import GoogleAnalyticsTracker from './components/GoogleAnalyticsTracker';

//import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
function App() {

  GoogleAnalyticsTracker();

  return (
    <div>
        <MainMenu />
        <div id="main" className="container">
          <div class="row">
          <div className="col-12 col-md-12"></div>
          </div>
          <div class="row">
          
            <div className="col-12 col-md-8">
              <Switch>
                <Route path="/posts" component={Posts} />
                <Route path="/post/:id" component={Post} />
                <Route path="/" component={Posts} />
              </Switch>
            </div>

            <div className="col-12 col-md-4">
            <Banner />
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
