import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { NavLink } from 'react-router-dom';

const CategoriesCard = props => {
    const categories = useSelector(getAllCategories);

    return(
        <Card>
            <ListGroup variant="flush">
                {categories.map(category=>(
                    <ListGroup.Item>
                        <NavLink as={NavLink} to="/about">{category.name}</NavLink>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default CategoriesCard;