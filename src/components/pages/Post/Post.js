import { useSelector } from 'react-redux';
import styles from './Post.module.scss';
import { getPostById } from '../../../redux/postsRedux';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Post = () => {
    const idFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    //console.log('idFromPath', idFromPath);

    const post = useSelector(state => getPostById(state, idFromPath));

    return(
        <article className={styles.post}>
            <div className={styles.postHeader}>
                <h2>{post.title}</h2>
                <div className={styles.buttons}>
                    <Button variant="outline-info" as={NavLink} to={"/post/edit/" + post.id}>Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                </div>
            </div>
            <p className="mb-0"><span>Author: </span>{post.author}</p>
            <p className="mb-0"><span>Published: </span>{post.publishedDate}</p>
            <br />
            <p className="mb-0">{post.content}</p>
        </article>
    );
};

export default Post;