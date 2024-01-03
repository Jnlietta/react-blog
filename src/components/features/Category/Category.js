import { useSelector } from 'react-redux';
import styles from './Category.module.scss';
import { getPostByCategory } from '../../../redux/postsRedux';
import Posts from '../Posts/Posts';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {name} = useParams();
    const categoryFromPath = name;
    const categoryPosts = useSelector(state => getPostByCategory(state, categoryFromPath));

    return(
        <div>
            <h2 className={styles.header}>Category: <span>{categoryFromPath}</span></h2>
            {(categoryPosts.length === 0) ? <p>No posts in this category...</p> : <Posts posts={categoryPosts} />}
        </div>
    );
};

export default Category;