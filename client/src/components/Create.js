import React from "react";

class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {
                title: "",
                body: "",
                img: "",
                date: "",
                time: ""
            }
        };
    }
    render() {
        return (
            <div>
              <h1>Create a Post</h1>
              <form onSubmit={(e) => {
                e.preventDefault();
                if (this.props.createPost) {
                  this.props.createPost(this.state.post);
                }
              }}>
                <div>
                  Title: <input onChange={(e) => {
                    const post = {title: e.target.value};
                    this.setState({
                      post: Object.assign(this.state.post,post)
                    });
                  }} />
                </div>
                <div>
                  Body: <input onChange={(e) => {
                    const post = {body: e.target.value};
                    this.setState({
                      post: Object.assign(this.state.post,post)
                    });
                  }} />
                </div>
                <div>
                  Image: <input onChange={(e) => {
                    const post = {img: e.target.value};
                    this.setState({
                      post: Object.assign(this.state.post,post)
                    });
                  }} />
                </div>
                <div>
                  Date: <input onChange={(e) => {
                    const post = {date: e.target.value};
                    this.setState({
                      post: Object.assign(this.state.post,post)
                    });
                  }} />
                </div>
                <div>
                  Time: <input onChange={(e) => {
                    const post = {time: e.target.value};
                    this.setState({
                      post: Object.assign(this.state.post,post)
                    });
                  }} />
                </div>
                <button>Create</button>
              </form>
          </div>
        );
    }
}

export default Create;