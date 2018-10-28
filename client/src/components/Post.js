import React, { Component } from "react";

class Post extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.loadPost(id);
    }

    render() {
        return (
            <div>
                <h3>{"" + this.props.post.title + this.props.post.body + this.props.post.img + this.props.post.date + this.props.post.time}</h3>
                <h3>Post Title: {this.props.post.title}</h3>
                <h3>Post Body: {this.props.post.body}</h3>
                <h3>Post Image: {this.props.post.img}</h3>
                <h3>Post Date: {this.props.post.date}</h3>
                <h3>Post Time: {this.props.post.time}</h3>
            </div>
        )
    }
}

export default Post;