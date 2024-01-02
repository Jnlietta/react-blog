import { useSelector } from 'react-redux';
import styles from './Category.module.scss';
import { getPostByCategory } from '../../../redux/postsRedux';

const Category = () => {
    const categoryFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    const post = useSelector(state => getPostByCategory(state, categoryFromPath));

    console.log(post);

    if(!post) return(
        <div>
            <h2 className={styles.header}>Category: <span>{categoryFromPath}</span></h2>
            <p>No posts in this category...</p>
        </div>
            )
    else return(
            <div>
                <h2 className={styles.header}>Category: <span>{categoryFromPath}</span></h2>
            </div>
    );
};

export default Category;