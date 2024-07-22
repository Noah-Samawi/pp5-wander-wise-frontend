import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import alertStyles from "../../styles/AlertMessages.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
import { setTokenTimestamp } from "../../utils/utils";

function LogInForm() {
  // Initialize hooks and state
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = logInData;
  const navigate = useNavigate(); // Correctly using useNavigate for navigation
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (event) => {
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", logInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      navigate(-1);  // Navigate back to the previous page
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={appStyles.FillerImage}
          src="https://res.cloudinary.com/djebesftb/image/upload/v1717227073/nature-1033284166-20355450_doyijt.jpg"
        />
      </Col>
      <Col className="my-auto p-0 p-md-2" md={6}>
        <Container className={`${styles.Content} p-4`}>
          <h1 className={styles.Header}>Log In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert
                variant="warning"
                key={idx}
                className={alertStyles["alert-warning-custom"]}
              >
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert
                variant="warning"
                key={idx}
                className={alertStyles["alert-warning-custom"]}
              >
                {message}
              </Alert>
            ))}

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Blue}`}
              type="submit"
            >
              Login
            </Button>

            {errors.non_field_errors?.map((message, idx) => (
              <Alert
                variant="warning"
                key={idx}
                className={alertStyles["alert-warning-custom"]}
              >
                {message}
              </Alert>
            ))}
          </Form>
        </Container>
        <Container className={`mt-3 ${styles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up now!</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
}

export default LogInForm;
