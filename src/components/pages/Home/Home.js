import { useSelector } from 'react-redux';
import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { getAllPosts } from '../../../redux/postsRedux';


const Home = props => {
    const posts = useSelector(getAllPosts);

    return(
        <div>
            <div className={styles.homeHeader}>
                <h2>All posts</h2>
                <Button variant="outline-info" as={NavLink} to="/post/add">Add post</Button>
            </div>
            <Posts posts={posts} />
        </div>
    );
};

export default Home;