import { connect } from "react-redux";
import Post from "../components/Post";
import { loadPost } from "../actions/index";

const mapStateToProps = (state) => ({post: state.post});
const mapDispatchToProps = (dispatch) => ({
    loadPost: (id) => {dispatch(loadPost(id))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
