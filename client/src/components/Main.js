import React from "react";
import PostsContainer from "../containers/PostsContainer";
import CreateThingsContainer from "../containers/CreateThingsContainer";

function Main() {
    return (
        <div>
            <div>
                <CreateThingsContainer />
            </div>
            <div>
                <h1>Read a Post</h1>
                <PostsContainer />
            </div>
        </div>
    );
}
export default Main;
