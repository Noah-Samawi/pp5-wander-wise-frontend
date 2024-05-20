import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import Asset from "../../components/Asset";

import styles from "../../styles/WandererPage.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useSetWandererData,
  useWandererData,
} from "../../contexts/WandererDataContext";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResult from "../../assets/no-results.png";
import { WandererEditDropdown } from "../../components/MoreDropdown";

function WandererPage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const { setWandererData, handleFollow, handleUnFollow } =
    useSetWandererData();
  const { pageWanderer } = useWandererData();
  const [wanderer] = pageWanderer.results;
  const is_owner = currentUser?.username === wanderer?.owner;

  const [wandererPosts, setWandererPosts] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageWanderer }, { data: wandererPosts }] =
          await Promise.all([
            axiosReq.get(`/wanderers/${id}/`),
            axiosReq.get(`/posts/?owner__wanderer=${id}`),
          ]);
        setWandererData((prevState) => ({
          ...prevState,
          pageWanderer: { results: [pageWanderer] },
        }));
        setWandererPosts(wandererPosts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setWandererData]);

  // Display the main wanderer profile information
  const mainWanderer = (
    <>
      {wanderer?.is_owner && <WandererEditDropdown id={wanderer?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.WandererImage}
            roundedCircle
            src={wanderer?.image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{wanderer?.owner}</h3>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div className={styles.Text}>{wanderer?.posts_count}</div>
              <div className={styles.Text}>posts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.Text}>{wanderer?.followers_count}</div>
              <div className={styles.Text}>followers</div>
            </Col>
            <Col xs={3} className="my-2">
              <div className={styles.Text}>{wanderer?.following_count}</div>
              <div className={styles.Text}>following</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (wanderer?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Bright}`}
                onClick={() => handleUnFollow(wanderer)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleFollow(wanderer)}
              >
                follow
              </Button>
            ))}
        </Col>
      </Row>
      <hr />
      <Row noGutters className={`px-3 text-center d-flex ${styles.Info}`}>
        {wanderer?.content && (
          <Col className="mb-2">
            <i>"{wanderer.content}"</i>
          </Col>
        )}
        {wanderer?.favorite_place && (
          <Col className="mb-2">
            <i>"My favorite place in the world is {wanderer.favorite_place}"</i>
          </Col>
        )}
        {wanderer?.one_important_thing && (
          <Col className="mb-2">
            <i>
              "The most important thing in my luggage is{" "}
              {wanderer.one_important_thing}"
            </i>
          </Col>
        )}
      </Row>
    </>
  );

  const mainWandererPosts = (
    <>
      <hr />
      <p className="text-center">
        {wanderer?.owner}'s memory lane <i class="fa-solid fa-paper-plane"></i>
      </p>
      {wandererPosts.results.length ? (
        <InfiniteScroll
          children={wandererPosts.results.map((post) => (
            <Post
              key={post.id}
              {...post}
              setPosts={setWandererPosts}
              truncated={true}
            />
          ))}
          dataLength={wandererPosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!wandererPosts.next}
          next={() => fetchMoreData(wandererPosts, setWandererPosts)}
        />
      ) : (
        <Asset
          src={NoResult}
          message={`No results found, ${wanderer?.owner} hasn't posted anything yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-3 p-0 p-lg-2" lg={12}>
        {/* <PopularWanderers mobile /> */}
        <Container className={styles.Content}>
          {hasLoaded ? (
            <>
              {mainWanderer}
              {mainWandererPosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        {/* <PopularWanderers /> */}
      </Col>
    </Row>
  );
}

export default WandererPage;
