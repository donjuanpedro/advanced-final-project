import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Posts(props) {
    return (
        <CollapsableMapper data={props.posts} path="post" field="title" field1="body" field2="img" field3="date" field4="time" />
    );
}
export default Posts;

