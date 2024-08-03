import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import styles from "../../styles/Post.module.css";
import counterStyles from "../../styles/Counter.module.css";

import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Post = (props) => {
  // Props destructuring
  const {
    id,
    owner,
    wanderer_id,
    wanderer_image,
    comments_count,
    likes_count,
    like_id,
    countrysides_count,
    countryside_id,
    title,
    content,
    truncated,
    image,
    updated_at,
    postPage,
    setPosts,
    location,
    country,
  } = props;

  // Custom hooks
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  // Event handlers
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.push(`/`, { message: 'Your memory was successfully deleted.' });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosReq.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleCountryside = async () => {
    try {
      const { data } = await axiosReq.post("/countryside/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                countrysides_count: post.countrysides_count + 1,
                countryside_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosReq.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFromCountryside = async () => {
    try {
      await axiosReq.delete(`/countryside/${countryside_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                countrysides_count: post.countrysides_count - 1,
                countryside_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="d-flex align-items-center justify-content-between">
          <Link to={`/wanderers/${wanderer_id}`}>
            <Avatar src={wanderer_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span className={styles.smallText}>{updated_at}</span>
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && (
          <Card.Title className={`text-center ${styles.TitleText}`}>
            {title}
          </Card.Title>
        )}
        {truncated && content && (
          <Card.Text>{content.substring(0, 200)} ...</Card.Text>
        )}
        {!truncated && content && <Card.Text>{content}</Card.Text>}

        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>No more love!</Tooltip>}
            >
              <div>
                <span onClick={handleUnlike}>
                  <i className={`fas fa-heart ${styles.Heart}`} />
                </span>
              </div>
            </OverlayTrigger>
          ) : currentUser ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Love it!</Tooltip>}
            >
              <div>
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
            </div>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          <span className={counterStyles.counter}>{likes_count}</span>
          <OverlayTrigger
              placement="top"
              overlay={<Tooltip>See Comments!</Tooltip>}
            >
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          </OverlayTrigger>
          <span className={counterStyles.counter}>{comments_count}</span>
          {countryside_id ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Remove from countryside!</Tooltip>}
            >
              <div>
                <span onClick={handleRemoveFromCountryside}>
                  <i className={`fa-solid fa-bucket ${styles.Heart}`} />
                </span>
              </div>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip> login to be able to add a post to the countryside!</Tooltip>}
            >
              <div>
                <span onClick={handleCountryside}>
                  <i className={`fa-solid fa-bucket ${styles.HeartOutline}`} />
                </span>
              </div>
            </OverlayTrigger>
          )}
          <span className={counterStyles.counter}>{countrysides_count}</span>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-end">
          <span className={styles.smallText}>
            With love from {location} in {country}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;