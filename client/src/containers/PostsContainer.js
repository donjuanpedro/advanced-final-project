import { connect } from "react-redux";
import Posts from "../components/Posts";

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Posts);
