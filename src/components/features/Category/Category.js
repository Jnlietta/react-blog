import styles from './Category.module.scss';

const Category = props => {
    return(
        <div>
            <div className={styles.header}>
                <h2>Category: </h2>
            </div>
        </div>
    );
};

export default Category;