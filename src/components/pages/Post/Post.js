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
        <div className={styles.post}>
                <div>
                    <h2 className={styles.title}>{post.title}</h2>
                    <Button variant="outline-info" as={NavLink} to={"/post/edit/" + post.id}>Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                    <p className="mb-0"><span>Author: </span>{post.author}</p>
                    <p className="mb-0"><span>Published: </span>{post.publishedDate}</p>
                    <br />
                    <p className="mb-0">{post.content}</p>
                </div>
        </div>
    );
};

export default Post;