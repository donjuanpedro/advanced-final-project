import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpSignIn from "./SignUpSignIn";
import TopNavbar from "./TopNavbar";
import Secret from "./Secret";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
    // this.state = {
    //   signUpSignInError: "",
    //   authenticated: localStorage.getItem("token") || false
    // };
  //   this.handleSignIn = this.handleSignIn.bind(this);
  //   this.handleSignOut = this.handleSignOut.bind(this);
  //   this.handleSignUp = this.handleSignUp.bind(this);
  // }

  // handleSignUp(credentials) {
  //   const { username, password, confirmPassword } = credentials;
  //   if (!username.trim() || !password.trim() ) {
  //     this.setState({
  //       signUpSignInError: "Must Provide All Fields"
  //     });
  //   } else {

  //     fetch("/users", {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(credentials)
  //     }).then((res) => {
  //       return res.json();
  //     }).then((data) => {
  //       const { token } = data;
  //       localStorage.setItem("token", token);
  //       this.setState({
  //         signUpSignInError: "",
  //         authenticated: token
  //       });
  //     });
  //   }
  // }

  // handleSignIn(credentials) {
  //   // Handle Sign Up
  // }

  // handleSignOut() {
  //   localStorage.removeItem("token");
  //   this.setState({
  //     authenticated: false
  //   });
  // }

  // renderSignUpSignIn() {
  //   return (
  //     <SignUpSignIn 
  //       error={this.state.signUpSignInError} 
  //       onSignUp={this.handleSignUp} 
  //     />
  //   );
  // }
  componenetDidMount(){
    this.props.loadPosts();
  }

  // renderApp() {
  //   return (
  //     <div>
  //       <Switch>
  //         <Route exact path="/" render={() => <h1>I am protected!</h1>} />
  //         <Route exact path="/secret" component={Secret} />
  //         <Route render={() => <h1>NOT FOUND!</h1>} />
  //       </Switch>
  //     </div>
  //   );
  // }

  render() {
    // let whatToShow = "";
    // if (this.state.authenticated) {
    //   whatToShow = this.renderApp();
    // } else {
    //   whatToShow = this.renderSignUpSignIn();
    // }
       
    return (
      // <BrowserRouter>
      //   <div>
      //     <TopNavbar 
      //       showNavItems={this.state.authenticated} 
      //       onSignOut={this.handleSignOut} />
      //     {whatToShow}
      //   </div>
      // </BrowserRouter>
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
