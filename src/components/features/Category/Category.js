import { useSelector } from 'react-redux';
import styles from './Category.module.scss';
import { getPostByCategory } from '../../../redux/postsRedux';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';

const Category = () => {
    const categoryFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    const categoryPosts = useSelector(state => getPostByCategory(state, categoryFromPath));
    
    const dateString = date => {
        return  dateToStr(date);
    };

    if(!categoryPosts) return(
        <div>
            <h2 className={styles.header}>Category: <span>{categoryFromPath}</span></h2>
            <p>No posts in this category...</p>
        </div>
            )
    else return(
            <div>
                <h2 className={styles.header}>Category: <span>{categoryFromPath}</span></h2>
                <Row xs={1} sm={2} md={3}>
                {categoryPosts.map(post=>(
                    <Col key={post.id} className="mb-2">
                        <Card style={{ width: '100%'}}>
                            <Card.Body>
                                <Card.Title className={styles.title}>{post.title}</Card.Title>
                                <Card.Text>
                                    <p className="mb-0"><span>Author: </span>{post.author}</p>
                                    <p className="mb-0"><span>Published: </span>{dateString(post.publishedDate)}</p>
                                    <p className="mb-0"><span>Category: </span>{post.category}</p>
                                    <br />
                                    <p className="mb-0">{post.shortDescription}</p>
                                </Card.Text>
                                <Button variant="primary" as={NavLink} to={"/post/" + post.id}>Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </div>
    );
};

export default Category;