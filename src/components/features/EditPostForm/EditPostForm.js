import { useDispatch, useSelector } from "react-redux";
import { editPost, getPostById } from "../../../redux/postsRedux";
import { Navigate, useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

    const id = window.location.pathname.split('/').filter(Boolean).pop();
    const postToEdit = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/');
    }

    if(!postToEdit) return <Navigate to="/" />

    return(
        <PostForm
            action={handleSubmit}
            actionText="Edit post"
            {...postToEdit}
            />
    );
};

export default EditPostForm;