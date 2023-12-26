import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostById } from "../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

    const idFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    const postToEdit = useSelector(state => getPostById(state, idFromPath));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(editPost(post));
        navigate('/');
    }

    return(
        <PostForm
            action={handleSubmit}
            actionText="Add post"
            {...postToEdit}
            />
    );
};

export default EditPostForm;