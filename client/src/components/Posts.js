import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Posts(props) {
    return (
        <CollapsableMapper data={props.posts} path="post" field="title" field1="Body" field2="date" />
    );
}
export default Posts;

