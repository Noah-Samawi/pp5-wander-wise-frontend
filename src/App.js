import React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LoginForm from "./pages/auth/LoginForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import WandererPage from "./pages/wanderers/WandererPage";
import UsernameForm from "./pages/wanderers/UsernameForm";
import UserPasswordForm from "./pages/wanderers/UserPasswordForm";
import WandererEditForm from "./pages/wanderers/WandererEditForm";
import NotFound from "./components/NotFound";
import AboutPage from "./pages/AboutPage";

function App() {
  const currentUser = useCurrentUser();
  const wanderer_id = currentUser?.wanderer_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<PostsPage message="No results found. Adjust the search keyword." />}
            />
            <Route
              path="/feed"
              element={<PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__wanderer=${wanderer_id}&`}
              />}
            />
            {/* Add other Route components as needed */}
            <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
