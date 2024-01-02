import { useSelector } from 'react-redux';
import styles from './Category.module.scss';
import { getPostByCategory } from '../../../redux/postsRedux';

const Category = () => {
    const categoryFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    const post = useSelector(state => getPostByCategory(state, categoryFromPath));

    if(!post) return <p>No posts in this category...</p>
    else return(
        <div>
            <div className={styles.header}>
                <h2>Category: </h2>
            </div>
        </div>
    );
};

export default Category;