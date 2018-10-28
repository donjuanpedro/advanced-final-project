function postsLoaded(posts) {
    return {
        type: "POSTS_LOADED",
        value: posts
    };
}
export function loadPosts() {
    return function (dispatch) {
        fetch("/posts")
        .then( (res) => {
            return res.json();
        }).then((posts) => {
            dispatch(postsLoaded(posts));
        });
    };
}

function postLoaded(post){
    return {
        type: "GET_POST_DONE",
        value: post
    }
}
export function loadPost(id) {
    return function (dispatch) {
        fetch(`/post/${id}`)
        .then( (res) => {
            return res.json();
        }).then( (post) => {
            dispatch(postLoaded(post));
        });
    };
}

export function createPost(post) {
    return function (dispatch) {
        fetch("/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=> dispatch(loadPosts()));
    };
}