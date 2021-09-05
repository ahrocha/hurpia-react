import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

    constructor() {
        super();
        console.log("construtor");
        console.log(this);
        this.state = {Post: [], loading: true, title: "Andrey", text: "Hurpia da Rocha"};
    }
    componentDidMount() {
        console.log("didmount");
        console.log(this);
        console.log(this.props.match.params.id);
        this.getPost(this.props.match.params.id);
    }
    
    getPost(id) {
       axios.get("https://node.hurpia.com.br/post/" + id).then(Post => {
        console.log(Post.data);
        this.setState({ Post: Post.data, loading: false})
       })
    }

    render() {
        console.log("render");
        console.log(this);
        const loading = this.state.loading;
        if (loading === true) {
            return (
            <div id="posts">
                <h2>My name is {this.state.title} and my fullname is {this.state.title} {this.state.text}</h2>
            </div>
            );
        } else {
            const item = this.state.Post;
            console.log(item);
            let post_content = item.post_content.replace(/\n/g, "<br />");
            post_content = post_content.replace(/\[(.*?)\]/g, "");
            console.log(post_content);
            const postsList = (
                <div>
                    <h2>{item.post_title}</h2>
                    <div dangerouslySetInnerHTML={{__html: post_content}} />
                </div>
            )
            ;
            return (
            <div id="postsList">
                {postsList}
            </div>
            );
        }
      }
}

export default Post;