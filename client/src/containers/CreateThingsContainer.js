import { connect } from "react-redux";
import CreateThings from "../components/CreateThings";
import createPost from "../actions";

function mapDispatchToProps(dispatch) {
    return {
        createPost: function (post) {
            dispatch(createPost(post));
        }
    };
}
export default connect(null,mapDispatchToProps)(CreateThings);
