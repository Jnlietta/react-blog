import styles from "./Posts.module.scss";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Button, Card, Col, Row } from "react-bootstrap";

const Posts = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div>
            <Row xs={1} sm={2} md={3}>
            {posts.map(post=>(
                <Col key={post.id} className="mb-2">
                    <Card style={{ width: '100%'}}>
                        <Card.Body>
                            <Card.Title className={styles.title}>{post.title}</Card.Title>
                            <Card.Text>
                                <p className="mb-0"><span>Author: </span>{post.author}</p>
                                <p className="mb-0"><span>Published: </span>{post.publishedDate}</p>
                                <br />
                                <p className="mb-0">{post.shortDescription}</p>
                            </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    );
};

export default Posts;