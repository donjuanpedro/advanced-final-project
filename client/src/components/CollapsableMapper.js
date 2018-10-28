import React, { Component } from "react";
import { Link } from "react-router-dom";

class CollapsableMapper extends Component {
  constructor() {
    super();
    this.state = {visible: true};
  }
  render() {
    let buttonText = "Hide";
    let userDivs = "";
    if (this.state.visible) {
      buttonText = "Hide";
      userDivs = this.props.data.map((d,i) => {
        return (
          <div key={i}>
            Date: {d[this.props.field3]}<br/>
            Title: {d[this.props.field]}<br/>
            Body: {d[this.props.field1]}<br/>
            
            <Link to={"/" +this.props.path + "/" + d._id}> View </Link>
            <hr/>
          </div>
        );
      });
    } else {
      buttonText = "Show";
      userDivs = "";
    }
    return (
      <div>
        <button onClick={() => {
          this.setState({
            visible: !this.state.visible
          });
        }
        }>
          {buttonText}
        </button>
        {userDivs}
      </div>);
  }
}


export default CollapsableMapper;
