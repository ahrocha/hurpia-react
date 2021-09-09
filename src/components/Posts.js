import React, {Component} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Posts extends Component {

    constructor() {
        console.log("post constructor");
        super();
        this.state = {Posts: [], loading: true, title: "Andrey", text: "Hurpia da Rocha"};
    }

    componentDidMount() {
        this.getPosts();
    }
    
    getPosts() {
       axios.get("https://node.hurpia.com.br/posts").then(Posts => {
           this.setState({ Posts: Posts.data, loading: false})
       })
       //console.log(this);
    }

    render() {
        const loading = this.state.loading;
        if (loading === true) {
            return (
            <div id="posts">
                <h2>Carregando</h2>
            </div>
            );
        } else {
            const items = this.state.Posts;
            const postsList = items.map( (item, i) => (
                <li key={item.ID}>
                    <Link to={"/post/" + item.post_name} >
                    {item.post_title}
                    </Link>
                </li>
            )
            );
            return (
            <div id="postsList">
                <ul className="list-unstyled">
                    {postsList}
                </ul>
            </div>
            );
        }
      }
}

export default Posts;