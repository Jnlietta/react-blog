import styles from "./Posts.module.scss";
import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";

const Posts = ({posts}) => {
    const dateString = date => {
        return  dateToStr(date);

    };

    return (
        <div>
            <Row xs={1} sm={2} md={3}>
            {posts.map(post=>(
                <Col key={post.id} className="mb-2">
                    <Card style={{ width: '100%'}}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{post.title}</Card.Title>
                            <Card.Text>
                                <span className="mb-0"><strong>Author: </strong>{post.author}</span>
                                <span className="mb-0"><strong>Published: </strong>{dateString(post.publishedDate)}</span>
                                <span className="mb-0"><strong>Category: </strong>{post.category}</span>
                                <br />
                                <span className="mb-0">{post.shortDescription}</span>
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

export default Posts;