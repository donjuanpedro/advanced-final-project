import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import PostContainer from "./containers/PostContainer";



class App extends Component {
  constructor() {
    super();
    this.state = {posts: []};
  }
  componentDidMount(){
    this.props.loadPosts();
  }

  render() {
  
       
    return (
     
      <BrowserRouter>
        <div>       
          <Switch>
            <Route path="/post/:id" component={PostContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
        </BrowserRouter>
    );
  }
}


export default (App);
