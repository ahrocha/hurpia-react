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
                <h2>My name is {this.state.title} and my fullname is {this.state.title} {this.state.text}</h2>
            </div>
            );
        } else {
            const items = this.state.Posts;
            const postsList = items.map( (item, i) => (
                <li key={item.ID}>
                    <Link to={"/post/" + item.post_name} className={"btn btn-primary"} >
                    {item.post_title}
                    </Link>
                </li>
            )
            );
            return (
            <div id="postsList">
                {postsList}
            </div>
            );
        }
      }
}

export default Posts;