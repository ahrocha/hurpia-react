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
        <header className="App-header">
          <h1>Hurpia</h1>
        </header>
        <div className="contents">

          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>

    </div>
  );
}

export default App;
