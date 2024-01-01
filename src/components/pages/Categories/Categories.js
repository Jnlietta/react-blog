import CategoriesCard from '../../features/CategoriesCard/CategoriesCard';
import styles from './Categories.module.scss';


const Categories = props => {
    return(
        <div className={styles.container}>
            <h2 className={styles.header}>All categories</h2>
            <CategoriesCard />
        </div>
    );
};

export default Categories;