import './App.css';
import Posts from './components/Posts.js'
import Post from './components/Post.js'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
//import {Route, Switch,Redirect, Link, withRouter} from 'react-router-dom';
function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Andrey Hurpia da Rocha</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="home" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="posts" href="/">Posts</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="contents">
          <Switch>
            <Route path="/" component={Posts} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>

    </div>
  );
}

export default App;
