import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';
import { Button } from 'react-bootstrap';




const Home = props => {
    return(
        <div>
            <div className={styles.homeHeader}>
                <h2 className={styles.title}>All posts</h2>
                <Button variant="outline-info">Add post</Button>
            </div>
            <Posts />
        </div>
    );
};

export default Home;