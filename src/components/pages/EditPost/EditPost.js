import EditPostForm from '../../features/EditPostForm/EditPostForm';
import styles from './EditPost.module.scss';

const EditPost = props => {
    return(
        <div className={styles.container}>
            <h2>Edit Post</h2>
            <EditPostForm />
        </div>
    );
};

export default EditPost;