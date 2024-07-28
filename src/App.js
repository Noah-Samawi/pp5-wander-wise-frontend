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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__wanderer=${wanderer_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/countryside"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or add a post to your countryside."
                filter={`countryside__owner__wanderer=${wanderer_id}&ordering=-countryside__created_at&`}
              />
            )}
          />
          <Route exact path="/login" render={() => <LoginForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/about" render={() => <AboutPage />} />
          <Route
            exact
            path="/posts/create"
            render={() => <PostCreateForm userId={wanderer_id} />}
          />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/wanderers/:id" render={() => <WandererPage />} />
          <Route
            exact
            path="/wanderers/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/wanderers/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/wanderers/:id/edit"
            render={() => <WandererEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;