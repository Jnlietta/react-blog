import { useDispatch, useSelector } from 'react-redux';
import styles from './Post.module.scss';
import { getPostById, removePost } from '../../../redux/postsRedux';
import { Button, Modal } from 'react-bootstrap';
import { NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';


const Post = () => {
    const idFromPath = window.location.pathname.split('/').filter(Boolean).pop();
    const post = useSelector(state => getPostById(state, idFromPath));

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const dispatch = useDispatch();

    const removePostModal = e => {
        e.preventDefault();
        dispatch(removePost(idFromPath));
    };
    
    if(!post) return <Navigate to="/" />
    else return(
        <article className={styles.post}>
            <div className={styles.postHeader}>
                <h2>{post.title}</h2>
                <div className={styles.buttons}>
                    <Button variant="outline-info" as={NavLink} to={"/post/edit/" + post.id}>Edit</Button>
                    <Button variant="outline-danger" onClick={handleShowModal}>Delete</Button>
                </div>
            </div>
            <p className="mb-0"><span>Author: </span>{post.author}</p>
            <p className="mb-0"><span>Published: </span>{post.publishedDate}</p>
            <br />
            <p className="mb-0" dangerouslySetInnerHTML={{ __html: post.content }} />

            <Modal
                show={showModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This operation will completely remove this post from the app. 
                    Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
                    <Button variant="danger" onClick={removePostModal}>Remove</Button>
                </Modal.Footer>
            </Modal>
        </article>
    );
};

export default Post;