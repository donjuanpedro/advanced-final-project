import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PostContainer from "./containers/PostContainer";
import Main from "./components/Main";


class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
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
