import React from "react";
import PostsContainer from "../containers/PostsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <CreateThingsContainer />
            </div>
            <div className ="col-12">
                <h1>Read a Post</h1>
                <PostsContainer />
            </div>
        </div>
    );
}
export default Main;
