import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';




const Home = props => {
    return(
        <div>
            <div className={styles.homeHeader}>
                <h2>All posts</h2>
                <Button variant="outline-info" as={NavLink} to="/post/add">Add post</Button>
            </div>
            <Posts />
        </div>
    );
};

export default Home;