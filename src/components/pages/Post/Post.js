import { useSelector } from 'react-redux';
import styles from './Post.module.scss';
import { getPostById } from '../../../redux/postsRedux';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Post = () => {
const posts = useSelector(state => getPostById(state, postId));

    return(
        <div className={styles.post}>
            {posts.map(post=>(
                <div>
                    <h2 className={styles.title}>{post.title}</h2>
                    <Button variant="outline-info" as={NavLink} to={"/post/edit/" + post.id}>Edit</Button>
                    <Button variant="outline-danger">Delete</Button>
                    <p className="mb-0"><span>Author: </span>{post.author}</p>
                    <p className="mb-0"><span>Published: </span>{post.publishedDate}</p>
                    <br />
                    <p className="mb-0">{post.shortDescription}</p>
                </div>
            ))}
        </div>
    );
};

export default Post;