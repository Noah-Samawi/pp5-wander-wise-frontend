import React from "react";
import styles from "../../styles/WandererProfile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import Button from "react-bootstrap/Button";
import { useSetWandererData } from "../../contexts/WandererDataContext";

const Wanderer = (props) => {
  const { wanderer, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = wanderer;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFollow, handleUnFollow } = useSetWandererData();

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/wanderers/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
      <div className={`text-right ms-auto ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`me-1 ${btnStyles.Button} ${btnStyles.Bright}`}
              onClick={() => handleUnFollow(wanderer)}
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`me-1 ${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => handleFollow(wanderer)}
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Wanderer;
