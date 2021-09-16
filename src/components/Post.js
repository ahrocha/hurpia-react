import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {

    constructor() {
        super();
        this.state = {Post: [], loading: true, title: "Andrey", text: "Hurpia da Rocha"};
    }
    componentDidMount() {
        this.getPost(this.props.match.params.id);
    }
    
    getPost(id) {
       axios.get("https://node.hurpia.com.br/post/" + id).then(Post => {
        this.setState({ Post: Post.data, loading: false})
       })
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
            const item = this.state.Post;
            let post_content = item.post_content;
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