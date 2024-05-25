import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

import styles from "../styles/AboutPage.module.css";
import appStyles from "../App.module.css";

const AboutPage = () => {
  return (
    <Row>
      <Col md={6} className={`my-auto d-none d-md-block p-2`}>
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/djebesftb/image/upload/v1716196098/signupform_knv8sg.jpg"
          }
        />
      </Col>
      <Col md={6} className={`my-auto d-md-block p-2`}>
        <div className={styles.Info}>
          <h1>About</h1>
          <p>Welcome to the Wander Wise About page!</p>
          <p>
          Wander Wise is a web application that allows users to share their
            wander experiences, discover new destinations, and connect with
            other wanderers.
          </p>
          <p>
            Our mission is to inspire and empower individuals to explore the
            world, create memories, and make meaningful connections through
            travel.
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default AboutPage;
