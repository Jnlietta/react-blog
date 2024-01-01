import { Card, ListGroup } from 'react-bootstrap';
import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { NavLink } from 'react-router-dom';

const Categories = props => {
    const categories = useSelector(getAllCategories);

    return(
        <div className={styles.container}>
            <h2 className={styles.header}>All categories</h2>
            <Card>
                <ListGroup variant="flush">
                    {categories.map(category=>(
                        <ListGroup.Item>
                            <NavLink as={NavLink} to="/about">{category.name}</NavLink>
                        </ListGroup.Item>
                        ))}
                </ListGroup>
            </Card>
        </div>
    );
};

export default Categories;