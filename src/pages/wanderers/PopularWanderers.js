import React from "react";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import Wanderer from "./Wanderer";
import { useWandererData } from "../../contexts/WandererDataContext";

const PopularWanderers = ({ mobile }) => {
  const { popularWanderers } = useWandererData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularWanderers.results.length ? (
        <>
          <h5
            className={`d-flex justify-content-center ${appStyles.HeaderMargin}`}
          >
            Popular Wanderers
          </h5>
          <hr />
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularWanderers.results.slice(0, 4).map((wanderer) => (
                <Wanderer key={wanderer.id} wanderer={wanderer} mobile />
              ))}
            </div>
          ) : (
            popularWanderers.results
              .slice(0, 10)
              .map((wanderer) => (
                <Wanderer key={wanderer.id} wanderer={wanderer} />
              ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularWanderers;
