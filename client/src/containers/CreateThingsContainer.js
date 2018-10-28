import { connect } from "react-redux";
import Create from "../components/Create";
import { createPost } from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        createPost: function (post) {
            dispatch(createPost(post));
        }
    };
}
export default connect(null,mapDispatchToProps)(Create);
