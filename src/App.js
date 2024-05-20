import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
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
        <Router> {/* Use Router instead of BrowserRouter */}
          <Routes> {/* Use Routes */}
            <Route
              exact
              path="/"
              element={<PostsPage message="No results found. Adjust the search keyword." />}
            />
            <Route
              exact
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
